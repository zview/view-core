<template>
    <div class="page-input">

        <Input type="text" color="balanced" bg-color="dark" v-model="textval"/>{{textval}}
        <Input type="textarea" color="balanced" bg-color="dark" v-model="textareaval"/>{{textareaval}}

    </div>
</template>

<script>
    export default {
        data () {
            return {
                message: '输入框',
                textval: 'hello',
                textareaval: 'hello',
            }
        },
        methods: {

        },
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

</style>
