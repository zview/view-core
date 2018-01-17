<template>
    <div class="page-tabs">

        <Tabs :tab-items="tabs" :tab-index="tabIndex" icon-align="top" :on-tab-click="onTabClick"></Tabs>

        <Panel type="inset" bg-color="white" style="margin-top: 50px;">
            <p>
                激活索引: {{ tabIndex }}
            </p>

            <p>
                激活分类: {{ categories[categoryIndex].text }}
            </p>
        </Panel>

        <Tabs :tab-items="categories" :tab-index="categoryIndex" :on-tab-click="onCategoryClick"
              position="bottom" bg-color="assertive" tab-color="light">
        </Tabs>

    </div>
</template>

<script>
    export default {
        data () {
            return {
                message: '标签页',

                tabs: [
                    {'id': 1, 'text': 'tab 1', 'icon': 'ion-ios-telephone'},
                    {'id': 2, 'text': 'tab 2', 'icon': 'ion-ios-clock'},
                    {'id': 3, 'text': 'tab 3', 'icon': 'ion-ios-clock'},
                ],
                tabIndex: 0,

                categories: [
                    {'id': 1, 'text': '女装'},
                    {'id': 2, 'text': '男装'},
                    {'id': 3, 'text': '内衣'},
                    {'id': 4, 'text': '鞋靴'},
                    {'id': 5, 'text': '箱包'},
                    {'id': 6, 'text': '更多'},
                ],
                categoryIndex: 0,
            }
        },
        methods: {
            onTabClick(index) {
                console.log('onTabClick', index);
                this.tabIndex = index;
            },

            onCategoryClick(index) {
                console.log('onCategoryClick', index);
                this.categoryIndex = index;
            }
        },
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

</style>
