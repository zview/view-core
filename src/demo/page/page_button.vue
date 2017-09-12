<template>
    <div class="page-button">

        <List type="list-inset" dividerContent="按钮颜色" dividerBgColor="positive" dividerColor="light">
            <Item bgColor="dimgray">
                <Button type="block" bgColor="light">light</Button>
                <Button type="block" bgColor="stable">stable</Button>
                <Button type="block" bgColor="positive">positive</Button>
                <Button type="block" bgColor="calm">calm</Button>
                <Button type="block" bgColor="balanced">balanced</Button>
                <Button type="block" bgColor="energized">energized</Button>
                <Button type="block" bgColor="assertive">assertive</Button>
                <Button type="block" bgColor="royal">royal</Button>
                <Button type="block" bgColor="dark">dark</Button>
            </Item>
        </List>

        <List type="list-inset" dividerContent="按钮样式" dividerBgColor="positive" dividerColor="light">
            <Item>
                <Button type="clear" bgColor="dark">Clear按钮</Button>
            </Item>
            <Item>
                <Button type="block" bgColor="dark">Block按钮</Button>
            </Item>
            <Item>
                <Button type="full" bgColor="dark">Full按钮</Button>
            </Item>
            <Item>
                <Button type="outline" bgColor="dark">Outline按钮</Button>
            </Item>
        </List>

        <List type="list-inset" dividerContent="按钮大小" dividerBgColor="positive" dividerColor="light">
            <Item>
                <Button size="small">小按钮</Button>
                <Button>默认按钮</Button>
                <Button size="large">大按钮</Button>
            </Item>
        </List>

        <List type="list-inset" dividerContent="带图标" dividerBgColor="positive" dividerColor="light">
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
