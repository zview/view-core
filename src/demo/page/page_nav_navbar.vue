<template>
    <div class="page-navbar">

        <Navbar title="导航栏" color="balanced"
                :show-back="true" :on-back="_on_back" back-text="返回"
                :show-menu="true" :on-menu="_on_menu"></Navbar>

        <Page :has-navbar="true">
            内容
        </Page>

    </div>
</template>

<script>
    export default {
        data () {
            return {
                message: '导航栏',
            }
        },
        methods: {
            _on_back: function () {
                console.log('_on_back');
            },
            _on_menu: function () {
                console.log('_on_menu');
            },

        },
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

</style>
