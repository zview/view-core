<template>
    <div class="page-datepicker">

        <Panel>{{message}}</Panel>

        <Panel type="paddingless">
            <DatePicker v-model="birthday" label="生日" date-format="yyyy-mm-dd"></DatePicker>
        </Panel>

        <Panel>
            value: {{ birthday }}
        </Panel>

    </div>
</template>

<script>
    export default {
        data () {
            return {
                message: '日期选择器',
                birthday: '2016-12-01',
            }
        },
        methods: {

        },
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

</style>
