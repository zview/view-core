<template>
    <div class="page-card">

        <Card>
            {{message}}
        </Card>


        <Card header-content="头部" footer-content="底部">
            {{message}}
        </Card>


        <Card>
            <div slot="header" class="text-right">头部装饰</div>
            {{message}}
            <div slot="footer">底部装饰</div>
        </Card>


        <List type="list-card">
            <Item icon-left="ion-thumbsup">条目</Item>
            <Item icon-left="ion-thumbsup">条目</Item>
            <Item icon-left="ion-thumbsup">条目</Item>
        </List>


        <List type="list-card">
            <Item :thumbnail-left="true">
                <img src="../static/images/nature-sea-800.jpg" />
                <h2>标题很长标题很长标题很长标题很长标题很长</h2>
                <p>内容很多内容很多内容很多内容很多内容很多内容很多内容很多</p>
            </Item>
            <Item :thumbnail-right="true">
                <img src="../static/images/nature-sea-800.jpg" />
                <h2>标题很长标题很长标题很长标题很长标题很长</h2>
                <p>内容很多内容很多内容很多内容很多内容很多内容很多内容很多</p>
            </Item>
        </List>

        <List type="list-card">
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

        <List type="list-card">
            <Item :is-image="true">
                <img src="../static/images/nature-sea-800.jpg" />
                <h2>标题很长标题很长标题很长标题很长标题很长</h2>
                <p>内容很多内容很多内容很多内容很多内容很多内容很多内容很多</p>
            </Item>
        </List>



        <List type="list-card">
            <Item :avatar="true">
                <img src="../static/images/nature-rain-1280v.jpg" />
                <h2>标题</h2>
                <p>内容</p>
            </Item>
            <Item :is-image="true">
                <img src="../static/images/nature-sea-800.jpg" />
            </Item>
            <Item icon-left="ion-thumbsup">
                条目
            </Item>
        </List>

        <List type="list-card">
            <Item :avatar="true">
                <img src="../static/images/nature-rain-1280v.jpg" />
                <h2>标题</h2>
                <p>内容</p>
            </Item>
            <Item :is-body="true">
                <img src="../static/images/nature-sea-800.jpg" />
                <p>
                    菜鸟教程 -- 学的不仅是技术，更是梦想！<br>
                    菜鸟教程 -- 学的不仅是技术，更是梦想！<br>
                    菜鸟教程 -- 学的不仅是技术，更是梦想！<br>
                    菜鸟教程 -- 学的不仅是技术，更是梦想！
                </p>
                <p>
                    <a href="#" class="subdued">1 喜欢</a>
                    <a href="#" class="subdued">5 评论</a>
                </p>
            </Item>
            <Item :is-tabs="true">
                <div class="tab-item">
                    <Icon icon="ion-thumbsup"/>
                    喜欢
                </div>
                <div class="tab-item">
                    <Icon icon="ion-chatbox"/>
                    评论
                </div>
                <div class="tab-item">
                    <Icon icon="ion-share"/>
                    分享
                </div>
            </Item>
        </List>

    </div>
</template>

<script>
    export default {
        data () {
            return {
                message: '卡片',
            }
        },
        methods: {

        },
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

</style>
