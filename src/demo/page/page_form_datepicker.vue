<template>
    <div class="page-datepicker">

        <Panel>{{message}}</Panel>

        <Panel type="paddingless">
            <DatePicker v-model="curdate" label="日期" date-format="yyyy-MM-dd"></DatePicker>
            <!--<DatePicker v-model="curdate" label="日期" date-format="yyyy-MM-dd" readonly="true"></DatePicker>-->
        </Panel>

        <Panel>
            value: {{ curdate }}
        </Panel>

        <Panel type="paddingless">
            <TimePicker v-model="curtime" label="时间"></TimePicker>
        </Panel>

        <Panel>
            value: {{ curtime }}
        </Panel>

        <Panel type="paddingless">
            <DateTimePicker v-model="curdatetime" label="日期时间"></DateTimePicker>
        </Panel>

        <Panel>
            value: {{ curdatetime }}
        </Panel>

    </div>
</template>

<script>
    export default {
        data () {
            return {
                message: '日期选择器',
                curdate: '2016-12-01',
                curtime: '12:12:12',
                curdatetime: '2016-12-01 12:12:12',
            }
        },
        methods: {

        },
        mounted: function() {
            console.log('mounted');
            let vm = this;

            vm.curdate = '2018-12-01';
            vm.curtime = '12:24:24';
            vm.curdatetime = '2018-12-01 12:24:24';
        },
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

</style>
