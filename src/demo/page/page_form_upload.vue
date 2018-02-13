<template>
    <div class="page-upload">

        <List>

            <Item>{{message}}</Item>

            <Item>
                <Upload accept="*/*" label="单文件上传"
                        :action="action"
                        :cross-domain="false"
                        :headers="headers"
                        :data="data"
                        :show-upload-list="true"
                        @terminate="_on_upload_terminate"
                        @prepare="_on_upload_prepare"
                        @finish="_on_upload_finish">

                    <Icon icon="ion-ios-plus-outline"></Icon>单文件上传

                </Upload>
            </Item>

            <Item>
                <Upload accept="image/*" label="多文件上传"
                        :action="action"
                        :cross-domain="false"
                        :is-error="_is_error"
                        :headers="headers"
                        :data="data"
                        :format="['jpg','jpeg','png']"
                        :per-size="4 * 1024"
                        :max-size="16 * 1024"
                        :max-num="4"
                        :compress="true"
                        :show-preview-local="false"
                        :show-files="true"
                        :show-file-info="false"
                        :load-local-data="false"
                        :file-list-type="'grid'"
                        :file-list-colnum="3"
                        :init-files="init_files"
                        :on-item-prepare="_on_item_prepare"
                        :on-item-progress="_on_item_progress"
                        :on-item-success="_on_item_success"
                        :on-item-error="_on_item_error"
                        :on-list-preview="_on_list_preview"
                        :on-list-remove="_on_list_remove"
                        @terminate="_on_upload_terminate"
                        @prepare="_on_upload_prepare"
                        @finish="_on_upload_finish"
                        multiple>

                    <Icon icon="ion-ios-plus-outline"></Icon>多文件上传

                </Upload>
            </Item>


        </List>

    </div>
</template>

<script>

    const ACTION_1 = '//jsonplaceholder.typicode.com/posts/';
    const ACTION_2 = 'http://gslb-mykid.xbdedu.cn/file';

    export default {
        data () {
            return {
                message: '文件上传',

                action: ACTION_2,
                headers: { 'Authorization':'Token 1234' },
                data: {'filetype': 4},
                wait_files: [],
                init_files: [], //[{'name': '1.jpg', 'url': 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'},{'name': '2.ppt', 'url': 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
            }
        },
        methods: {

            _is_error: function (status, data) {
                console.log('_is_error', status, data);
//                return status < 200 || status >= 300 || (data && data.result != 0);
//                return status < 200 || status >= 300;
                return false;
            },

            //整个过程
            _on_upload_terminate(file, message) {
                console.log('_on_upload_terminate', file, message);
                let vm = this;

                //显示提示信息并关闭进度条
//                vm.$loading.hide();
                vm.$toast.show(message, 1000).then(() => {
                    console.log('toast hide');
                });
            },
            _on_upload_prepare () {
                console.log('_on_upload_prepare');
                //打开进度条
            },
            _on_upload_finish () {
                console.log('_on_upload_finish');
                //显示提示信息并关闭进度条
            },

            //单个文件
            _on_item_prepare: function (file) {
                console.log('_on_item_prepare', file);
                let vm = this;

                vm.$loading.show('正在上传');
            },
            _on_item_progress: function (event, file, files) {
                console.log('_on_item_progress', event.percent, event.loaded, event.total, file, files);

            },
            _on_item_success: function (res, file, files) {
                console.log('_on_item_success', res, file, files);
                let vm = this;

                //
                vm.waitfiles = files;
                if(vm.waitfiles && vm.waitfiles.length) {
                    for(let pic of vm.waitfiles) {
                        pic.url = pic.response.data.fileurl; //cvar.render_imgholder(pic.response.data.filename);
                    }
                }

                vm.$loading.hide();
            },
            _on_item_error: function (err, res, files) {
                console.log('_on_item_error', err, res, files);
                let vm = this;

//                vm.$loading.hide();
                let message = res.message;//cutility.response.parseMessage(res);
                vm.$toast.show(message, 1500).then(() => {
                    console.log('toast hide');
                });
            },

            //文件列表
            _on_list_preview: function (file) {
                console.log('_on_list_preview', file);
                let vm = this;

                vm.$toast.show('文件列表预览', 1000).then(() => {
                    console.log('toast hide');
                });
            },
            _on_list_remove: function (file, files) {
                console.log('_on_list_remove', file, files);
                let vm = this;

                vm.waitfiles = files;
                vm.$toast.show('文件列表移除', 1000).then(() => {
                    console.log('toast hide');
                });
            },

        },
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

</style>
