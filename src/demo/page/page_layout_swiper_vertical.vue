<template>
    <div class="page-swiper-vertical">

        <Swiper direction="vertical">
            <SwiperItem>
                <h1>Item 1</h1>
            </SwiperItem>

            <SwiperItem>
                <h1>Item 2</h1>
            </SwiperItem>

            <SwiperItem>
                <h1>Item 3</h1>
            </SwiperItem>
        </Swiper>

    </div>
</template>

<script>
    export default {
        data () {
            return {
                message: '轮播垂直',
            }
        },
        methods: {

        },
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

    .page-swiper-vertical
    {
        height: 100%;
    }

    .swiper-item
    {
        padding-top: 50px;

        h1 {
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

</style>
