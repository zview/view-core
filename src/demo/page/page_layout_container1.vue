<template>
    <div class="page-container1">

        <Navbar title="容器1" color="balanced"></Navbar>

        <Page :has-navbar="true" :has-tabbar="true">
            内容
        </Page>

        <Tabbar :tab-items="options" :tab-index="index" :on-tab-click="onTabClick"
                icon-align="top" bg-color="dark"></Tabbar>

    </div>
</template>

<script>
    export default {
        data () {
            return {
                message: '容器1',

                index: 0,
                options : [
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
            onTabClick(index) {
                console.log('onTabClick', index);
                this.index2 = index;
            },
        },
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

</style>
