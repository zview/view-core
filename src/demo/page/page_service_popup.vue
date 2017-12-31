<template>
    <div class="page-actionsheet">

        <List header-content="自定义弹层">
            <Item @click.native="_on_popup1" icon-right="ion-ios-arrow-right">自定义1</Item>
            <Item @click.native="_on_popup2" icon-right="ion-ios-arrow-right">自定义2</Item>
        </List>

    </div>
</template>

<script>
    export default {
        data () {
            return {
                message: '自定义弹层',
            }
        },
        methods: {

            _on_popup1() {
                let vm = this;
                let options = {
                    effect: 'scale',
                    title: '',
                    buttons: [
                        {text: '确定'},
                        {text: '取消'},
                    ]
                };

                let popup = vm.$popup.fromTemplate('<p style="margin-bottom: 0; text-align: center;">自定义内容</p>', options);

                popup.show().then((buttonIndex) => {
                    console.log(buttonIndex);
                });
            },

            _on_popup2() {
                let vm = this;
                let options = {
                    effect: 'scale',
                    title: '',
                    buttons: [
                        {text: '确定', theme: 'assertive'}
                    ],
                    showClose: true
                };

                let template = `
                  <p style="margin-bottom: 10px; text-align: center; font-size: 16px;">带有关闭按钮</p>
                  <p style="margin-bottom: 0; text-align: center;">自定义内容</p>
                `;

                let popup = vm.$popup.fromTemplate(template, options);

                popup.show().then((buttonIndex) => {
                    console.log(buttonIndex);
                });

                /* fromTemplateUrl sample */

                // let path_to_template = '';
                // vm.$popup
                //   .fromTemplateUrl(path_to_template, options)
                //   .then((popup) => {
                //     popup.show();
                //   });

            }
        },
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

</style>
