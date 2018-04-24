<template>
    <div class="page-datepicker">

        <Panel>{{message}}</Panel>

        <!--<Panel type="paddingless">
            <Picker :show="show1"
                    :selectData="pickData1"
                    @cancel="_on_cancel"
                    @confirm="_on_confirm"></Picker>
        </Panel>

        <Panel @click.native="toggle_show1">
            value: {{ show1 }}
        </Panel>-->


        <Panel type="paddingless">
            <Picker :show="show2"
                    :selectData="pickData2"
                    @cancel="_on_cancel"
                    @confirm="_on_confirm"></Picker>
        </Panel>

        <Panel @click.native="toggle_show2">
            value: {{ show2 }}
        </Panel>

    </div>
</template>

<script>
    export default {
        data () {
            return {
                message: '选择器',

                show1: false,
                pickData1: {
                    columns: 1, // picker的列数
                    default: [ // 默认显示哪一个字段
                        {
                            text: 2002,
                            value: 2002
                        }
                    ],
                    // 第一列的数据结构
                    pData1: [
                        {
                            text: 1999,
                            value: 1999
                        },
                        {
                            text: 2001,
                            value: 2001
                        },
                        {
                            text: 2002,
                            value: 2002
                        },
                        {
                            text: 2003,
                            value: 2003
                        },
                        {
                            text: 2004,
                            value: 2004
                        },
                        {
                            text: 2005,
                            value: 2005
                        },
                    ]
                },

                show2: false,
                pickData2: {
                    columns: 2, // 两列
                    link: true, // 联级必须需要link 参数
                    default: [ // 默认显示那个字段
                        {
                            text: '水果',
                            value: 2001
                        },
                        {
                            text: '香蕉',
                            value: 105
                        },
                    ],
                    // 第一列数据结构
                    pData1: [
                        {
                            text: '数码',
                            value: 1999
                        },
                        {
                            text: '水果',
                            value: 2001
                        },
                        {
                            text: '衣服',
                            value: 2002
                        }
                    ],
                    // 第二列数据结构
                    pData2: {
                        '1999': [
                            {
                                text: '相机',
                                value: 101
                            },
                            {
                                text: '手机',
                                value: 102
                            },
                            {
                                text: '音箱',
                                value: 103
                            }
                        ],
                        '2001': [
                            {
                                text: '苹果',
                                value: 104
                            },
                            {
                                text: '香蕉',
                                value: 105
                            },
                            {
                                text: '西红柿',
                                value: 106
                            }
                        ],
                        '2002': [
                            {
                                text: '衬衫',
                                value: 107
                            },
                            {
                                text: '短裤',
                                value: 108
                            },
                            {
                                text: '上衣',
                                value: 109
                            }
                        ]
                    }
                },
            }
        },
        methods: {
            toggle_show1: function () {
                let vm = this;
                vm.show1 = !vm.show1;
            },
            toggle_show2: function () {
                let vm = this;
                vm.show2 = !vm.show2;
            },
            _on_cancel: function () {
                console.log('_on_cancel');
                let vm = this;
                vm.show1 = false;
                vm.show2 = false;
            },
            _on_confirm: function () {
                console.log('_on_confirm');
                let vm = this;
                vm.show1 = false;
                vm.show2 = false;
            },

        },
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

</style>
