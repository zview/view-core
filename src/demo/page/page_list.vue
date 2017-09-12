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
        <br/><br/>


        <List dividerContent="默认">
            <Item>条目</Item>
            <Item>条目</Item>
            <Item>条目</Item>
        </List>

        <List type="list-outer" dividerContent="无边框" bg-color="light" divider-bg-color="light">
            <Item type="item-outer">条目</Item>
            <Item type="item-outer" icon-left="ion-social-github">条目</Item>
            <Item type="item-outer">条目</Item>
        </List>

        <List type="list-inset" dividerContent="边距缩进">
            <Item>条目</Item>
            <Item>条目</Item>
            <Item>条目</Item>
        </List>

        <List type="list-card" dividerContent="卡片">
            <Item>条目</Item>
            <Item>条目</Item>
            <Item>条目</Item>
        </List>


        <List dividerContent="颜色" dividerBgColor="positive" dividerColor="light">
            <Item bgColor="calm" color="light">条目</Item>
            <Item bgColor="calm" color="light">条目</Item>
            <Item bgColor="calm" color="light">条目</Item>
        </List>

        <List dividerContent="菜单" dividerColor="positive">
            <Item note="武汉">湖北</Item>
            <Item>
                武汉<Badge color="light" bg-color="positive" text="12"></Badge>
            </Item>
        </List>

        <List dividerContent="图标" dividerColor="positive">
            <Item icon-left="ion-location"
                  icon-right="ion-ios-arrow-right">左右</Item>
            <Item icon-left="ion-thumbsup">左</Item>
            <Item icon-right="ion-ios-arrow-right">右</Item>
            <Item icon-right="ion-ios-arrow-right" note="长沙">湖南</Item>
        </List>

        <List dividerContent="按钮" dividerColor="positive">
            <Item button-left="左边" button-right="右边">条目</Item>
            <Item button-left="左边">条目</Item>
            <Item button-right="右边">条目</Item>
        </List>

        <List dividerContent="缩略图" dividerColor="positive">
            <Item :thumbnail-left="true">
                <img src="../static/images/sea.jpg" />
                <h2>标题</h2>
                <p>内容</p>
            </Item>
            <Item :thumbnail-right="true">
                <img src="../static/images/sea.jpg" />
                <h2>标题很长标题很长标题很长标题很长标题很长</h2>
                <p>内容很多内容很多内容很多内容很多内容很多内容很多内容很多</p>
            </Item>
        </List>

        <List dividerContent="头像" dividerColor="positive">
            <Item :avatar-left="true">
                <img src="../static/images/rain.jpg" />
                <h2>标题</h2>
                <p>内容</p>
            </Item>
            <Item :avatar-right="true">
                <img src="../static/images/rain.jpg" />
                <h2>标题很长标题很长标题很长标题很长标题很长</h2>
                <p>内容很多内容很多内容很多内容很多内容很多内容很多内容很多</p>
            </Item>
        </List>

        <List dividerContent="图片" dividerColor="positive">
            <Item :image="true">
                <img src="../static/images/sea.jpg" />
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

        },
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

</style>
