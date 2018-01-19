<template>
    <div class='page-cascade'>

        <Panel  type='inset'>
            <div class='item item-divider'>
                选择您所在班级:
            </div>
            <Cascade :data-fields='fields' :data='cities' :value='value' :on-change='onChange'></Cascade>

            <!-- 使用远程数据 -->
            <!--
            <Cascade
              :fields='fields'
              ajax-url='path/to/data'
              :value='value'
              :on-change='onChange'
            ></Cascade>
            -->
        </Panel>

    </div>
</template>

<script>
    export default {
        data () {
            return {
                message: '级联选择',
                fields: [
                    '学校', '年级', '班级'
                ],

                cities: [
                    ['大冶一中', '高三', '三十班'],
                    ['大冶一中', '高三', '三九班'],
                    ['大冶一中', '高二', '二一班'],
                    ['大冶一中', '高二', '二二班'],
                    ['黄石二中', '高三', '三十班'],
                    ['黄石二中', '高三', '三九班'],
                    ['黄石二中', '高二', '二一班'],
                    ['黄石二中', '高二', '二二班'],
                ],
                value: [],
            }
        },
        methods: {
            onChange(value) {
                this.value = value;
                console.log(this.value);
            },
        },
    }
</script>

<style lang='scss' rel='stylesheet/scss' scoped>

</style>
