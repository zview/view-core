<template>
    <div class="page-input">

        <List :title="textval">
            <Input type="text" placeholder="图标文字"
                   color="balanced" bg-color="dark"
                   label-color="positive"
                   label-icon="ion-android-person"
                   label="姓名" v-model="textval"/>

            <Input type="text" placeholder="只有图标"
                   color="balanced" bg-color="dark"
                   label-color="positive"
                   label-icon="ion-android-person"/>

            <Input type="text" placeholder="只有文字"
                   color="balanced" bg-color="dark"
                   label-color="positive"
                   label="籍贯"/>

            <Input type="password" color="balanced" bg-color="dark"
                   label-color="positive"
                   label-icon="ion-ios-unlocked-outline"
                   label="密码"/>

            <Input type="text" placeholder="带按钮"
                   label="昵称" button-icon="ion-chevron-right"/>

            <Input type="tel" label-icon="fa-phone" label="电话"/>
            <Input type="url" label="网址"/>
            <Input type="email" label="邮箱"/>
            <Input type="number" label="数字"/>

            <Input type="date" label="日期"/>
            <Input type="time" label="时间"/>
            <Input type="color" label="颜色"/>

            <Input type="text" label="浮动" display-style="floating-label"/>
            <Input type="text" label="堆叠" display-style="stacked-label"/>

            <Input type="textarea" label="描述" placeholder="默认文本区域"/>
            <Input type="textarea" color="balanced" v-model="textareaval"/>

            <Input type="button" button-label="按钮"/>
            <Input type="reset" button-label="重置"/>
            <Input type="submit" color="balanced" button-label="提交"/>


        </List>

    </div>
</template>

<script>
    export default {
        data () {
            return {
                message: '输入框',
                textval: '',
                textareaval: 'hello',
            }
        },
        methods: {

        },
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

</style>
