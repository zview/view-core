<template>
    <div class="page-tabbar">

        <Tabbar :tab-items="tabitems1" :tab-index="tabindex1" :is-top="true" :on-tab-click="_on_tab1_click"></Tabbar>

        <Tabbar :tab-items="tabitems2" :tab-index="tabindex2" :on-tab-click="_on_tab2_click"
              icon-align="top" bg-color="light" tab-color="calm"></Tabbar>

        <Page :has-tabbar="true" :has-navbar="true">
            <Panel>内容</Panel>
        </Page>

    </div>
</template>

<script>
    export default {
        data () {
            return {
                message: '底部栏',

                tabindex1: 0,
                tabitems1 : [
                    {'id': 1, 'text': '要闻'},
                    {'id': 2, 'text': '上海'},
                    {'id': 3, 'text': '财经'},
                    {'id': 4, 'text': '娱乐'},
                    {'id': 5, 'text': '体育'},
                ],

                tabindex2: 0,
                tabitems2 : [
                    {'id': 1, 'text': '新闻', 'icon': 'fa-snowflake-o'}, //ion-ios-paper-outline
                    {'id': 2, 'text': '订阅', 'icon': 'ion-ios-book-outline'},
                    {'id': 3, 'text': '图片', 'icon': 'ion-images', 'badge': '2'},
                    {'id': 4, 'text': '视频', 'icon': 'ion-ios-videocam-outline'},
                ],
            }
        },
        methods: {
            _on_tab1_click(index) {
                console.log('_on_tab1_click', index);
                this.tabindex1 = index;
            },
            _on_tab2_click(index) {
                console.log('_on_tab2_click', index);
                this.tabindex2 = index;
            },
        },
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

</style>
