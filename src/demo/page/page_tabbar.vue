<template>
    <div class="page-tabbar">

        <Tabbar icon-align="top" :options="options" :value="2"></Tabbar>

        <Page :has-tabbar="true">
            内容
        </Page>

    </div>
</template>

<script>
    export default {
        data () {
            return {
                message: '底部栏',
                options : [
                    {'id': 1, 'text': '新闻', 'icon': 'ion-ios-paper-outline'},
                    {'id': 2, 'text': '订阅', 'icon': 'ion-ios-book-outline'},
                    {'id': 3, 'text': '图片', 'icon': 'ion-images', 'badge': '2'},
                    {'id': 4, 'text': '视频', 'icon': 'ion-ios-videocam-outline'},
                ],
            }
        },
        methods: {

        },
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

</style>
