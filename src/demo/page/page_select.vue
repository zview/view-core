<template>
    <div class="page-select">

        <Select label="请选择" color="balanced" :options="options" v-model="val"></Select>
        {{val}}


        <Select label="请选择" color="balanced" :multiple="true" :options="options2" v-model="val2"></Select>
        {{val2}}

    </div>
</template>

<script>
    export default {
        data () {
            return {
                message: '下拉框',
                val: 5,
                options : [
                    {'name': '一', 'value': 1},
                    {'name': '三', 'value': 3},
                    {'name': '五', 'value': 5},
                ],
                val2: [5,3],
                options2 : [
                    {'name': '一', 'value': 1},
                    {'name': '三', 'value': 3},
                    {'name': '五', 'value': 5},
                ],
            }
        },
        methods: {

        },
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

</style>
