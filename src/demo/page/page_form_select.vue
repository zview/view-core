<template>
    <div class="page-select">

        <List>
            <Select :label="'请选择' + val" color="balanced" :options="options" v-model="val"></Select>
            <Select :label="'请选择' + val2" color="balanced" :multiple="true" :options="options2" v-model="val2"></Select>
        </List>


        <Panel type="inset">

            <VSelect v-model="selected" :options="['中国','美国','俄罗斯','德国']"></VSelect>

        </Panel>

        <Panel type="inset">

            <VSelect :on-change="_on_select_change" :multiple="true" :options="[{label: '中国', value: 'China'}, {label: '美国', value: 'America'}, {label: '德国', value: 'German'}]"></VSelect>

        </Panel>

    </div>
</template>

<script>
    export default {
        data () {
            return {
                message: '下拉框',
                val: 5,
                options : [
                    {'name': '一', 'value': 1},
                    {'name': '三', 'value': 3},
                    {'name': '五', 'value': 5},
                ],
                val2: [5,3],
                options2 : [
                    {'name': '一', 'value': 1},
                    {'name': '三', 'value': 3},
                    {'name': '五', 'value': 5},
                ],

                selected: '',
            }
        },
        methods: {
            _on_select_change: function (value) {
                console.log('_on_select_change', value);
            }

        },
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

</style>
