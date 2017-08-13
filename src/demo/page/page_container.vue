<template>
    <div class="page-container">

        <Header color="dark">
            <h1 class="title">Header</h1>
            <a class="button button-clear icon ion-ios-plus-empty"></a>
        </Header>

        <SubHeader color="stable">
            <h1 class="title">SubHeader</h1>
        </SubHeader>

        <Content :has-header="true" :has-sub-header="true"
                 :has-footer="true" :has-sub-footer="true" :scroll="true">
            内容
        </Content>

        <SubFooter color="stable">
            <h1 class="title">SubFooter</h1>
        </SubFooter>

        <Footer color="dark">
            <h1 class="title">Footer</h1>
        </Footer>

    </div>
</template>

<script>
    export default {
        data () {
            return {
                message: '首页',
            }
        },
        methods: {

        },
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

</style>
