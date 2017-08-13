<template>
    <div class="page-index">

        <Navbar title="首页" color="balanced"></Navbar>

        <Page :has-navbar="true" :has-tabbar="true">
            <List>
                <Item @click.native="_on_goto_page('/demo')" note="Demo">示例</Item>
                <Item note="Docs">文档</Item>
                <Item note="Github">源码</Item>
            </List>
        </Page>

        <Tabbar></Tabbar>

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
            _on_goto_page: function (page) {
                console.log('_on_goto_page', page);
                let vm = this;

                vm.$router.push(page);
            }

        },
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

</style>
