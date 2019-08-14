<template>
    <div class="page-icon">

        <Panel>{{message}}</Panel>

        <List type="list-card" header-content="FontAwesome" header-bg-color="positive" header-color="light">
            <Item color="calm"><Icon icon="fa-snowflake-o" @click.native="_on_icon_click"></Icon>云横秦岭家何在</Item>
            <Item color="calm"><Icon icon="fa-bold" @click.native="_on_icon_click"></Icon>雪拥蓝关马不前</Item>
        </List>

        <List type="list-card" header-content="Ionic" header-bg-color="positive" header-color="light">
            <Item color="calm"><Icon icon="ion-xbox"></Icon>云横秦岭家何在</Item>
            <Item color="calm"><Icon icon="ion-aperture"></Icon>雪拥蓝关马不前</Item>
            <Item color="calm"><Icon icon="ion-chevron-right"></Icon>雪拥蓝关马不前</Item>
        </List>

        <List type="list-card" header-content="FontAwesome动画" header-bg-color="positive" header-color="light">
            <Item color="calm"><Icon icon="fa-spinner" type="spin"></Icon>spin</Item>
            <Item color="calm"><Icon icon="fa-circle-o-notch" type="spin"></Icon>spin</Item>
            <Item color="calm"><Icon icon="fa-refresh" type="spin"></Icon>spin</Item>
            <Item color="calm"><Icon icon="fa-cog" type="spin"></Icon>spin</Item>
            <Item color="calm"><Icon icon="fa-spinner" type="pulse"></Icon>pulse</Item>
        </List>

        <List type="list-card" header-content="FontAwesome的style样式" header-bg-color="positive" header-color="light">
            <Item color="calm"><Icon icon="fa-snowflake-o" style="font-size:48px;"></Icon>font-size:48px;</Item>
            <Item color="calm"><Icon icon="fa-snowflake-o" style="font-size:60px;color:red;"></Icon>font-size:60px;color:red;</Item>
        </List>

        <List type="list-card" header-content="FontAwesome大小" header-bg-color="positive" header-color="light">
            <Item color="calm"><Icon icon="fa-snowflake-o" size="lg"></Icon>lg</Item>
            <Item color="calm"><Icon icon="fa-snowflake-o" size="2x"></Icon>2x</Item>
            <Item color="calm"><Icon icon="fa-snowflake-o" size="5x"></Icon>5x</Item>
        </List>



        <List type="list-card" header-content="FontAwesome变形" header-bg-color="positive" header-color="light">
            <Item color="calm"><Icon icon="fa-shield"></Icon></Item>
            <Item color="calm"><Icon icon="fa-shield" type="rotate-90"></Icon>rotate-90</Item>
            <Item color="calm"><Icon icon="fa-shield" type="rotate-180"></Icon>rotate-180</Item>
            <Item color="calm"><Icon icon="fa-shield" type="rotate-270"></Icon>rotate-270</Item>
            <Item color="calm"><Icon icon="fa-shield" type="flip-horizontal"></Icon>flip-horizontal</Item>
            <Item color="calm"><Icon icon="fa-shield" type="flip-vertical"></Icon>flip-vertical</Item>
        </List>


        <Panel type="card" header-content="宽度一致">
            <p>
                <Icon icon="fa-phone" :is-fix-width="true"></Icon> 电话: 13300000000<br/>
                <Icon icon="fa-envelope" :is-fix-width="true"></Icon> 邮箱: zuv@zuv.cc
            </p>
        </Panel>


        <Panel type="card" header-content="列表图标">
            <ul class="fa-ul">
                <li><i class="fa-li fa fa-check-square"></i>List icons</li>
                <li><i class="fa-li fa fa-spinner fa-spin"></i>List icons</li>
                <li><i class="fa-li fa fa-square"></i>List icons</li>
            </ul>
        </Panel>

        <Panel type="card" header-content="堆叠图标">
            <span class="fa-stack fa-lg">
              <i class="fa fa-circle-thin fa-stack-2x"></i>
              <i class="fa fa-twitter fa-stack-1x"></i>
            </span>
            fa-twitter on fa-circle-thin<br>

            <span class="fa-stack fa-lg">
              <i class="fa fa-circle fa-stack-2x"></i>
              <i class="fa fa-twitter fa-stack-1x fa-inverse"></i>
            </span>
            fa-twitter (inverse) on fa-circle<br>

            <span class="fa-stack fa-lg">
              <i class="fa fa-camera fa-stack-1x"></i>
              <i class="fa fa-ban fa-stack-2x text-danger" style="color:red;"></i>
            </span>
            fa-ban on fa-camera
        </Panel>

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
            _on_icon_click: function () {
                console.log('_on_icon_click');
            },
        },
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

</style>
