<template>
    <div class="page-upload">

        <List>

            <Item>
                <Upload action="http://ysbd-dev.xbdedu.cn/api/file/?filetype=4"
                        @terminate="_on_upload_terminate"
                        @prepare="_on_upload_prepare"
                        :on-success="_on_upload_success">

                    <Button type="outline" color="positive" icon="fa-cloud">单文件</Button>

                </Upload>
            </Item>

            <Item>
                <Upload action="http://ysbd-dev.xbdedu.cn/api/file/?filetype=4"
                        accept="image/*"
                        :data="{'filetype': 4}"
                        :format="['jpg','jpeg','png']"
                        :per-size="10 * 1024 * 1024"
                        :max-size="10 * 1024 * 1024 * 4"
                        :max-num="4"
                        :on-progress="_on_upload_progress"
                        :on-success="_on_upload_success"
                        :on-error="_on_upload_error"
                        :on-preview="_on_file_preview"
                        :on-remove="_on_file_remove"
                        :on-format-error="_on_file_format_error"
                        :on-exceeded-size="_on_file_exceeded_size"
                        @terminate="_on_upload_terminate"
                        @prepare="_on_upload_prepare" multiple>

                    <Button type="outline" color="positive" icon="fa-cloud">多文件</Button>

                </Upload>
            </Item>

        </List>

    </div>
</template>

<script>

    import ExifImage from '../../util/image-exif';
    import compressor from '../../util/image-compressor';

    export default {
        data () {
            return {
                message: '文件上传',
            }
        },
        methods: {
            _on_upload_terminate(message) {
                console.log('_on_upload_terminate', message);
                //显示提示信息并关闭进度条
            },
            _on_upload_prepare () {
                console.log('_on_upload_prepare');
                //打开进度条
            },

            _on_upload_progress: function (event, file, fileList) {
                console.log('_on_upload_progress', event.percent, event.loaded, event.total);

            },
            _on_upload_success: function (response, file, fileList) {
                console.log('_on_upload_success', response, file, fileList);

            },
            _on_upload_error: function (error, file, fileList) {
                console.log('_on_upload_error', error, file, fileList);

            },

            _on_file_preview: function (file) {
                console.log('_on_file_preview', file);

            },
            _on_file_remove: function (file, fileList) {
                console.log('_on_file_remove', file, fileList);

            },
            _on_file_format_error: function (file, fileList) {
                console.log('_on_file_format_error', file, fileList);

            },
            _on_file_exceeded_size: function (file, fileList) {
                console.log('_on_file_exceeded_size', file, fileList);

            },



            /*_on_upload_progress (progress, eventid) {
                console.log('_on_upload_progress', progress, eventid);
                //刷新进度条
            },
            _on_upload_fileprev (file, eventid) {
                console.log('_on_upload_fileprev', file, eventid);
                //预览图片
            },
            _on_upload_complete(file, eventid) {
                console.log('_on_upload_complete', file, eventid);
                var vm = this;

                //
                vm._switch_render_image(file,function (blob) {

                    //构造Form
                    const formdata = new FormData();
                    formdata.append('file', blob);

                    //执行上传
                    vm._exec_http_upload_file(eventid, formdata);
                });

            },*/




            _switch_render_image: function (file, callback) {
                console.log('_switch_render_image');

                let max_width = 1280;
                let max_height = 960;
                let max_quality = 0.9;

                if (!navigator.userAgent.match(/iphone/i)) {
                    compressor._render_image_to_blob(file, max_width, max_height, max_quality, null, callback);
                    return;
                }

                ExifImage.getData(file, function() {
                    let metaall = ExifImage.getAllTags(this);
                    console.log('metaall', metaall);
                    let orientation = ExifImage.getTag(this, 'Orientation');
                    console.log('orientation', orientation);
                    compressor._render_image_to_blob(file, max_width, max_height, max_quality, orientation, callback);
                });
            },
            _exec_http_upload_file: function (eventid, formdata) {
                console.log('_exec_http_upload_file', eventid, formdata);

                //执行上传
                console.log('执行上传');
            },
        },
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

</style>
