<template>
    <div class="page-buttonbar">

        <ButtonBar theme="balanced" :options="options" type="buttonbar-tabs"
                   @on-tab-click="_on_tab_click"
                   :on-tab-selected="_on_tab_selected"></ButtonBar>


        <Panel type="inset" bg-color="light">
            <ButtonBar theme="assertive" :options="options_theme" :tab-index="0"
                       @on-tab-click="_on_tab_click"></ButtonBar>
            <ButtonBar theme="positive" :options="options_theme" :tab-index="1"
                       @on-tab-click="_on_tab_click"></ButtonBar>
            <ButtonBar theme="balanced" :options="options_theme" :tab-index="1"
                       @on-tab-click="_on_tab_click"></ButtonBar>
            <ButtonBar theme="energized" :options="options_theme" :tab-index="1"
                       @on-tab-click="_on_tab_click"></ButtonBar>
            <ButtonBar theme="calm" :options="options_theme" :tab-index="1"
                       @on-tab-click="_on_tab_click"></ButtonBar>
            <ButtonBar theme="royal" :options="options_theme" :tab-index="1"
                       @on-tab-click="_on_tab_click"></ButtonBar>
            <ButtonBar theme="dark" :options="options_theme" :tab-index="1"
                       @on-tab-click="_on_tab_click"></ButtonBar>
        </Panel>

        <Panel type="inset" bg-color="light">
            <ButtonBar theme="assertive" :options="options_theme" :tab-index="0" type="buttonbar-tabs"
                       @on-tab-click="_on_tab_click"></ButtonBar>
            <ButtonBar theme="positive" :options="options_theme" :tab-index="1" type="buttonbar-tabs"
                       @on-tab-click="_on_tab_click"></ButtonBar>
            <ButtonBar theme="balanced" :options="options_theme" :tab-index="1" type="buttonbar-tabs"
                       @on-tab-click="_on_tab_click"></ButtonBar>
            <ButtonBar theme="energized" :options="options_theme" :tab-index="1" type="buttonbar-tabs"
                       @on-tab-click="_on_tab_click"></ButtonBar>
            <ButtonBar theme="calm" :options="options_theme" :tab-index="1" type="buttonbar-tabs"
                       @on-tab-click="_on_tab_click"></ButtonBar>
            <ButtonBar theme="royal" :options="options_theme" :tab-index="1" type="buttonbar-tabs"
                       @on-tab-click="_on_tab_click"></ButtonBar>
            <ButtonBar theme="dark" :options="options_theme" :tab-index="1" type="buttonbar-tabs"
                       @on-tab-click="_on_tab_click"></ButtonBar>
        </Panel>

        <div class="item item-divider">
            商品分类: {{index_promotion}}
        </div>
        <Panel type="inset" bg-color="light">
            <ButtonBar theme="assertive" :options="options_promotion" :tab-index="index_promotion"
                       @on-tab-click="_on_tab_click_prom"></ButtonBar>
        </Panel>
        <div class="item item-borderless">
            选中: {{ options_promotion[index_promotion].name }}
        </div>

    </div>
</template>

<script>
    export default {
        data () {
            return {
                message: '按钮栏',

                options_theme: [
                    {'id': 1, 'name' : 'tab1'},
                    {'id': 2, 'name' : 'tab2'},
                    {'id': 3, 'name' : 'tab3'},
                ],
                options_promotion: [
                    {'id': 1, 'name' : '往期热卖'},
                    {'id': 2, 'name' : '抢购进行中'},
                ],
                index_promotion: 1,

                options: [
                    {'id': 1, 'name' : '中文', 'icon': 'ion-android-share'},
                    {'id': 2, 'name' : '英文', 'icon': 'ion-images'},
                ],
            }
        },
        methods: {
            _on_tab_click: function (index, id) {
                console.log('_on_tab_click', index, id);
            },

            _on_tab_selected(index) {
                console.log('_on_tab_selected', index);
            },

            _on_tab_click_prom: function (index, id) {
                console.log('_on_tab_click_prom', index, id);
                let vm = this;
                vm.index_promotion = index;
            },
        },
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

</style>
