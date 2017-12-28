<template>

    <div class="view_upload_item" :class="classes"
         @drop.prevent="_on_file_drop"
         @dragover.prevent="dragOver = true"
         @dragleave.prevent="dragOver = false">
        <input :id="input_id" type="file"
               :accept="accept" :multiple="multiple"
               @change="_on_file_change" ref="input-element">
        <label class="view_upload_label" :for="input_id" :class="label_classes">
            <slot></slot>
        </label>
        <slot name="tip"></slot>

        <UploadList
            v-if="showUploadList"
            :files="fileList"
            @on-file-remove="handleRemove"
            @on-file-preview="handlePreview">
        </UploadList>
    </div>

    <!--触发方式-->
    <!--1. @click="_file_click" -->
    <!--2. :for="input_id" -->

</template>

<script>

    import { oneOf, insideIonic } from '../utils';
    import Emitter from '../../mixins/emitter';
    import XmlHttp from './xmlhttp';
    import UploadList from './upload-list.vue';

    const prefixCls = 'view-upload';

    export default {
        name : 'Upload',
        mixins: [ Emitter ],
        components: { UploadList },
        props : {
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
            showUploadList: {
                type: Boolean,
                default: true
            },
            multiple: { //多文件上传
                type: Boolean,
                default: false
            },
            type: { //
                type: String,
                validator (value) {
                    return oneOf(value, ['select', 'drag'], true);
                },
                default: 'select'
            },
            format: { //允许的文件扩展名
                type: Array,
                default () {
                    return [];
                }
            },
            accept: { //允许的上传类型  (https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-accept)
                type: String
            },
            perSize: { //单个文件大小限制，单位 kb
                type: Number
            },
            maxSize: { //文件大小限制，单位 kb
                type: Number
            },
            maxNum: { //文件个数限制
                type: Number
            },
            onProgress: {
                type: Function,
                default () {
                    return {};
                }
            },
            onSuccess: {
                type: Function,
                default () {
                    return {};
                }
            },
            onError: {
                type: Function,
                default () {
                    return {};
                }
            },
            onRemove: {
                type: Function,
                default () {
                    return {};
                }
            },
            onPreview: {
                type: Function,
                default () {
                    return {};
                }
            },
            onExceededSize: {
                type: Function,
                default () {
                    return {};
                }
            },
            onFormatError: {
                type: Function,
                default () {
                    return {};
                }
            },
            defaultFileList: {
                type: Array,
                default() {
                    return [];
                }
            },
            labelClassName: String,
        },
        data () {
            return {
                dragOver: false,
                fileList: [],
                tempIndex: 1
            };
        },
        mounted: function() {
            console.log('mounted');
        },
        computed: {
            input_id: function () {
                return 'view-upload-input-'+(Math.random() * 10000 + '').split('.')[0];
            },
            classes () {
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-select`]: this.type === 'select',
                        [`${prefixCls}-drag`]: this.type === 'drag',
                        [`${prefixCls}-dragOver`]: this.type === 'drag' && this.dragOver
                    }
                ];
            },
            label_classes () {
                return [
                    {
                        [`${this.labelClassName}`]: !!this.labelClassName
                    }
                ];
            },
        },
        watch: {
            defaultFileList: {
                immediate: true,
                handler(fileList) {
                    this.fileList = fileList.map(item => {
                        item.status = 'finished';
                        item.percentage = 100;
                        item.uid = Date.now() + this.tempIndex++;
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
                    vm.$emit('terminate', '读取文件发生错误');
                    return false;
                }

                //校验文件个数
                if(vm.multiple && vm.maxNum && vm.maxNum>1 && files.length>vm.maxNum)
                {
                    vm.$emit('terminate', '文件个数超出限制: ' + files.length + '/' + vm.maxNum);
                    return false;
                }

                //计算文件总大小
                let totalsize = 0;
                for(let i=0; i<files.length; i++)
                {
                    totalsize += files[i].size;
                }

                //校验文件大小
                if(vm.maxSize && vm.maxSize>0 && totalsize>vm.maxSize * 1024)
                {
                    vm.$emit('terminate', '文件大小超出范围: ' + totalsize + '/' + vm.maxSize * 1024);
                    return false;
                }

                //上传文件
                vm.$emit('prepare');
                let postFiles = Array.prototype.slice.call(files);
                if (!vm.multiple) postFiles = postFiles.slice(0, 1);
                if (postFiles.length === 0) return false;

                postFiles.forEach(file => {
                    vm._on_handle_file(file);
                });

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
                        vm.onFormatError(file, vm.fileList);
                        return false;
                    }
                }

                // check size
                if (vm.perSize) {
                    if (file.size > vm.perSize * 1024) {
                        vm.onExceededSize(file, vm.fileList);
                        return false;
                    }
                }

                //
                vm.handleStart(file);
                let formData = new FormData();
                formData.append(vm.name, file);

                XmlHttp({
                    headers: vm.headers,
                    crossDomain: vm.crossDomain,
                    withCredentials: vm.withCredentials,
                    file: file,
                    data: vm.data,
                    filename: vm.name,
                    action: vm.action,
                    method: vm.method,
                    onProgress: e => {
                        vm.handleProgress(e, file);
                    },
                    onSuccess: res => {
                        vm.handleSuccess(res, file);
                    },
                    onError: (err, response) => {
                        vm.handleError(err, response, file);
                    }
                });
            },

            getFile (file) {
                let vm = this;

                const fileList = vm.fileList;
                let target;
                fileList.every(item => {
                    target = file.uid === item.uid ? item : null;
                    return !target;
                });
                return target;
            },
            handleStart (file) {
                let vm = this;

                file.uid = Date.now() + vm.tempIndex++;
                const _file = {
                    status: 'uploading',
                    name: file.name,
                    size: file.size,
                    percentage: 0,
                    uid: file.uid,
                    showProgress: true
                };
                vm.fileList.push(_file);
            },
            handleProgress (e, file) {
                let vm = this;

                const _file = vm.getFile(file);
                vm.onProgress(e, _file, vm.fileList);
                _file.percentage = e.percent || 0;
            },
            handleSuccess (res, file) {
                let vm = this;

                const _file = vm.getFile(file);
                if (_file) {
                    _file.status = 'finished';
                    _file.response = res;

                    vm.dispatch('FormItem', 'on-form-change', _file);
                    vm.onSuccess(res, _file, vm.fileList);

                    setTimeout(() => {
                        _file.showProgress = false;
                    }, 1000);
                }
            },
            handleError (err, response, file) {
                let vm = this;

                const _file = vm.getFile(file);
                const fileList = vm.fileList;
                _file.status = 'fail';
                fileList.splice(fileList.indexOf(_file), 1);

                vm.onError(err, response, file);
            },

            handleRemove(file) {
                let vm = this;

                const fileList = vm.fileList;
                fileList.splice(fileList.indexOf(file), 1);
                vm.onRemove(file, fileList);
            },
            handlePreview(file) {
                let vm = this;

                if (file.status === 'finished') {
                    vm.onPreview(file);
                }
            },
            clearFiles() {
                let vm = this;

                vm.fileList = [];
            }
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

    .view_upload_item
    {
        input[type="file"]
        {
            display: none;
        }

        label.view_upload_label
        {
            display: inline-block;
            position: relative;
        }
    }

</style>
