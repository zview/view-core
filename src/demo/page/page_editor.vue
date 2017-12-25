<template>
    <div class="page-editor">

        <Panel>{{message}}</Panel>

        <Editor color="balanced" bg-color="dark" :value="val"></Editor>

    </div>
</template>

<script>
    export default {
        data () {
            return {
                message: '编辑器',
                val: '<p>hello</p><hr/>',
            }
        },
        methods: {

        },
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

</style>
