<template>
    <div class="page-button">

        <List type="list-inset" divider-content="按钮颜色" divider-bg-color="positive" divider-color="light">
            <Item bg-color="dimgray">
                <Button type="block" bg-color="light" @click="_on_button_click('light')">light</Button>
                <Button type="block" bg-color="stable" @click="_on_button_click('stable')">stable</Button>
                <Button type="block" bg-color="positive" @click="_on_button_click('positive')">positive</Button>
                <Button type="block" bg-color="calm" @click="_on_button_click('calm')">calm</Button>
                <Button type="block" bg-color="balanced" @click="_on_button_click('balanced')">balanced</Button>
                <Button type="block" bg-color="energized" @click="_on_button_click('energized')">energized</Button>
                <Button type="block" bg-color="assertive" @click="_on_button_click('assertive')">assertive</Button>
                <Button type="block" bg-color="royal" @click="_on_button_click('royal')">royal</Button>
                <Button type="block" bg-color="dark" @click="_on_button_click('dark')">dark</Button>
            </Item>
        </List>

        <List type="list-inset" divider-content="按钮样式" divider-bg-color="positive" divider-color="light">
            <Item>
                <Button type="clear" bg-color="positive">Clear按钮</Button>
                <Button type="clear" bg-color="calm">Clear按钮</Button>
            </Item>
            <Item>
                <Button type="outline" bg-color="balanced">Outline按钮</Button>
                <Button type="outline" bg-color="calm">Outline按钮</Button>
            </Item>
            <Item>
                <Button size="small" type="block" bg-color="stable">Block按钮</Button>
                <Button size="small" type="block" bg-color="dark" color="calm">Block按钮</Button>
                <Button size="small" type="full" bg-color="stable">Full按钮</Button>
                <Button size="small" type="full" bg-color="dark" color="calm">Full按钮</Button>
                <Button size="small" type="block" outline="true" bg-color="dark">Block-Outline按钮</Button>
                <Button size="small" type="full" outline="true" bg-color="calm">Full-Outline按钮</Button>
            </Item>
        </List>

        <List type="list-inset" divider-content="按钮大小" divider-bg-color="positive" divider-color="light">
            <Item>
                <Button bg-color="dark" size="small">小按钮</Button>
                <Button bg-color="dark">默认按钮</Button>
                <Button bg-color="dark" size="large">大按钮</Button>
            </Item>
        </List>

        <List type="list-inset" divider-content="带图标" divider-bg-color="positive" divider-color="light">
            <Item>
                <Button bg-color="calm" size="small" icon="ion-home">默认按钮</Button>
                <Button bg-color="stable" size="small" icon="ion-heart" icon-align="right">默认按钮</Button>
            </Item>
            <Item>
                <Button bg-color="calm" size="small" icon="fa-snowflake-o" color="dark">默认按钮</Button>
                <Button bg-color="stable" size="small" icon="fa-snowflake-o" icon-align="right">默认按钮</Button>
            </Item>
        </List>

        <List type="list-inset" divider-content="FAB按钮" divider-bg-color="positive" divider-color="light">
            <Item>
                <Button type="fab" bg-color="calm" icon="ion-home"></Button>
                <Button type="fab" bg-color="calm">Top</Button>
            </Item>
            <Item>
                <Button type="fab" bg-color="balanced" icon="ion-checkmark"></Button>
                <Button type="fab" bg-color="assertive" icon="ion-close"></Button>

                <Button type="fab" bg-color="energized" icon="ion-home"></Button>
                <Button type="fab" bg-color="calm" icon="ion-android-share"></Button>
            </Item>
            <Item>
                <Button type="fab" bg-color="light" icon="ion-android-arrow-up"></Button>
                <Button type="fab" bg-color="light" icon="ion-android-arrow-down"></Button>

                <Button type="fab" bg-color="positive" icon="ion-android-arrow-forward"></Button>
                <Button type="fab" bg-color="positive" icon="ion-android-arrow-back"></Button>
            </Item>
        </List>

        <List type="list-inset" divider-content="MD按钮" divider-bg-color="positive" divider-color="light">
            <Item>
                <Button material="true" @click="_on_button_click('material')">按钮</Button>
                <Button material="true" bg-color="calm">按钮</Button>
            </Item>
            <Item>
                <Button type="block" material="true" @click="_on_button_click('material-block')">按钮</Button>
                <Button type="block" material="true" bg-color="calm">按钮</Button>
            </Item>
            <Item>
                <Button type="full" material="true" @click="_on_button_click('material-full')">按钮</Button>
                <Button type="full" material="true" bg-color="calm">按钮</Button>
            </Item>
            <Item>
                <Button size="small" type="block" material="true" bg-color="calm">按钮</Button>
                <Button size="large" type="block" material="true" bg-color="calm">按钮</Button>
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
            _on_button_click: function (message) {
                console.log('_on_button_click', message);
            },

        },
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

</style>
