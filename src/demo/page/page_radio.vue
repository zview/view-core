<template>
    <div class="page-radio">

        <Radio color="balanced" bg-color="dark" :options="options" v-model="val"></Radio>
        {{val}}

    </div>
</template>

<script>
    export default {
        data () {
            return {
                message: '单选框',
                val: '5',
                options : [
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
