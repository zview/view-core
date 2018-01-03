<template>
    <div class="page-directive">

        <Panel>{{message}}</Panel>

        <Panel>
            <input v-focus type="text"/>
            <div v-drag class="div-drag calm-bg"></div>
        </Panel>

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

    .div-gesture
    {
        display: inline-block;
        width: 400px;
        height: 400px;
        background: #ADADAD;
        float: left;
        margin: 15px;
        word-break: normal;
        word-wrap: break-word;
    }

</style>
