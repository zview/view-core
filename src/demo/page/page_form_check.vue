<template>
    <div class="page-check">

        <List>
            <Check color="balanced" :options="options" v-model="val"></Check>
            <Check :title="'请选择' + val2" :options="options2" v-model="val2"></Check>
        </List>

    </div>
</template>

<script>
    export default {
        data () {
            return {
                message: '复选框',
                val: [5],
                val2: [3],
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
