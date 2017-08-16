<template>
    <div class="page-button">

        <List type="list-inset">
            <Item :divider="true" color="positive">按钮颜色</Item>
            <Item>
                <Button color="light">light</Button>
                <Button color="stable">stable</Button>
                <Button color="positive">positive</Button>
            </Item>
            <Item>
                <Button color="calm">calm</Button>
                <Button color="balanced">balanced</Button>
                <Button color="energized">energized</Button>
            </Item>
            <Item>
                <Button color="assertive">assertive</Button>
                <Button color="royal">royal</Button>
                <Button color="dark">dark</Button>
            </Item>
        </List>

        <List type="list-inset">
            <Item :divider="true" color="positive">按钮样式</Item>
            <Item>
                <Button type="clear" color="dark">Clear按钮</Button>
            </Item>
            <Item>
                <Button type="block" color="dark">Block按钮</Button>
            </Item>
            <Item>
                <Button type="full" color="dark">Full按钮</Button>
            </Item>
            <Item>
                <Button type="outline" color="dark">Outline按钮</Button>
            </Item>
        </List>

        <List type="list-inset">
            <Item :divider="true" color="positive">按钮大小</Item>
            <Item>
                <Button size="small">小按钮</Button>
                <Button>默认按钮</Button>
                <Button size="large">大按钮</Button>
            </Item>
        </List>

        <List type="list-inset">
            <Item :divider="true" color="positive">带图标</Item>
            <Item>
                <Button icon="ion-home">默认按钮</Button>
            </Item>
            <Item>
                <Button icon="ion-heart" icon-align="right">默认按钮</Button>
            </Item>
            <Item>
                <Button icon="fa-snowflake-o">默认按钮</Button>
            </Item>
            <Item>
                <Button icon="fa-snowflake-o" icon-align="right">默认按钮</Button>
            </Item>
        </List>

    </div>
</template>

<script>
    export default {
        data () {
            return {
                message: '按钮',
            }
        },
        methods: {

        },
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

</style>
