<template>
    <div class="page-icon">

        <List type="list-inset">
            <Item :divider="true" color="positive">FontAwesome</Item>
            <Item color="calm"><Icon icon="fa-snowflake-o"></Icon>云横秦岭家何在</Item>
            <Item color="calm"><Icon icon="fa-bold"></Icon>雪拥蓝关马不前</Item>
        </List>

        <List type="list-inset">
            <Item :divider="true" color="positive">Ionic</Item>
            <Item color="calm"><Icon icon="ion-xbox"></Icon>云横秦岭家何在</Item>
            <Item color="calm"><Icon icon="ion-aperture"></Icon>雪拥蓝关马不前</Item>
            <Item color="calm"><Icon icon="ion-chevron-right"></Icon>雪拥蓝关马不前</Item>
        </List>

    </div>
</template>

<script>
    export default {
        data () {
            return {
                message: '图标',
            }
        },
        methods: {

        },
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

</style>
