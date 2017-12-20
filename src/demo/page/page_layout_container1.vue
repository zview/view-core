<template>
    <div class="page-container1">

        <Navbar title="容器1" color="balanced"></Navbar>

        <Page :has-navbar="true" :has-tabbar="true">
            内容
        </Page>

        <Tabbar color="balanced" icon-align="top" :options="options" :value="2"></Tabbar>

    </div>
</template>

<script>
    export default {
        data () {
            return {
                message: '容器1',
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

        },
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

</style>
