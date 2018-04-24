<template>
    <div class="page-datepicker">

        <Panel>{{message}}</Panel>

        <Panel type="paddingless">
            <Item1Picker :items="items1" v-model="curval1" label="一栏"></Item1Picker>
        </Panel>

        <Panel>
            value: {{ curval1 }}
        </Panel>


    </div>
</template>

<script>
    export default {
        data () {
            return {
                message: '分栏选择',
                curval1: 1,
                items1: [{'name': '一', 'index': 1},{'name': '二', 'index': 2},{'name': '三', 'index': 3}]
            }
        },
        methods: {

        },
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

</style>
