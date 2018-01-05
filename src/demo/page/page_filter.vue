<template>
    <div class="page-filter">

        <Panel>{{message}}</Panel>

        <Panel>
            {{datetime|formatdate}}<br/>
            {{datetime|formattime}}<br/>
            {{datetime|formatdatetime('yyyy')}}<br/>
            {{str|capitalize}}<br/>
            {{str|viewsubstr(2)}}<br/>
        </Panel>

    </div>
</template>

<script>
    export default {
        data () {
            return {
                message: '过滤器',
                datetime: '2017-06-19T09:27:02.149286',
                str: 'book is good',
            }
        },
        methods: {

        },
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

</style>
