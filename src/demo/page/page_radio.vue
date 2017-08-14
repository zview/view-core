<template>
    <div class="page-radio">

        <Radio color="balanced" bg-color="dark" indicator-color="balanced" :options="options" v-model="val"></Radio>
        {{val}}

        <Radio indicator-color="dark" :options="options2" v-model="val2" indicator-align="left" title="请选择"></Radio>
        {{val2}}

    </div>
</template>

<script>
    export default {
        data () {
            return {
                message: '单选框',
                val: 5,
                val2: 3,
                options : [
                    {'name': '一', 'value': 1},
                    {'name': '三', 'value': 3},
                    {'name': '五', 'value': 5},
                ],
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
