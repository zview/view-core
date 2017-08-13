<template>
    <div class="page-list">

        <List>
            <Item :divider="true" color="positive">默认</Item>
            <Item color="calm">条目</Item>
            <Item color="calm">条目</Item>
        </List>

        <List type="list-borderless">
            <Item :divider="true" color="positive">无边框</Item>
            <Item color="calm">条目</Item>
            <Item color="calm">条目</Item>
        </List>

        <List type="list-inset">
            <Item :divider="true" color="positive">边距缩进</Item>
            <Item color="calm">条目</Item>
            <Item color="calm">条目</Item>
        </List>

        <List type="card">
            <Item :divider="true" color="positive">卡片</Item>
            <Item color="calm">条目</Item>
            <Item color="calm">条目</Item>
        </List>

        <List>
            <Item :divider="true" color="positive">菜单</Item>
            <Item note="武汉">湖北</Item>
            <Item>武汉<Badge color="light" bg-color="positive" text="12"></Badge></Item>
        </List>

        <List>
            <Item :divider="true" color="positive">图标</Item>
            <Item icon-left="ion-location"
                  icon-right="ion-ios-arrow-right">左右</Item>
            <Item icon-left="ion-thumbsup">左</Item>
            <Item icon-right="ion-ios-arrow-right">右</Item>
            <Item icon-right="ion-ios-arrow-right" note="长沙">湖南</Item>
        </List>

        <List>
            <Item :divider="true" color="positive">按钮</Item>
            <Item button-left="左边" button-right="右边">条目</Item>
            <Item button-left="左边">条目</Item>
            <Item button-right="右边">条目</Item>
        </List>

        <List>
            <Item :divider="true" color="positive">缩略图</Item>
            <Item :thumbnail-left="true">
                <img src="../static/images/rain.jpg" />
                <h2>标题</h2>
                <p>内容</p>
            </Item>
            <Item :thumbnail-right="true">
                <img src="../static/images/rain.jpg" />
                <h2>标题</h2>
                <p>内容</p>
            </Item>
        </List>

        <List>
            <Item :divider="true" color="positive">头像</Item>
            <Item :avatar-left="true">
                <img src="../static/images/rain.jpg" />
                <h2>标题</h2>
                <p>内容</p>
            </Item>
            <Item :avatar-right="true">
                <img src="../static/images/rain.jpg" />
                <h2>标题</h2>
                <p>内容</p>
            </Item>
        </List>

        <List>
            <Item :divider="true" color="positive">图片</Item>
            <Item :image="true">
                <img src="../static/images/rain.jpg" />
                <h2>标题</h2>
                <p>内容</p>
            </Item>
        </List>

    </div>
</template>

<script>
    export default {
        data () {
            return {
                message: '列表',
            }
        },
        methods: {

        },
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

</style>
