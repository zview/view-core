<template>
    <div class="page-input">


        <List header-content="普通">
            <Input type="text" placeholder="图标文字"
                   label-icon="ion-android-person"
                   label="姓名" v-model="val1"/>

            <Input type="text" placeholder="只有图标"
                   label-icon="ion-android-person"
                   v-model="val2"/>

            <Input type="text" placeholder="只有文字"
                   label="籍贯" v-model="val3"/>

        </List>


        <List header-content="包装">

            <Input type="text" placeholder="请输入"
                   label-icon="ion-android-person"
                   :is-wrapper="true"
                   button-label="发送验证码"
                   :show-clear="false"
                   :on-button-click="_on_send_smscode"
                   label="文字" v-model="val4"/>

            <Input type="text" placeholder="请输入"
                   label-icon="ion-android-person"
                   :is-wrapper="true"
                   button-icon="ion-android-person"
                   :show-clear="false"
                   label="图标" v-model="val4"/>

            <Input type="password" placeholder="请输入"
                   label-icon="ion-android-person"
                   :is-wrapper="true"
                   button-label=" "
                   :show-clear="false"
                   label="空白" v-model="val4"/>

        </List>


        <List header-content="特殊类型">
            <Input type="password" label="密码" placeholder="password" v-model="v_password"/>
            <Input type="tel" label="电话" placeholder="tel" v-model="v_tel"/>
            <Input type="url" label="网址" placeholder="url" v-model="v_url"/>
            <Input type="email" label="邮箱" placeholder="email" v-model="v_email"/>
            <Input type="number" label="数字" placeholder="number" v-model="v_number"/>
            <Input type="date" label="日期" placeholder="date" v-model="v_date"/>
            <Input type="time" label="时间" placeholder="time" v-model="v_time"/>
            <Input type="color" label="颜色" placeholder="color" v-model="v_color"/>
            <Input type="textarea" label="描述" placeholder="默认文本区域"  v-model="v_textarea1"/>
            <Input type="textarea" v-model="v_textarea2"/>
        </List>


        <List header-content="堆叠">
            <Input type="text" label="堆叠" display-style="stacked-label" placeholder="stacked" v-model="v_stacked"/>
            <Input type="text" label="堆叠" display-style="stacked-label" placeholder="stacked" v-model="v_stacked"/>
        </List>

        <List header-content="内联">
            <Input type="text" display-style="inset" placeholder="姓名"/>
            <Input type="email" display-style="inset" placeholder="邮箱"/>
        </List>

        <List header-content="浮动">
            <Input type="text" label="浮动" display-style="floating-label" placeholder="floating" v-model="v_floating"/>
            <Input type="text" label="浮动" display-style="floating-label" placeholder="floating" v-model="v_floating"/>
        </List>


        <List header-content="有标签">
            <Input type="text" placeholder="姓名" label="姓名" v-model="v_name"/>
            <Input type="text" placeholder="密码" label="密码"/>
            <Button type="block" bg-color="assertive">提交</Button>
        </List>

        <List header-content="无标签">
            <Input type="text" placeholder="姓名"/>
            <Input type="text" placeholder="密码"/>
            <Button type="block" bg-color="assertive">提交</Button>
        </List>

        <List header-content="按钮">
            <Input type="button" input-label="按钮"/>
            <Input type="reset" input-label="重置"/>
            <Input type="submit" color="balanced" input-label="提交"/>
        </List>


    </div>
</template>

<script>
    export default {
        data () {
            return {
                message: '输入框',
                val1: '',
                val2: '',
                val3: '',
                val4: '',

                v_password: '',
                v_tel: '',
                v_url: '',
                v_email: '',
                v_number: 1,
                v_date: '',
                v_time: '',
                v_color: '',
                v_textarea1: '',
                v_textarea2: '',

                v_floating: '',
                v_stacked: '',

                v_name: '',
            }
        },
        methods: {
            _on_send_smscode: function () {
                console.log('_on_send_smscode');
            }
        },
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

</style>
