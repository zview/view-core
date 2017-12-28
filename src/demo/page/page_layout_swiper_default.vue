<template>
    <div class="page-swiper-default">

        <Swiper ref="swiper" direction="horizontal" width="100%" height="150" pager-color="#ea5a49" pager-bg-color="#e5e4e3" :callback="callback">
            <SwiperItem>
                <h1 @click="onClick()">Item 1</h1>
            </SwiperItem>

            <SwiperItem>
                <h1>Item 2</h1>
            </SwiperItem>

            <SwiperItem>
                <h1>Item 3</h1>
            </SwiperItem>
        </Swiper>

        <div class="row">
            <div class="col col-50">
                <button class="button button-assertive button-block" @click="prev()">prev</button>
            </div>

            <div class="col col-50">
                <button class="button button-assertive button-block" @click="next()">next</button>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        data () {
            return {
                message: '轮播默认',
            }
        },
        methods: {
            onClick() {
                let vm = this;
                vm.$toast.show('clicked!');
            },

            next() {
                this.$refs.swiper.next();
            },

            prev() {
                this.$refs.swiper.prev();
            },

            callback(prev, current) {
                console.log(prev, current);
            }
        },
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

    .swiper-item
    {
        padding-top: 50px;
        background-color: #FFF;

        h1
        {
            color: #fff;
            font-size: 32px;
            line-height: 50px;
            text-align: center;
            font-family: Candara, Calibri, Segoe, Segoe UI, Optima, Arial, sans-serif;
        }

        &:nth-of-type(1) h1 {
            color: #0a9dc7;
        }

        &:nth-of-type(2) h1 {
            color: #44cc00;
        }

        &:nth-of-type(3) h1 {
            color: #ffc900;
        }
    }


</style>
