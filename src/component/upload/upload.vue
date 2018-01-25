<template>


    <div class="view-upload-wrapper">

        <div class="view-upload-item" :class="upload_classes"
             @drop.prevent="_on_file_drop"
             @dragover.prevent="dragOver = true"
             @dragleave.prevent="dragOver = false">

            <input :id="input_id" type="file"
                   :accept="accept" :multiple="multiple"
                   @change="_on_file_change" ref="input-element">
            <label class="view-upload-item-label" :for="input_id" :class="upload_label_classes">
                <slot></slot>
            </label>
            <slot name="tip"></slot>

        </div>

        <UploadList v-if="showUploadList & fileList.length>0"
                    :files="fileList"
                    @on-file-remove="handleListRemove"
                    @on-file-preview="handleListPreview">
        </UploadList>

    </div>

    <!--触发方式-->
    <!--1. @click="_file_click" -->
    <!--2. :for="input_id" -->

</template>

<script>

    //
    import { oneOf, insideIonic, insideColor } from '../utils';
    import Emitter from '../../mixins/emitter';
    import XmlHttp from './xmlhttp';
    import UploadList from './upload-list.vue';

    import imageexif from '../../util/image-exif';
    import imagecomp from '../../util/image-compressor';

    //
    const prefixCls = 'view-upload';

    //
    const KB = 1024;
    const COMPRESS_MAX_WIDTH    = 1280;
    const COMPRESS_MAX_HEIGHT   = 960;
    const COMPRESS_MAX_QUALITY  = 0.9;

    export default {
        name : 'Upload',
        mixins: [ Emitter ],
        components: { UploadList },
        props : {
            color: {
                validator (value) {
                    return insideColor(value);
                }
            },
            bgColor: {
                validator (value) {
                    return insideColor(value);
                }
            },
            action: {  //上传地址
                type: String,
                required: true
            },
            method: {  //提交方式
                type: String,
                validator (value) {
                    return oneOf(value, ['post', 'put'], true);
                },
                default: 'post'
            },
            headers: { //设置上传的请求头部
                type: Object,
                default () {
                    return {};
                }
            },
            data: { //设置其他请求参数
                type: Object
            },
            name: { //文件字段名
                type: String,
                default: 'file'
            },
            withCredentials: { //认证
                type: Boolean,
                default: false
            },
            crossDomain: { //跨域
                type: Boolean,
                default: false
            },
            multiple: { //多文件上传
                type: Boolean,
                default: false
            },
            type: { //方式
                type: String,
                validator (value) {
                    return oneOf(value, ['select', 'drag'], true);
                },
                default: 'select'
            },
            accept: { //允许的上传类型  (https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-accept)
                type: String
            },
            format: { //允许的文件扩展名
                type: Array,
                default () {
                    return [];
                }
            },
            perSize: { //单个文件大小限制，单位 KB
                type: Number
            },
            maxSize: { //文件大小限制，单位 KB
                type: Number
            },
            maxNum: { //文件个数限制
                type: Number
            },

            //
            compress: { //压缩
                type: Boolean,
                default: false
            },
            compressMaxWidth: {
                type: Number,
                default: COMPRESS_MAX_WIDTH,
            },
            compressMaxHeight: {
                type: Number,
                default: COMPRESS_MAX_HEIGHT,
            },
            compressMaxQuality: {
                type: Number,
                default: COMPRESS_MAX_QUALITY,
            },

            //
            onItemPrepare: { //单个文件开始
                type: Function,
                default () {
                    return {};
                }
            },
            onItemProgress: { //单个文件进度
                type: Function,
                default () {
                    return {};
                }
            },
            onItemSuccess: { //单个文件成功
                type: Function,
                default () {
                    return {};
                }
            },
            onItemError: { //单个文件失败
                type: Function,
                default () {
                    return {};
                }
            },

            initFileList: {  //初始的文件列表
                type: Array,
                default() {
                    return [];
                }
            },
            showUploadList: { //显示上传列表
                type: Boolean,
                default: true
            },
            onListRemove: { //上传列表中删除
                type: Function,
                default () {
                    return {};
                }
            },
            onListPreview: { //上传列表中预览
                type: Function,
                default () {
                    return {};
                }
            },
            uploadLabelClassName: String,
        },
        data () {
            return {
                dragOver: false,
                fileList: [],  //上传文件列表
                tmpIndex: 1,  //待上传文件索引
            };
        },
        mounted: function() {
            console.log('mounted');
        },
        computed: {
            input_id: function () {
                return 'view-upload-item-input-'+(Math.random() * 10000 + '').split('.')[0];
            },
            upload_classes () {
                return [
                    `${prefixCls}`,
                    {
                        [`${this.color}`]: !!this.color,
                        [`${this.bgColor}-bg`]: !!this.bgColor,
                        [`${prefixCls}-select`]: this.type === 'select',
                        [`${prefixCls}-drag`]: this.type === 'drag',
                        [`${prefixCls}-dragOver`]: this.type === 'drag' && this.dragOver
                    }
                ];
            },
            upload_label_classes () {
                return [
                    {
                        [`${this.uploadLabelClassName}`]: !!this.uploadLabelClassName
                    }
                ];
            },
        },
        watch: {
            initFileList: {
                immediate: true,
                handler(fileList) {
                    this.fileList = fileList.map(item => {
                        item.status = 'finished';
                        item.percentage = 100;
                        item.uid = Date.now() + this.tmpIndex++;
                        return item;
                    });
                }
            }
        },
        methods: {
            _file_click : function () {
                console.log('_file_click');
                let vm = this;
                vm.$refs['input-element'].click(); //.change();  .trigger('click');
            },
            _on_file_drop: function (event) {
                console.log('_on_file_drop');
                let vm = this;

                //
                vm.dragOver = false;

                let files = event.dataTransfer.files;
                vm._handle_files(files);
            },
            _on_file_change: function (event) {
                console.log('_on_file_change');
                let vm = this;

                //
                let files = event.target.files;
                vm._handle_files(files);
                event.target.value = null;
            },



            _handle_files: function (files) {
                console.log('_handle_files', files.length);
                let vm = this;

                //校验文件
                if(!files || files.length<=0 || !files[0])
                {
                    vm.$emit('terminate', null, '读取文件发生错误');
                    return false;
                }

                //校验文件个数
                if(vm.multiple && vm.maxNum && vm.maxNum>1 && files.length>vm.maxNum)
                {
                    vm.$emit('terminate', null, '文件个数超出限制: ' + files.length + ' > ' + vm.maxNum);
                    return false;
                }

                //计算文件总大小
                let totalsize = 0;
                for(let i=0; i<files.length; i++)
                {
                    totalsize += files[i].size;
                }

                //校验文件大小
                if(vm.maxSize && vm.maxSize>0 && totalsize>vm.maxSize * KB)
                {
                    vm.$emit('terminate', null, '文件大小超出范围: ' + totalsize + '>' + vm.maxSize * KB);
                    return false;
                }

                //上传文件
                vm.$emit('prepare');
                let _files = Array.prototype.slice.call(files);
                if (!vm.multiple) _files = _files.slice(0, 1);
                if (_files.length > 0)  {
                    _files.forEach(file => {
                        vm._on_handle_file(file);
                    });
                }
                vm.$emit('finish');

                //
                vm.$refs['input-element'].value = null;
            },

            _on_handle_file: function (file) {
                console.log('_on_handle_file');
                let vm = this;

                // check format
                if (vm.format.length) {
                    const _file_format = file.name.split('.').pop().toLocaleLowerCase();
                    const checked = vm.format.some(item => item.toLocaleLowerCase() === _file_format);
                    if (!checked) {
                        vm.$emit('terminate', file, '文件格式不被允许: ' + _file_format + ' not in ' + vm.format);
                        return false;
                    }
                }

                // check size
                if (vm.perSize) {
                    if (file.size > vm.perSize * KB) {
                        vm.$emit('terminate', file, '文件大小超出范围: ' + file.size + ' > ' + vm.perSize * KB);
                        return false;
                    }
                }

                // 开始上传
                vm.handleStart(file);

                if(vm.compress) {
                    //
                    vm._switch_render_image(file,function (blob) {

                        XmlHttp({
                            headers: vm.headers,
                            crossDomain: vm.crossDomain,
                            withCredentials: vm.withCredentials,
                            blob: blob,
                            data: vm.data,
                            filename: vm.name,
                            action: vm.action,
                            method: vm.method,
                            onProgress: err => {
                                vm.handleProgress(err, file);
                            },
                            onSuccess: res => {
                                vm.handleSuccess(res, file);
                            },
                            onError: (err, res) => {
                                vm.handleError(err, res, file);
                            }
                        });

                    });
                }
                else {
                    XmlHttp({
                        headers: vm.headers,
                        crossDomain: vm.crossDomain,
                        withCredentials: vm.withCredentials,
                        file: file,
                        data: vm.data,
                        filename: vm.name,
                        action: vm.action,
                        method: vm.method,
                        onProgress: err => {
                            vm.handleProgress(err, file);
                        },
                        onSuccess: res => {
                            vm.handleSuccess(res, file);
                        },
                        onError: (err, res) => {
                            vm.handleError(err, res, file);
                        }
                    });
                }

            },

            //
            _switch_render_image: function (file, callback) {
                console.log('_switch_render_image');
                let vm = this;

                //非iPhone做压缩操作
                if (!navigator.userAgent.match(/iphone/i)) {
                    imagecomp._render_image_to_blob(file, vm.compressMaxWidth, vm.compressMaxHeight,
                        vm.compressMaxQuality, null, callback);
                    return;
                }

                //iPhone做旋转且压缩操作
                imageexif.getData(file, function() {
                    let metaall = imageexif.getAllTags(this);
                    console.log('metaall', metaall);
                    let orientation = imageexif.getTag(this, 'Orientation');
                    console.log('orientation', orientation);
                    imagecomp._render_image_to_blob(file, vm.compressMaxWidth, vm.compressMaxHeight,
                        vm.compressMaxQuality, orientation, callback);
                });
            },

            //
            getFile (file) {
                let vm = this;

                const _files = vm.fileList;
                let target;
                _files.every(item => {
                    target = file.uid === item.uid ? item : null;
                    return !target;
                });
                return target;
            },

            //
            handleStart (file) {
                let vm = this;

                file.uid = Date.now() + vm.tmpIndex++;
                const _file = {
                    status: 'uploading',
                    name: file.name,
                    size: file.size,
                    percentage: 0,
                    uid: file.uid,
                    showProgress: true
                };
                vm.fileList.push(_file);
                vm.onItemPrepare(_file);
            },
            handleProgress (err, file) {
                let vm = this;
                const _file = vm.getFile(file);
                const _files = vm.fileList;

                vm.onItemProgress(err, _file, _files);
                _file.percentage = err.percent || 0;
            },
            handleSuccess (res, file) {
                let vm = this;
                const _file = vm.getFile(file);
                const _files = vm.fileList;

                if (_file) {
                    _file.status = 'finished';
                    _file.response = res;

                    vm.dispatch('Form', 'on-form-item-change', _file);
                    vm.onItemSuccess(res, _file, _files);

                    setTimeout(() => {
                        _file.showProgress = false;
                    }, 1000);
                }
            },
            handleError (err, res, file) {
                let vm = this;
                const _file = vm.getFile(file);
                const _files = vm.fileList;

                _file.status = 'fail';
                _files.splice(_files.indexOf(_file), 1);
                vm.onItemError(err, res, file);
            },


            //
            clearFileList() {
                let vm = this;
                vm.fileList = [];
            },

            //列表的操作
            handleListRemove(file) {
                let vm = this;
                const _files = vm.fileList;
                _files.splice(_files.indexOf(file), 1);
                vm.onListRemove(file, _files);
            },
            handleListPreview(file) {
                let vm = this;
                if (file.status === 'finished') {
                    vm.onListPreview(file);
                }
            },
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

    .view-upload-item
    {
        input[type="file"]
        {
            display: none;
        }

        label.view-upload-item-label
        {
            display: inline-block;
            position: relative;
        }
    }

</style>
