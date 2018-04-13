<template>
    <div class="page-check">

        <List>
            <Check :title="'选择' + val1" color="balanced" :options="options1" v-model="val1"></Check>
        </List>

        <List>
            <Check :title="'选择' + val2" :options="options2" v-model="val2"></Check>
        </List>

        <List>
            <Check :title="'选择' + val3" :options="options3" v-model="val3"
                   :on-item-click="_on_change_state" :on-sub-click="_on_change_num"></Check>
        </List>

        <List>
            <CheckItem v-model="val4" name="check4">
                <h2>选项</h2>
                <p>说明</p>
            </CheckItem>
        </List>

    </div>
</template>

<script>
    export default {
        data () {
            return {
                message: '复选框',

                val1: [5],
                options1: [
                    {'name': '一零零零', 'value': 1, 'desc': '描述', 'subdesc': 'x2',
                        'icon': 'ion-aperture', 'extraicon': 'fa-trash'},
                    {'name': '三零零零', 'value': 3},
                    {'name': '五零零零', 'value': 5},
                ],

                val2: ['three'],
                options2: [
                    {'name': '一零零零', 'value': 'one'},
                    {'name': '三零零零', 'value': 'three'},
                    {'name': '五零零零', 'value': 'five'},
                ],

                val3: [1,3],
                options3: [
                    {'name': '商品1', 'value': 1, 'desc': '￥200', 'subdesc': 'x1', 'icon': 'ion-edit'},
                    {'name': '商品2', 'value': 2, 'desc': '￥100', 'subdesc': 'x2', 'icon': 'ion-edit'},
                    {'name': '商品3', 'value': 3, 'desc': '￥300', 'subdesc': 'x3', 'icon': 'ion-edit'},
                ],

                val4: null,
            }
        },
        methods: {
            _on_change_state: function (val) {
                console.log('_on_change_state', val);

            },
            _on_change_num: function (index, value) {
                console.log('_on_change_num', index, value, this.val3);

            },

        },
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

</style>
