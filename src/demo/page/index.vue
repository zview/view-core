<template>
    <div class="page-index">

        <Navbar title="首页" color="balanced"></Navbar>

        <Page :has-navbar="true" :has-tabbar="true">
            <List>
                <Item @click.native="_on_goto_page('/demo')" note="Demo">示例</Item>
                <Item note="Docs">文档</Item>
                <Item note="Github">源码</Item>
            </List>
        </Page>

        <Tabbar color="balanced" icon-align="top" :options="options" :value="2"></Tabbar>

    </div>
</template>

<script>
    export default {
        data () {
            return {
                message: '首页',
                options : [
                    {'id': 1, 'text': '新闻', 'icon': 'ion-ios-paper-outline'},
                    {'id': 2, 'text': '订阅', 'icon': 'ion-ios-book-outline'},
                    {'id': 3, 'text': '图片', 'icon': 'ion-images', 'badge': '2'},
                    {'id': 4, 'text': '视频', 'icon': 'ion-ios-videocam-outline'},
                ],
            }
        },
        methods: {
            _on_goto_page: function (page) {
                console.log('_on_goto_page', page);
                let vm = this;

                vm.$router.push(page);
            }

        },
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

</style>
