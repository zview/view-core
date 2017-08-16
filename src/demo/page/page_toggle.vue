<template>
    <div class="page-toggle">

        <List :title="val">
            <Toggle color="positive" v-model="val" :label="'禁用' + val"></Toggle>
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
