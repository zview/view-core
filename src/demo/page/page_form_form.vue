<template>
    <div class="page-form">

        <Form>
            <Input type="text"  placeholder="图标文字"
                   color="balanced" bg-color="stable"
                   label-color="positive"
                   label-icon="ion-android-person"
                   label="姓名" v-model="textval"/>

            <Input type="text" placeholder="只有图标"
                   color="balanced" bg-color="stable"
                   label-color="positive"
                   label-icon="ion-android-person"/>

            <Input type="text" placeholder="只有文字"
                   color="balanced" bg-color="stable"
                   label-color="positive"
                   label="籍贯"/>

            <Input type="password" bg-color="stable"
                   label-icon="ion-ios-unlocked-outline" label="密码"/>

            <Input type="tel" bg-color="stable" label-icon="fa-phone" label="电话"/>
            <Input type="url" bg-color="stable" label="网址"/>
            <Input type="email" bg-color="stable" label="邮箱"/>
            <Input type="number" bg-color="stable" label="数字"/>
            <Input type="date" bg-color="stable" label="日期"/>
            <Input type="time" bg-color="stable" label="时间"/>
            <Input type="color" bg-color="stable" label="颜色"/>

            <Input type="textarea" label="描述" bg-color="stable" placeholder="默认文本区域" v-model="textareaval"/>

            <Input type="slot" bg-color="stable" label="文件">
                <Upload accept="*/*" action="//" :show-upload-list="false">
                    <Icon icon="ion-ios-plus-outline"></Icon>
                </Upload>
            </Input>

            <RegionPicker v-model="region_val" label="地区" :data='regiondata'></RegionPicker>

            <DatePicker v-model="date_val" label="生日" date-format="yyyy-mm-dd"></DatePicker>


            <Toggle color="positive" v-model="toggle_val" :label="'禁用' + toggle_val"></Toggle>
            <Slider color="positive" :min="0" :max="100" v-model="slider_val">
                <Icon slot="left" icon="ion-ios-sunny-outline"></Icon>
                <Icon slot="right" icon="ion-ios-sunny"></Icon>
            </Slider>
            <Select :label="'请选择' + select_val" color="balanced" :options="select_options" v-model="select_val"></Select>
            <Radio indicator-color="balanced" :options="radio_options" v-model="radio_val" :title="'请选择' + radio_val"></Radio>
            <Check :title="'请选择' + check_val" :options="check_options" v-model="check_val"></Check>

            <br/>
            <Search color="balanced" bg-color="dark" v-model="search_val"></Search>
            <br/>

            <Input type="button" input-label="按钮"/>
            <Input type="reset" input-label="重置"/>
            <Input type="submit" color="balanced" input-label="提交"/>
        </Form>

    </div>
</template>

<script>

    import RegionData from '../static/datas/regiondata.json';

    export default {
        data () {
            return {
                message: '表单',

                textval: '',
                textareaval: '',

                search_val: 'search',
                toggle_val: false,
                slider_val: 25,

                select_val: 3,
                select_options : [
                    {'name': '一', 'value': 1},
                    {'name': '三', 'value': 3},
                    {'name': '五', 'value': 5},
                ],

                radio_val: 3,
                radio_options : [
                    {'name': '一', 'value': 1},
                    {'name': '三', 'value': 3},
                    {'name': '五', 'value': 5},
                ],

                check_val: [3],
                check_options : [
                    {'name': '一', 'value': 1},
                    {'name': '三', 'value': 3},
                    {'name': '五', 'value': 5},
                ],

                date_val: '2016-12-01',

                region_val: '130102',
                regioncodes: '130000-130100-130102',
                regionnames: '河北省-石家庄市-长安区',
                regiondata: RegionData,
            }
        },
        methods: {

        },
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

</style>
