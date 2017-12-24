<template>
    <div view-app>
        <transition name="page"
            @before-enter="beforePageEnter" @after-enter="afterPageEnter"
            @before-leave="beforePageLeave" @after-leave="afterPageLeave">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>

    const GRADE_A = 'grade-a'; //ios
    const GRADE_B = 'grade-b'; //android or other

    export default {
        data() {
            return {
                transitionName: 'slide-left', //'slide-right'
            }
        },

        created() {
            let isios = (/iPad|iPhone|iPod/.test(navigator.userAgent));
            let gradeClass = isios?GRADE_A:GRADE_B;
            document.querySelector('body').className = gradeClass;
        },

        methods: {
            // --------
            // 进入时
            // --------
            beforePageEnter(el) {
                let vm = this;
                vm.$info('beforePageEnter time:', +new Date());
            },
            afterPageEnter: function (el) {
                let vm = this;
                vm.$info('afterPageEnter time:', +new Date());
            },
            // --------
            // 离开时
            // --------
            beforePageLeave: function (el) {
                let vm = this;
                vm.$info('beforePageLeave time:', +new Date());
            },
            afterPageLeave: function (el) {
                let vm = this;
                vm.$info('afterPageLeave time:', +new Date());
            },
        },

        watch: {
            '$route' (to, from) {
                let vm = this;
                vm.$info('app', 'from', from.path, 'to', to.path);

//            <transition :name="transitionName"><router-view></router-view></transition>
//                const toDepth = to.path.split('/').length
//                const fromDepth = from.path.split('/').length
//                this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
            }
        },
    }
</script>

<style lang="scss" rel="stylesheet/scss">

</style>
