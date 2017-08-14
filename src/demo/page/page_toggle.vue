<template>
    <div class="page-toggle">

        <Toggle color="positive" v-model="val" label="禁用"></Toggle>
        {{val}}

    </div>
</template>

<script>
    export default {
        data () {
            return {
                message: '开关',
                val: false,
            }
        },
        methods: {

        },
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

</style>
