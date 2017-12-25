<template>
    <div class="page-directive">

        <Panel>{{message}}</Panel>

        <input v-focus type="text"/>
        <div v-drag class="div-drag calm-bg"></div>

    </div>
</template>

<script>
    export default {
        data () {
            return {
                message: '指令',
            }
        },
        methods: {

        },
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

    .div-drag
    {
        width: 100px;
        height: 100px;
    }

</style>
