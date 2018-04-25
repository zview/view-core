<template>
    <div class="page-itempicker">

        <Panel>{{message}}</Panel>

        <Panel type="paddingless">
            <Item1Picker :items="items1" v-model="curval1" label="一栏"></Item1Picker>
        </Panel>

        <Panel>
            value: {{ curval1 }}
        </Panel>


        <Panel type="paddingless">
            <Item1Picker ref="picker" :items="items1" :show-name="true" :show-line="false" v-model="curval2" label="一栏"></Item1Picker>
        </Panel>

        <Panel>
            <span @click="show">显示</span><br/>
            value: {{ curval2 }}
        </Panel>

    </div>
</template>

<script>
    export default {
        data () {
            return {
                message: '分栏选择',
                curval1: 1,
                items1: [{'name': '一', 'index': 1},{'name': '二', 'index': 2},{'name': '三', 'index': 3}],
                curval2: 2,
            }
        },
        methods: {
            show: function () {
                let vm = this;
                vm.$refs['picker'].showPicker();
            },

        },
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

</style>
