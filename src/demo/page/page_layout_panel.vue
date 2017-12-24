<template>
    <div class="page-panel">

        <Panel>
            Outer(默认)
        </Panel>

        <Panel type="inset" bg-color="balanced">
            Inset
        </Panel>

        <Panel type="card" bg-color="balanced">
            Card
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
