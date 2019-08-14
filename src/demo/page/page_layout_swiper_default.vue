<template>
    <div class="page-swiper-default">

        <Swiper ref="swiper" direction="horizontal" width="100%" height="150"
                pager-color="#ea5a49" pager-bg-color="#e5e4e3"
                :enable-loop="true" :loop-interval="2000"
                :callback="callback">
            <SwiperItem v-for="(banner, index) in banners" :key="index"
                        v-if="banners && banners.length>0">
                <h1 @click="onClick()">Item {{index}}</h1>
            </SwiperItem>
        </Swiper>

        <div class="row">
            <div class="col col-25">
                <button class="button button-assertive button-block" @click="prev()">prev</button>
            </div>

            <div class="col col-25">
                <button class="button button-assertive button-block" @click="next()">next</button>
            </div>

            <div class="col col-25">
                <button class="button button-assertive button-block" @click="loop()">loop</button>
            </div>

            <div class="col col-25">
                <button class="button button-assertive button-block" @click="resize()">resize</button>
            </div>
        </div>

    </div>
</template>

<script>

    const BANNER_SIZE = 3;

    export default {
        data () {
            return {
                message: '轮播默认',
                banners: [],
            }
        },
        created() {
            console.log('created');
        },
        mounted: function() {
            console.log('mounted');
            let vm = this;

            for(let i=0;i<BANNER_SIZE;i++) {
                vm.banners.push({'image':'./static/logo-overlay.png'})
            }

            setTimeout(() => {
                this.$refs.swiper.resize();
                let count = this.$refs.swiper.count();
                console.log('count', count);
            }, 100);
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

            loop() {
                this.$refs.swiper.loop();
            },

            resize() {
                let vm = this;

                //
                vm.banners = [];
                for(let i=0;i<BANNER_SIZE;i++) {
                    vm.banners.push({'image':'./static/logo-overlay.png'})
                }

                setTimeout(() => {
                    this.$refs.swiper.resize();
                    let count = this.$refs.swiper.count();
                    console.log('count', count);
                }, 100);
            },

            callback(prev, current) {
//                console.log(prev, current);
            }
        },
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

    .swiper-item
    {
        background-color: #fff;

        h1
        {
            color: #fff;
            font-size: 32px;
            height: 150px;
            line-height: 150px;
            text-align: center;
            font-family: Candara, Calibri, Segoe, Segoe UI, Optima, Arial, sans-serif;
        }

        &:nth-of-type(1)
        {
            background-color: #0a9dc7;
        }

        &:nth-of-type(2)
        {
            background-color: #44cc00;
        }

        &:nth-of-type(3)
        {
            background-color: #ffc900;
        }
    }


</style>
