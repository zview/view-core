<template>
    <div class="page-upload">

        <List>

            <Item>{{message}}</Item>

            <Item>
                <Upload accept="*/*" label="单文件上传"
                        v-model="init_files1"
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
                <Button type="block" bg-color="positive" @click="_on_get_value1">取值</Button>
            </Item>

            <Item>
                <Upload accept="image/*" label="多文件上传"
                        v-model="init_files2"
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

            <Item>
                <Button type="block" bg-color="positive" @click="_on_get_value2">取值</Button>
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

                //
                action: ACTION_2,
                headers: { 'Authorization':'Token 1234' },
                data: {'filetype': 4},

                //
                init_files1: [],
                init_files2: [
                 {'name': '1.jpg', 'url': 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'},
                 {'name': '2.ppt', 'url': 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}
                ],
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
                vm.$toast.show(message, 1000);
            },
            _on_upload_prepare (files) {
                console.log('_on_upload_prepare', files);
                //打开进度条
            },
            _on_upload_finish () {
                console.log('_on_upload_finish');
                let vm = this;

                //显示提示信息并关闭进度条
                vm.$loading.hide();
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
                if(files && files.length) {
                    for(let image of files) {
//                        image.url = image.response.data.fileurl; //cvar.render_imgholder(image.response.data.filename);
                    }
                }

                vm.$loading.hide();
            },
            _on_item_error: function (err, res, files) {
                console.log('_on_item_error', err, res, files);
                let vm = this;

//                vm.$loading.hide();
                let message = res.message || res;//cutility.response.parseMessage(res);
                vm.$toast.show(message, 1500);
            },


            //文件列表
            _on_list_preview: function (file) {
                console.log('_on_list_preview', file);
                let vm = this;
                vm.$toast.show('文件列表预览', 1000);
            },
            _on_list_remove: function (file, files) {
                console.log('_on_list_remove', file, files);
                let vm = this;
                vm.$toast.show('文件列表移除', 1000);
            },


            //
            _on_get_value1: function () {
                let vm = this;
                console.log('_on_get_value1', vm.init_files1);
                vm.$toast.show('文件列表' + vm.init_files1.length, 1000);
            },
            _on_get_value2: function () {
                let vm = this;
                console.log('_on_get_value2', vm.init_files2);
                vm.$toast.show('文件列表' + vm.init_files2.length, 1000);
            },

        },
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

</style>
