<template>
    <div class="page-form">

        <Form>
            <Input type="text"  placeholder="图标文字"
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

            <Input type="password"
                   label-icon="ion-ios-unlocked-outline" label="密码"/>

            <Input type="tel" label-icon="fa-phone" label="电话"/>
            <Input type="url" label="网址"/>
            <Input type="email" label="邮箱"/>
            <Input type="number" label="数字"/>
            <Input type="date" label="日期"/>
            <Input type="time" label="时间"/>
            <Input type="color" label="颜色"/>

            <Upload accept="*/*" label="文件"
                    action="//" :show-upload-list="false">
                <Icon icon="ion-ios-plus-outline"></Icon>
            </Upload>

            <Input type="textarea" label="描述" placeholder="默认文本区域"/>
            <Input type="textarea" color="balanced" v-model="textareaval"/>


            <Search color="balanced" bg-color="dark" v-model="search_val"></Search>
            <Toggle color="positive" v-model="toggle_val" :label="'禁用' + toggle_val"></Toggle>
            <Slider color="positive" :min="0" :max="100" v-model="slider_val">
                <Icon slot="left" icon="ion-ios-sunny-outline"></Icon>
                <Icon slot="right" icon="ion-ios-sunny"></Icon>
            </Slider>
            <Select :label="'请选择' + select_val" color="balanced" :options="select_options" v-model="select_val"></Select>
            <Radio indicator-color="balanced" :options="radio_options" v-model="radio_val" :title="'请选择' + radio_val"></Radio>
            <Check :title="'请选择' + check_val" :options="check_options" v-model="check_val"></Check>

            <Input type="button" button-label="按钮"/>
            <Input type="reset" button-label="重置"/>
            <Input type="submit" color="balanced" button-label="提交"/>
        </Form>

    </div>
</template>

<script>
    export default {
        data () {
            return {
                message: '表单',

                textval: '',
                textareaval: '',

                search_val: 'search',
                toggle_val: false,
                slider_val: 25,

                select_val: 5,
                select_options : [
                    {'name': '一', 'value': 1},
                    {'name': '三', 'value': 3},
                    {'name': '五', 'value': 5},
                ],

                radio_val: 5,
                radio_options : [
                    {'name': '一', 'value': 1},
                    {'name': '三', 'value': 3},
                    {'name': '五', 'value': 5},
                ],

                check_val: [5],
                check_options : [
                    {'name': '一', 'value': 1},
                    {'name': '三', 'value': 3},
                    {'name': '五', 'value': 5},
                ],
            }
        },
        methods: {

        },
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

</style>
