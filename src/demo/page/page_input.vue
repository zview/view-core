<template>
    <div class="page-input">

        <Input type="text" color="balanced" bg-color="dark"
               label-color="positive"
               label-icon="ion-android-person"
               label="姓名" v-model="textval"/>
        {{textval}}

        <Input type="password" color="balanced" bg-color="dark"
               label-color="positive"
               label-icon="ion-ios-unlocked-outline"
               label="密码"/>

        <Input type="text" label-icon="ion-android-person"/>
        <Input type="text" label="籍贯"/>

        <Input type="number" label="年龄" button-color="dark"/>

        <Input type="text" label="说明" display-style="floating-label"/>

        <Input type="textarea" label="说明" display-style="stacked-label"/>

        <Input type="textarea" color="balanced" bg-color="dark" v-model="textareaval"/>
        {{textareaval}}

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
