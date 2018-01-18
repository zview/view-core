<template>
    <div class="page-actionbar">

        <ActionBar position="top" bg-color="assertive" tab-color="light" :has-navbar="true">
            <div style="float: left; background-color: #1d3e81; width: 30%; height: 100%; color:white;">
                <span>左边</span>
            </div>
            <div style="float: right; background-color: #3f3f3f; width: 70%; height: 100%; color:white;">
                <span>右边</span>
            </div>
        </ActionBar>

        <Panel style="margin-top: 60px; height: 600px; margin-bottom: 60px;">
            {{message}}
        </Panel>

        <ActionBar position="bottom" bg-color="assertive" :has-tabbar="false">
            <div style="float: left; background-color: #1d3e81; width: 70%; height: 100%; color:white;">
                <span>左边</span>
            </div>
            <div style="float: right; background-color: #3f3f3f; width: 30%; height: 100%; color:white;">
                <span>右边</span>
            </div>
        </ActionBar>


        <!--<Tabbar :tab-items="tabitems2" :tab-index="tabindex2"
                icon-align="top" bg-color="light" tab-color="calm"></Tabbar>-->

    </div>
</template>

<script>
    export default {
        data () {
            return {
                message: '工具栏',

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

        },
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

</style>
