<template>
    <div class="container">

        <Header color="dark" title="Header"></Header>
        <Page :has-navbar="true" :has-tabbar="true" :is-padding="true">
            <router-view></router-view>
        </Page>
        <Footer color="dark" title="Footer"></Footer>

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
