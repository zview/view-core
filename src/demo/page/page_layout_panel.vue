<template>
    <div class="page-panel">

        <Panel>
            {{message}} Outer(默认)
        </Panel>

        <Panel type="inset" bg-color="balanced" color="stable">
            {{message}} Inset
        </Panel>

        <Panel type="paddingless" bg-color="balanced" color="light">
            {{message}} PaddingLess
        </Panel>

        <Panel type="card" bg-color="calm" color="light">
            {{message}} Card
        </Panel>

        <Panel type="card" bg-color="calm" color="light" header-content="头部" footer-content="底部">
            {{message}} Card
        </Panel>

        <Panel type="card"
               header-content="头部"  sub-header-content="更多>>"
               footer-content="底部"  sub-footer-content="更多>>">
            {{message}} Card
        </Panel>

    </div>
</template>

<script>
    export default {
        data () {
            return {
                message: '面板',
            }
        },
        methods: {

        },
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

</style>
