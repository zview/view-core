<template>
    <div class="page-actionsheet">

        <List header-content="操作列表">
            <Item @click.native="_on_actionsheet" note="默认" icon-right="ion-ios-arrow-right">iOS</Item>
            <Item @click.native="_on_actionsheet('android')" icon-right="ion-ios-arrow-right">Android</Item>
            <Item @click.native="_on_actionsheet('weixin')" icon-right="ion-ios-arrow-right">微信</Item>
        </List>

    </div>
</template>

<script>
    export default {
        data () {
            return {
                message: '操作列表',
            }
        },
        methods: {

            _on_actionsheet(theme) {
                let vm = this;
                vm.$actionsheet.show({
                    theme: theme || '',
                    title: '标题',
                    cancelText: '取消',
                    buttons: {
                        'Action - 1': () => {
                            console.log('action 1 called.');
                        },

                        'Action - 2': () => {
                            console.log('action 2 called.');
                        }
                    }
                });
            }
        },
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

</style>
