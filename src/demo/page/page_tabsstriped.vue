<template>
    <div class="page-tabs">

        <TabsStriped color="light" :options="options" :value="1"></TabsStriped>

        <Tabs :is-icon-only="true" :options="options2" :value="2"></Tabs>

    </div>
</template>

<script>
    export default {
        data () {
            return {
                message: '标签页',
                options : [
                    {'id': 1, 'icon': 'ion-ios-telephone'},
                    {'id': 2, 'icon': 'ion-ios-clock'},
                    {'id': 3, 'icon': 'ion-ios-person'},
                ],
                options2 : [
                    {'id': 1, 'icon': 'ion-ios-search'},
                    {'id': 2, 'icon': 'ion-ios-clock'},
                    {'id': 3, 'icon': 'ion-backspace'},
                ],
            }
        },
        methods: {

        },
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

</style>
