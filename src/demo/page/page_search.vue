<template>
    <div class="page-search">

        <Search color="balanced" bg-color="dark" v-model="val"></Search>{{val}}


        <Search color="balanced" bg-color="dark">
            <div slot="left">
                <Button icon="ion-android-arrow-dropdown" icon-align="right" size="small">北京</Button>
            </div>
            <div slot="right">right</div>
        </Search>

    </div>
</template>

<script>
    export default {
        data () {
            return {
                message: '搜索框',
                val: 'hello',
            }
        },
        methods: {

        },
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

</style>
