<template>
    <div class="page-datepicker">

        <Panel>{{message}}</Panel>

        <Panel type="paddingless">
            <DatePicker v-model="birthday" label="生日" date-format="yyyy-mm-dd"></DatePicker>
        </Panel>

        <Panel>
            value: {{ birthday }}
        </Panel>

        <Panel type="paddingless">
            <TimePicker v-model="curtime" label="时间"></TimePicker>
        </Panel>

        <Panel>
            value: {{ curtime }}
        </Panel>

    </div>
</template>

<script>
    export default {
        data () {
            return {
                message: '日期选择器',
                birthday: '2016-12-01',
                curtime: '12:12:12',
            }
        },
        methods: {

        },
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

</style>
