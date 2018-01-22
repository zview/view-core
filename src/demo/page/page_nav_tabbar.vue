<template>
    <div class="page-tabbar">

        <Tabbar :tab-items="tabitems1" :tab-index="tabindex1"
                :on-tab-click="_on_tab1_click" :is-top="true" bg-color="light" tab-color="calm"></Tabbar>

        <Tabbar :tab-items="tabitems2" :tab-index="tabindex2"
                :on-tab-click="_on_tab2_click" icon-align="top"></Tabbar>

        <Page :has-tabbar="true" :has-navbar="true">
            <Panel>内容</Panel>

            <Panel>
                <span @click="_on_switch_tab2">切换Tab2</span>
            </Panel>
        </Page>

    </div>
</template>

<script>
    export default {
        data () {
            return {
                message: '底部栏',

                tabindex1: 0,
                tabitems1: [
                    {'id': 1, 'text': '要闻'},
                    {'id': 2, 'text': '上海'},
                    {'id': 3, 'text': '财经'},
                    {'id': 4, 'text': '娱乐'},
                    {'id': 5, 'text': '体育'},
                ],

                tabindex2: 0,
                tabitems2: [
                    {'id': 1, 'text': '新闻', 'icon': 'fa-snowflake-o'}, //ion-ios-paper-outline
                    {'id': 2, 'text': '订阅', 'icon': 'fa-envira'}, //ion-ios-book-outline
                    {'id': 3, 'text': '图片', 'icon': 'fa-fire', 'badge': '2'}, //ion-images
                    {'id': 4, 'text': '视频', 'icon': 'fa-flag'}, //ion-ios-videocam-outline
                ],
            }
        },
        methods: {
            _on_tab1_click(index) {
                console.log('_on_tab1_click', index);
                let vm = this;
                vm.tabindex1 = index;
            },
            _on_tab2_click(index) {
                console.log('_on_tab2_click', index);
                let vm = this;
                vm.tabindex2 = index;
            },
            _on_switch_tab2: function () {
                console.log('_on_switch_tab2');
                let vm = this;
                vm.tabindex2 = vm.tabindex2?0:1;
            },
        },
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

</style>
