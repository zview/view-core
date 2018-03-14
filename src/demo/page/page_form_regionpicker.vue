<template>
    <div class='page-cascade'>

        <!--<Panel  type='inset'>
            <RegionPicker label="地区" :data-fields='fields' :data='cities' :value='value' :on-change='onChange'></RegionPicker>

            &lt;!&ndash; 使用远程数据 &ndash;&gt;
            &lt;!&ndash;
            <RegionPicker
              :fields='fields'
              ajax-url='path/to/data'
              :value='value'
              :on-change='onChange'
            ></RegionPicker>
            &ndash;&gt;
        </Panel>-->


        <Panel>{{message}}</Panel>

        <Panel type="paddingless">
            <RegionPicker v-model="code" label="地区" :data='regiondata'
                :on-picked="_on_picker_picked" :on-cancel="_on_picker_cancel"></RegionPicker>
        </Panel>

        <Panel @click.native="_on_change_code">
            value: {{ code }}
        </Panel>

        <Panel>
            {{ regioncodes }} : {{ regionnames }}
        </Panel>

    </div>
</template>

<script>

    import RegionData from '../static/datas/regiondata.json';

    export default {
        data () {
            return {
                message: '地区选择',
                code: '130102',
                regioncodes: '130000-130100-130102',
                regionnames: '河北省-石家庄市-长安区',
                regiondata: RegionData,

                /*
                regiondata: [
                    {
                        "name": "北京市",
                        "value": "110000",
                        "level": "c0",
                    },
                    {
                        "name": "市辖区",
                        "parent": "110000",
                        "value": "110100",
                        "level": "d0",
                    },
                    {
                        "name": "东城区",
                        "parent": "110100",
                        "value": "110101",
                        "level": "x0",
                    },
                    {
                        "name": "西城区",
                        "parent": "110100",
                        "value": "110102",
                        "level": "x0",
                    },
                    {
                        "name": "朝阳区",
                        "parent": "110100",
                        "value": "110105",
                        "level": "x0",
                    },

                    {
                        "name": "天津市",
                        "value": "120000",
                        "level": "c0",
                    },
                    {
                        "name": "市辖区",
                        "parent": "120000",
                        "value": "120100",
                        "level": "d0",
                    },
                    {
                        "name": "和平区",
                        "parent": "120100",
                        "value": "120101",
                        "level": "x0",
                    },
                    {
                        "name": "河东区",
                        "parent": "120100",
                        "value": "120102",
                        "level": "x0",
                    },
                    {
                        "name": "河西区",
                        "parent": "120100",
                        "value": "120103",
                        "level": "x0",
                    },
                    {
                        "name": "南开区",
                        "parent": "120100",
                        "value": "120104",
                        "level": "x0",
                    },

                    {
                        "name": "河北省",
                        "value": "130000",
                        "level": "c0",
                    },
                    {
                        "name": "石家庄市",
                        "parent": "130000",
                        "value": "130100",
                        "level": "d1",
                    },
                    {
                        "name": "长安区",
                        "parent": "130100",
                        "value": "130102",
                        "level": "x0",
                    },
                    {
                        "name": "桥东区",
                        "parent": "130100",
                        "value": "130103",
                        "level": "x0",
                    },
                    {
                        "name": "唐山市",
                        "parent": "130000",
                        "value": "130200",
                        "level": "d1",
                    },
                    {
                        "name": "路南区",
                        "parent": "130200",
                        "value": "130202",
                        "level": "x0",
                    },
                    {
                        "name": "路北区",
                        "parent": "130200",
                        "value": "130203",
                        "level": "x0",
                    },

                    {
                        "name": "山西省",
                        "value": "140000",
                        "level": "c0",
                    },
                    {
                        "name": "太原市",
                        "parent": "140000",
                        "value": "140100",
                        "level": "d1",
                    },
                    {
                        "name": "小店区",
                        "parent": "140100",
                        "value": "140105",
                        "level": "x0",
                    },

                    {
                        "name": "内蒙古",
                        "value": "150000",
                        "level": "c0",
                    },
                    {
                        "name": "呼和浩特市",
                        "parent": "150000",
                        "value": "150100",
                        "level": "d1",
                    },
                    {
                        "name": "新城区",
                        "parent": "150100",
                        "value": "150102",
                        "level": "x0",
                    },
                ],
                */
            }
        },
        methods: {
            _on_picker_picked: function (codes, names) {
                console.log('_on_picker_picked', codes, names);
                let vm = this;
                vm.regioncodes = codes;
                vm.regionnames = names;
            },
            _on_picker_cancel: function () {
                console.log('_on_picker_cancel');
            },
            _on_change_code: function () {
                console.log('_on_change_code');
                let vm = this;
                vm.code = '430101';
            },
        },
    }

</script>

<style lang='scss' rel='stylesheet/scss' scoped>

</style>
