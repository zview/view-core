<template>
    <div class="container">

        <Navbar title="示例" color="balanced"
                :show-back="true" :show-menu="true"></Navbar>

        <Page :has-navbar="true">
            <router-view></router-view>
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

        },
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

</style>
