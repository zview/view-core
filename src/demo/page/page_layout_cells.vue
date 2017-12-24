<template>
    <div class="page-cells">

        <Panel type="paddingless">
            <!-- 3 x 2 -->
            <Cells :items="entrances" :on-cell-click="onCellClick" row="2"></Cells>

        </Panel>


        <Panel type="paddingless">

            <!-- 3 x 3 -->
            <Cells class="cells-33" :items="getItems(9)" :on-cell-click="onCellClick"></Cells>

        </Panel>

        <Panel type="paddingless">

            <!-- 4 x 3 -->
            <Cells class="cells-44" :items="getItems(16)" :on-cell-click="onCellClick" row="4" col="4"></Cells>

        </Panel>

        <Panel type="paddingless">

            <!-- no outer border -->
            <div class="padding">
                无外边框：
            </div>
            <Cells outer-border="false" class="cells-22" :items="getItems(3)" :on-cell-click="onCellClick" row="2" col="2"></Cells>

        </Panel>

    </div>
</template>

<script>
    export default {
        data () {
            return {
                message: '宫格',

                icons: [
                    'ion-android-arrow-up',
                    'ion-android-arrow-down',
                    'ion-android-arrow-back',
                    'ion-android-arrow-forward',

                    'ion-ios-arrow-up',
                    'ion-ios-arrow-down',
                    'ion-ios-arrow-left',
                    'ion-ios-arrow-right',

                    'ion-ios-arrow-thin-up',
                    'ion-ios-arrow-thin-down',
                    'ion-ios-arrow-thin-left',
                    'ion-ios-arrow-thin-right',

                    'ion-android-arrow-up',
                    'ion-android-arrow-down',
                    'ion-android-arrow-back',
                    'ion-android-arrow-forward',
                ],

                entrances: [
                    '<div class="assertive"><i class="icon ion-ios-flame"></i><br><span>热门</span></div>',
                    '<div class="energized"><i class="icon ion-ios-star"></i><br><span>好评</span></div>',
                    '<div class="balanced"><i class="icon ion-ios-location"></i><br><span>附近</span></div>',
                    '<div class="positive"><i class="icon ion-ios-search"></i><br><span>搜索</span></div>',
                ],
            }
        },
        methods: {
            onCellClick(cellIndex) {
                console.log('cell ' + cellIndex + ' clicked');
            },

            getIcon(iconName, color) {
                return '<i class="' + iconName + '"></i>';
            },

            getItems(n) {
                let items = [];
                for (let i = 0; i < n; i++) {
                    items.push(this.getIcon(this.icons[i]));
                }
                return items;
            },
        },
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

    .page-cells
    {


    }

</style>
