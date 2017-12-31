<template>
    <div class="page-toggle">

        <List header-content="'选中:' + val">
            <Toggle color="positive" v-model="val" :label="'禁用' + val"></Toggle>
        </List>

        <List header-content="其他主题">
            <Toggle color="positive" label="positive"></Toggle>
            <Toggle color="calm" label="calm"></Toggle>
            <Toggle color="balanced" label="balanced"></Toggle>
            <Toggle color="energized" label="energized"></Toggle>
            <Toggle color="assertive" label="assertive"></Toggle>
            <Toggle color="royal" label="royal"></Toggle>
            <Toggle color="dark" label="dark"></Toggle>
        </List>

    </div>
</template>

<script>
    export default {
        data () {
            return {
                message: '切换器',
                val: false,
            }
        },
        methods: {

        },
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

</style>
