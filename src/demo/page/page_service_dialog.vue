<template>
    <div class="page-dialog">

        <List header-content="对话框">
            <Item @click.native="_on_alert" note="提示框" icon-right="ion-ios-arrow-right">Alert</Item>
            <Item @click.native="_on_confirm" note="确认框" icon-right="ion-ios-arrow-right">Confirm</Item>
            <Item @click.native="_on_ios_alert" note="iOS提示框" icon-right="ion-ios-arrow-right">iOS Alert</Item>
            <Item @click.native="_on_ios_confirm" note="iOS确认框" icon-right="ion-ios-arrow-right">iOS Confirm</Item>
            <Item @click.native="_on_prompt" note="输入框" icon-right="ion-ios-arrow-right">Prompt</Item>
            <Item @click.native="_on_ios_prompt" note="iOS输入框" icon-right="ion-ios-arrow-right">iOS Prompt</Item>
            <Item @click.native="_on_multi_alert" note="多个" icon-right="ion-ios-arrow-right">Multi</Item>
            <Item @click.native="_on_alert('scale')" note="缩放效果" icon-right="ion-ios-arrow-right">Scale Effect</Item>
            <Item @click.native="_on_alert('slide')" note="滑动效果" icon-right="ion-ios-arrow-right">Slide Effect</Item>
        </List>

    </div>
</template>

<script>
    export default {
        data () {
            return {
                message: '对话框',
            }
        },
        methods: {
            _on_alert(effect) {
                let vm = this;
                vm.$dialog.alert({
                    content: 'Hello!',
                    okTheme: 'positive',
                    effect: effect || 'default'
                }).then(() => {
                    console.log('alert hide.')
                });

                // setTimeout(vm.$dialog.hide, 2000);
            },

            _on_confirm() {
                let vm = this;
                vm.$dialog.confirm({
                    content: '在"微信"中打开链接吗?',
                    okText: '打开'
                }).then((res) => {
                    console.log('confirm result: ', res);
                });
            },

            _on_prompt() {
                let vm = this;
                vm.$dialog.prompt({
                    title: '请输入内容?',
                    cancelText: '取消',
                    okText: '打开'
                }).then((res) => {
                    console.log('prompt result: ', res);
                });
            },

            _on_ios_alert() {
                let vm = this;
                vm.$dialog.alert({
                    theme: 'ios',
                    title: '无法打开网页',
                    content: 'Safari打不开网页，因为网址无效。',
                    okText: '好'
                }).then(() => {
                    console.log('alert hide.');
                });
            },

            _on_ios_confirm() {
                let vm = this;
                vm.$dialog.confirm({
                    theme: 'ios',
                    title: '在"微信"中打开链接吗?',
                    cancelText: '取消',
                    okText: '打开'
                }).then((res) => {
                    console.log('confirm result: ', res);
                });
            },

            _on_ios_prompt() {
                let vm = this;
                vm.$dialog.prompt({
                    theme: 'ios',
                    title: '请输入内容?',
                    inputType: 'number',
                    cancelText: '取消',
                    okText: '打开'
                }).then((res) => {
                    console.log('prompt result: ', res);
                });
            },

            _on_multi_alert() {
                let vm = this;
                let options = {
                    theme: 'ios',
                    title: '测试',
                    okText: '好'
                };

                for (let i = 0; i < 3; i++) {
                    setTimeout(() => {
                        options.content = `第${i+1}条消息`
                        vm.$dialog.alert(options)
                    }, 500 * i)
                }
            },
        },
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

</style>
