<template>
    <div class="page-radio">

        <List :divider-content="val1">
            <Radio color="balanced" indicator-color="balanced" :options="options1" v-model="val1"></Radio>
        </List>

        <List :divider-content="val2">
            <Radio indicator-color="dark" :options="options2" v-model="val2" indicator-align="left" title="请选择"></Radio>
        </List>

    </div>
</template>

<script>
    export default {
        data () {
            return {
                message: '单选框',
                val1: 'one',
                val2: 3,
                options1 : [
                    {'name': '一', 'value': 'one'},
                    {'name': '三', 'value': 'three'},
                    {'name': '五', 'value': 'five'},
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
