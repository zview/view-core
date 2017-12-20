<template>
    <div class="page-transition">

        {{message}}

        <hr/>

        <div class="demo-image">
            <img src="https://cdn.pixabay.com/photo/2017/12/03/17/23/fantasy-2995326_1280.jpg" />
        </div>


        <hr/>


        <div id="demo">
            <button @click="show = !show">
                切换
            </button>
            <transition name="fade">
                <p v-if="show">你好</p>
            </transition>
        </div>


    </div>
</template>

<script>
    export default {
        data () {
            return {
                message: '过渡',
                show: true,
            }
        },
        methods: {

        },
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

    .fade-enter-active, .fade-leave-active
    {
        transition: opacity .5s
    }
    .fade-enter, .fade-leave-to
    {
        opacity: 0
    }



    .demo-image
    {
        display: inline-block;

        img
        {
            height: 250px;
            width: 250px;
            /*transition: 1s height;*/
            transition: 1s height ease, 1s width ease-in-out ;
            /*transition: 1s 1s height, 1s 1s width;*/

            /*
            transition-property: height;
            transition-duration: 1s;
            transition-delay: 1000ms;
            transition-timing-function: ease;

            transition-property: width,height;
            transition-duration: 1s,2s;
            */
        }

        //手机端不支持:hover
        img:hover
        {
            height: 450px;
            width: 450px;
        }

    }

</style>
