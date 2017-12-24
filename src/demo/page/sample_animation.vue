<template>
    <div class="page-animation">

        {{message}}

        <hr/>

        <div class="demo-div1">
            div1
        </div>

        <div class="demo-div2">
            div2
        </div>


        <hr/>

        <div>
            <button @click="show = !show">
                切换
            </button>
            <transition   name="bounce"
                          enter-active-class="bounceInLeft"
                          leave-active-class="bounceOutRight">
                <p v-if="show">你好</p>
            </transition>
        </div>


        <div>
        <button @click="toggleShow">
            <span v-if="isShowing">Get it gone!</span>
            <span v-else>Here we go!</span>
        </button>
        <transition
            name="ballmove"
            enter-active-class="bouncein"
            leave-active-class="rollout">
            <div v-if="isShowing" style="height: 400px; width: 100%;">
                <div class="ball"></div>
            </div>
        </transition>
        </div>


    </div>
</template>

<script>
    export default {
        data () {
            return {
                message: '动画',
                show: true,
                isShowing: false,
            }
        },
        methods: {
            toggleShow() {
                this.isShowing = !this.isShowing;
            },
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

    .demo-div1
    {
        height: 450px;
        width: 450px;

        animation: 1s rainbow forwards;
        animation-play-state: paused;

        //手机端不支持:hover
        &:hover
        {
            animation-play-state: running;
        }


    }

    .demo-div2
    {
        height: 450px;
        width: 450px;

        //手机端不支持:hover
        &:hover
        {
            animation: 1s rainbow forwards;
        }


    }

    @keyframes rainbow
    {
        0% { background: #c00; }
        50% { background: orange; }
        100% { background: yellowgreen; }
    }



    .demo2-enter-active {
        animation: demo2-in .5s;
    }
    .demo2-leave-active {
        animation: demo2-in .5s reverse;
    }
    @keyframes demo2-in {
        0% {
            transform: scale(0);
        }
        50% {
            transform: scale(1.5);
        }
        100% {
            transform: scale(1);
        }
    }



//-----------------------------------------
.ball {
    width: 370px;
    height: 370px;
    background: url("http://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/soccerball.svg");
    transform-origin: 50% 50%;
    transform: translate3d(0, 300px, 0) rotate(0deg);
}

@mixin ballb($yaxis: 0) {
    transform: translate3d(0, $yaxis, 0);
}


//
@keyframes bouncein {
    1% { @include ballb(-400px); }
    20%, 40%, 60%, 80%, 95%, 99%, 100% { @include ballb() }
    30% { @include ballb(-80px); }
    50% { @include ballb(-40px); }
    70% { @include ballb(-30px); }
    90% { @include ballb(-15px); }
    97% { @include ballb(-10px); }
}

.bouncein {
    animation: bouncein 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

.ballmove-enter {
    @include ballb(-400px);
}


//
@keyframes rollout {
    0% { transform: translate3d(0, 300px, 0); }
    100% { transform: translate3d(1000px, 300px, 0); }
}

@keyframes ballroll {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(1000deg); }
}

.rollout {
    width: 60px;
    height: 60px;
    animation: rollout 2s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
    div {
        animation: ballroll 2s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
    }
}

</style>
