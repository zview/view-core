<template>
    <div class="page-transition">

        <div :class="[modaling ? blurClass : '', bkClass]">

            {{message}}

            <hr/>

            <div class="demo-image">
                <img src="https://cdn.pixabay.com/photo/2017/12/03/17/23/fantasy-2995326_1280.jpg" />
            </div>


            <hr/>


            <div>
                <button @click="show = !show">
                    切换
                </button>
                <transition name="fade">
                    <p v-if="show">你好</p>
                </transition>
            </div>

            <div>
                <button @click="show2 = !show2">
                    切换
                </button>
                <transition name="slide-fade">
                    <p v-if="show2">你好</p>
                </transition>
            </div>

            <hr/>

            <div>
                <button @click="togglModal">
                    <span v-if="modaling">Hide child</span>
                    <span v-else>Show child</span>
                </button>
            </div>

        </div>

        <div v-if="modaling">
            Hello
            <button @click="togglModal">
                Close
            </button>
        </div>


    </div>
</template>

<script>
    export default {
        data () {
            return {
                message: '过渡',
                modaling: false,
                bkClass: 'bk',
                blurClass: 'blur',
                show: true,
                show2: true,
            }
        },
        methods: {
            togglModal() {
                this.modaling = !this.modaling;
            }
        },
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

/*
v-enter：进入式过渡的开始状态。在插入元素之前添加，在插入元素之后一帧移除。
v-enter-active：进入式过渡的激活状态。应用于整个进入式过渡时期。在插入元素之前添加，过渡/动画完成之后移除。此 class 可用于定义进入式过渡的 duration, delay 和 easing 曲线。
v-enter-to：进入式过渡的结束状态。在插入元素之后一帧添加（同时，移除 v-enter），在过渡/动画完成之后移除。
v-leave：离开式过渡的开始状态。在触发离开式过渡时立即添加，在一帧之后移除。
v-leave-active：离开式过渡的激活状态。应用于整个离开式过渡时期。在触发离开式过渡时立即添加，在过渡/动画完成之后移除。此 class 可用于定义离开式过渡的 duration, delay 和 easing 曲线。
v-leave-to：离开式过渡的结束状态。在触发离开式过渡之后一帧添加（同时，移除 v-leave），在过渡/动画完成之后移除。
*/

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s
    }
    .fade-enter, .fade-leave-to {
        opacity: 0
    }

    .slide-fade-enter-active {
        transition: all .3s ease;
    }
    .slide-fade-leave-active {
        transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter, .slide-fade-leave-to {
        transform: translateX(10px);
        opacity: 0;
    }


    .demo-image
    {
        display: inline-block;

        img
        {
            height: 250px;
            width: 250px;
            transition: width 1s ease-in, height 1s ease-in;

            //手机端不支持:hover
            &:hover
            {
                height: 450px;
                width: 450px;
            }

        }

    }


    .bk {
        transition: all 0.1s ease-out;
    }

    .blur {
        filter: blur(2px);
        opacity: 0.4;
    }

</style>
