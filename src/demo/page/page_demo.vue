<template>
    <div class="page-demo">

        <Navbar title="示例" color="balanced"
                :on-back="_on_back" :on-menu="_on_menu"
                :show-back="true" :show-menu="true"></Navbar>

        <Page :has-navbar="true">
            <transition>
                <router-view></router-view>
            </transition>
        </Page>

    </div>
</template>

<script>
    export default {
        data () {
            return {
                message: '示例',
            }
        },
        methods: {
            _on_back: function () {
                let vm = this;
                vm.$router.back();
            },
            _on_menu: function () {
                let vm = this;
            },
        },
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

    [transition-direction="forward"]
    {
        .demo-enter
        {
            opacity: 0;
            -webkit-transform: translate(50px, 0);
            transform: translate(50px, 0);
        }
        .demo-enter-active
        {
            transition: opacity .5s ease;
        }
        .demo-enter-to
        {
        }

        .demo-leave
        {
        }
        .demo-leave-to
        {
        }
    }

    [transition-direction="back"]
    {
        .demo-enter
        {

        }
        .demo-enter-to
        {

        }

        .demo-leave
        {

        }
        .demo-leave-active
        {
            opacity: 0;
            -webkit-transform: translate(50px, 0);
            transform: translate(50px, 0);
        }
        .demo-leave-to
        {

        }
    }

</style>
