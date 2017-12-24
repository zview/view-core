<template>
    <div class="page-check">

        <List>
            <Check :title="'选择' + val1" color="balanced" :options="options1" v-model="val1"></Check>
        </List>

        <List>
            <Check :title="'选择' + val2" :options="options2" v-model="val2"></Check>
        </List>

    </div>
</template>

<script>
    export default {
        data () {
            return {
                message: '复选框',
                val1: [5],
                val2: ['three'],
                options1 : [
                    {'name': '一', 'value': 1},
                    {'name': '三', 'value': 3},
                    {'name': '五', 'value': 5},
                ],
                options2 : [
                    {'name': '一', 'value': 'one'},
                    {'name': '三', 'value': 'three'},
                    {'name': '五', 'value': 'five'},
                ],
            }
        },
        methods: {

        },
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

</style>
