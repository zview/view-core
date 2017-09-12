<template>
    <div view-app>
        <transition name="page" v-on:before-enter="beforePageEnter">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                gradeClass: 'grade-a'
            }
        },

        created() {
            let vm = this;

            // grade-a: ios, grade-b: android or other
            if (/iPad|iPhone|iPod/.test(navigator.userAgent))
            {
                vm.gradeClass = 'grade-a';
            }
            else
            {
                vm.gradeClass = 'grade-b';
            }

            //
            document.querySelector('body').className = vm.gradeClass;
        },

        methods: {
            beforePageEnter(el) {
                 console.log('beforePageEnter time:', +new Date())
            }
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss">

</style>
