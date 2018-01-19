<template>
    <div class="page-index">

        <Navbar title="首页" color="balanced"></Navbar>

        <Page :has-navbar="true" :has-tabbar="true">
            <List>
                <Item @click.native="_on_goto_page('/demo')" note="Demo">示例</Item>
                <Item @click.native="_on_goto_docs" note="Docs">文档</Item>
                <Item @click.native="_on_goto_github" note="Github">源码</Item>
            </List>
        </Page>

    </div>
</template>

<script>
    export default {
        data () {
            return {
                message: '首页',
            }
        },
        mounted: function() {
            console.log('mounted');
            let vm = this;

            //
            vm.$info('mounted');
        },
        methods: {
            _on_goto_page: function (page) {
                console.log('_on_goto_page', page);
                let vm = this;
                vm.$router.push(page);
            },
            _on_goto_docs: function () {
                console.log('_on_goto_docs');
                window.location.href = 'http://www.zuv.cc/view/';
            },
            _on_goto_github: function () {
                console.log('_on_goto_github');
                window.location.href = 'https://github.com/zview/view';
            },
        },
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

</style>
