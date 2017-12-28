<template>
    <div class="page-swiper">

        <Panel>
            {{message}}
        </Panel>

        <List>
            <Item @click.native="_on_goto_page('/demo/swiper/default')" note="默认" icon-right="ion-ios-arrow-right">水平</Item>
            <Item @click.native="_on_goto_page('/demo/swiper/vertical')" icon-right="ion-ios-arrow-right">垂直</Item>
            <Item @click.native="_on_popup_swiper">弹层内轮播</Item>
        </List>

    </div>
</template>

<script>
    export default {
        data () {
            return {
                message: '轮播, 基于VSwipe v1.0.1',
            }
        },
        methods: {
            _on_goto_page: function (page) {
                console.log('_on_goto_page', page);
                let vm = this;
                vm.$router.push(page);
            },
            _on_popup_swiper: function () {
                console.log('_on_popup_swiper');
                let vm = this;


                const template = `
                  <p>弹层内轮播</p>
                  <swiper direction="horizontal" width="100%" height="150">
                    <swiper-item>
                      <h1>Item 1</h1>
                    </swiper-item>

                    <swiper-item>
                      <h1>Item 2</h1>
                    </swiper-item>

                    <swiper-item>
                      <h1>Item 3</h1>
                    </swiper-item>
                  </swiper>
                `;

                let popup = vm.$popup.fromTemplate(template, {
                    cssClass: 'swiper-popup',
                    buttons: [
                        {
                            text: '确定'
                        }
                    ]
                });

                popup.show();
            },
        },
    }
</script>

<style lang="scss" rel="stylesheet/scss">

    .popup.swiper-popup.view-popup
    {

        .popup-body
        {
            padding: 0;

            p
            {
                font-size: 20px;
                line-height: 30px;
                text-align: center;
                margin: 20px 0;
                padding: 50px 0;
            }

            .swiper
            {

                .swiper-item
                {
                    padding-top: 50px;

                    h1
                    {
                        color: #fff;
                        font-size: 32px;
                        line-height: 50px;
                        text-align: center;
                        font-family: Candara, Calibri, Segoe, Segoe UI, Optima, Arial, sans-serif;
                    }

                    &:nth-of-type(1) {
                        background-color: #0a9dc7;
                    }

                    &:nth-of-type(2) {
                        background-color: #44cc00;
                    }

                    &:nth-of-type(3) {
                        background-color: #ffc900;
                    }
                }
            }
        }
    }


</style>
