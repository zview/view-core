<template>
    <div class="page-container1">

        <Navbar title="容器1" color="balanced"></Navbar>

        <Page :has-navbar="true" :has-tabbar="true">
            <Panel>内容</Panel>
        </Page>

        <Tabbar :tab-items="tabitems" :tab-index="tabindex" :on-tab-click="_on_tab_click"
                icon-align="top" bg-color="dark" tab-color="calm"></Tabbar>

    </div>
</template>

<script>
    export default {
        data () {
            return {
                message: '容器1',

                tabindex: 0,
                tabitems : [
                    {'id': 1, 'text': '新闻', 'icon': 'ion-ios-paper-outline'},
                    {'id': 2, 'text': '订阅', 'icon': 'ion-ios-book-outline'},
                    {'id': 3, 'text': '图片', 'icon': 'ion-images', 'badge': '2'},
                    {'id': 4, 'text': '视频', 'icon': 'ion-ios-videocam-outline'},
                ],
            }
        },
        mounted: function() {

        },
        methods: {
            _on_tab_click(index) {
                console.log('_on_tab_click', index);
                let vm = this;
                vm.tabindex = index;
            },
        },
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

</style>
