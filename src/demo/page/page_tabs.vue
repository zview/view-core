<template>
    <div class="page-tabs">

        <Tabs color="positive" :is-top="true" :options="options" :value="5"></Tabs>

        <Tabs color="balanced" icon-align="top" :options="options2" :value="2"></Tabs>

    </div>
</template>

<script>
    export default {
        data () {
            return {
                message: '标签页',
                options : [
                    {'id': 1, 'text': '要闻'},
                    {'id': 2, 'text': '上海'},
                    {'id': 3, 'text': '财经'},
                    {'id': 4, 'text': '娱乐'},
                    {'id': 5, 'text': '体育'},
                ],
                options2 : [
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
