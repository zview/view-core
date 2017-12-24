<template>
    <div class="page-tabs">

        <Tabs :tab-items="options1" :tab-index="index1" :is-top="true" :on-tab-click="onTab1Click"></Tabs>

        <Tabs :tab-items="options2" :tab-index="index2" :on-tab-click="onTab2Click"
              icon-align="top" bg-color="dark"></Tabs>

    </div>
</template>

<script>
    export default {
        data () {
            return {
                message: '标签页',
                index1: 0,
                options1 : [
                    {'id': 1, 'text': '要闻'},
                    {'id': 2, 'text': '上海'},
                    {'id': 3, 'text': '财经'},
                    {'id': 4, 'text': '娱乐'},
                    {'id': 5, 'text': '体育'},
                ],
                index2: 0,
                options2 : [
                    {'id': 1, 'text': '新闻', 'icon': 'ion-ios-paper-outline'},
                    {'id': 2, 'text': '订阅', 'icon': 'ion-ios-book-outline'},
                    {'id': 3, 'text': '图片', 'icon': 'ion-images', 'badge': '2'},
                    {'id': 4, 'text': '视频', 'icon': 'ion-ios-videocam-outline'},
                ],
            }
        },
        methods: {
            onTab1Click(index) {
                console.log('onTab1Click', index);
                this.index1 = index;
            },
            onTab2Click(index) {
                console.log('onTab2Click', index);
                this.index2 = index;
            },
        },
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

</style>
