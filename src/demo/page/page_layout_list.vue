<template>
    <div class="page-list">

        <br/>

        <Item>简单条目</Item>
        <Item>简单条目</Item>
        <br/>

        <Item icon-left="ion-social-github">左边图标</Item>
        <Item icon-right="ion-ios-arrow-right">右边图标</Item>
        <br/>

        <Item icon-right="ion-aperture" icon-right-color="lightgrey" note="注释">图标加注释</Item>
        <Item icon-right="ion-ios-arrow-right" icon-right-color="lightgrey" note="注释">图标加注释</Item>
        <br/>

        <Item type="item-outer">无边框</Item>
        <Item type="item-outer" icon-left="ion-social-github">无边框</Item>
        <br/>
        <br/>


        <List header-content="默认" sub-header-content="更多>>" :on-header-click="_on_header_click">
            <Item>条目</Item>
            <Item>条目</Item>
            <Item>条目</Item>
        </List>

        <List type="list-outer" header-content="无边框" bg-color="light" header-bg-color="light">
            <Item type="item-outer">条目</Item>
            <Item type="item-outer" icon-left="ion-social-github">条目</Item>
            <Item type="item-outer">条目</Item>
        </List>

        <List type="list-borderless" header-content="BorderLess">
            <Item>条目</Item>
            <Item>条目</Item>
            <Item>条目</Item>
        </List>

        <List type="list-inset" header-content="边距缩进">
            <Item>条目</Item>
            <Item>条目</Item>
            <Item>条目</Item>
        </List>

        <List type="list-card" header-content="卡片">
            <Item icon-left="ion-thumbsup">条目</Item>
            <Item>条目</Item>
            <Item>条目</Item>
        </List>


        <List header-content="颜色" header-bg-color="positive" header-color="light">
            <Item bgColor="calm" color="light">条目</Item>
            <Item bgColor="calm" color="light">条目</Item>
            <Item bgColor="calm" color="light">条目</Item>
        </List>

        <List header-content="菜单" header-color="positive">
            <Item note="武汉">湖北</Item>
            <Item>
                武汉
                <Badge color="light" bg-color="positive" text="12"></Badge>
            </Item>
        </List>

        <List header-content="图标" header-color="positive">
            <Item icon-left="ion-location"
                  icon-right="ion-ios-arrow-right">左右</Item>
            <Item icon-left="ion-thumbsup">左</Item>
            <Item icon-right="ion-ios-arrow-right">右</Item>
            <Item icon-right="ion-ios-arrow-right" note="长沙">湖南</Item>
        </List>

        <List header-content="按钮" header-color="positive">
            <Item button-left="左边" button-right="右边">条目</Item>
            <Item button-left="左边">条目</Item>
            <Item button-right="右边">条目</Item>
        </List>

        <List header-content="缩略图" header-color="positive">
            <Item :thumbnail-left="true">
                <img src="../static/images/nature-sea-800.jpg" />
                <h2>标题</h2>
                <p>内容</p>
            </Item>
            <Item :thumbnail-right="true">
                <img src="../static/images/nature-sea-800.jpg" />
                <h2>标题很长标题很长标题很长标题很长标题很长</h2>
                <p>内容很多内容很多内容很多内容很多内容很多内容很多内容很多</p>
            </Item>
        </List>

        <List header-content="头像" header-color="positive">
            <Item :avatar-left="true">
                <img src="../static/images/nature-rain-1280v.jpg" />
                <h2>标题</h2>
                <p>内容</p>
            </Item>
            <Item :avatar-right="true">
                <img src="../static/images/nature-rain-1280v.jpg" />
                <h2>标题很长标题很长标题很长标题很长标题很长</h2>
                <p>内容很多内容很多内容很多内容很多内容很多内容很多内容很多</p>
            </Item>
        </List>

        <List header-content="图片" header-color="positive">
            <Item :is-image="true">
                <img src="../static/images/nature-sea-800.jpg" />
                <h2>标题很长标题很长标题很长标题很长标题很长</h2>
                <p>内容很多内容很多内容很多内容很多内容很多内容很多内容很多</p>
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
            _on_header_click: function () {
                console.log('_on_header_click');
            },
        },
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

</style>
