<template>
    <div class="page-search">

        <List :title="val">
            <Search color="balanced" bg-color="dark" v-model="val"></Search>

            <Search color="balanced" bg-color="dark">
                <div slot="left">
                    <Button icon="ion-android-arrow-dropdown" icon-align="right" size="small">北京</Button>
                </div>
                <div slot="right">
                    <Button size="small">搜索</Button>
                </div>
            </Search>
        </List>

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
