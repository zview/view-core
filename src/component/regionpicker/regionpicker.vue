<template>

    <div class="view-input-wrapper">
        <div view-regionpicker class="view-input-item view-item item item-input" @click="showPicker()">
            <span v-if="label != ''" class="view-input-label input-label" v-text="label"></span>
            <input ref="inputer" type="hidden" :value="v"/>
            <span class="view-input-text" v-text="formatedNames"></span>
        </div>
    </div>

</template>

<script>

    import Vue from 'vue';
    import Picker from './picker.vue';
    import channel from './channel';

    const formatRegionCode = (codes) => {
        console.log('formatRegionCode', codes);
        let array = codes.split('-');
        let code = array[array.length - 1];
        if(!code || code=='') code = array[array.length - 2];
        return code;
    };

    const formatRegionCodes = (value, data) => {
        console.log('value', value);

        let codes = [];

        let selfcode = value;
        let parentcode = '';
        let items = data.filter(item => (item.value == selfcode && item.level.startsWith('x')));  //区县级
        if (items && items.length > 0) {
            selfcode = items[0].value;
            parentcode = items[0].parent;
        }
        else
        {
            selfcode = '';
            parentcode = value;
        }
        codes.push(selfcode);

        selfcode = '';
        items = data.filter(item => (item.value == parentcode && item.level.startsWith('d')));  //地市级
        if(!items || items.length==0)  //两级都没找到,给个默认值
        {
            items = data.filter(item => (item.level.startsWith('d')));
        }
        if (items && items.length > 0) {
            selfcode = items[0].value;
            parentcode = items[0].parent;
        }
        codes.push(selfcode);

        selfcode = '';
        items = data.filter(item => (item.value == parentcode && item.level.startsWith('c')));  //省级
        if (items && items.length > 0) {
            selfcode = items[0].value;
            parentcode = items[0].parent;
        }
        codes.push(selfcode);

        codes.reverse();
        return codes.join('-');
    };

    const formatRegionNames = (codes, data) => {
        console.log('codes', codes);

        let names = [];

        for (let code of codes.split('-')) {
            let name = '';
            let items = data.filter(item => (item.value == code));
            if (items && items.length > 0) {
                name = items[0].name;
            }
            names.push(name);
        }

        return names.join('-');
    };


    export default {
        props: {
            label: {
                type: String,
                default: ''
            },
            placeholder: {
                type: String,
                default: ''
            },
            value: {
                type: String,
                default: ''
            },
            data: {
                type: Array
            },
            onPicked: Function,
            onCancel: Function,
        },

        computed: {
            v: {
                get: function () {
                    return this.value;
                },
                set: function (val) {
                    this.$refs.inputer.value = val;
                    this.$emit('input', val);
                }
            },
        },

        data() {
            return {
                picker: undefined, // picker vm
                formatedCodes: '',
                formatedNames: '',
            }
        },

        mounted() {
            let vm = this;
            vm.formatedCodes = formatRegionCodes(vm.value, vm.data);
            vm.formatedNames = formatRegionNames(vm.formatedCodes, vm.data);
        },

        methods: {
            showPicker() {
                let vm = this;

                let el = document.createElement('div');
                el.setAttribute('view-picker', '');
                document.body.appendChild(el);

                let PickerComponent = Vue.extend(Picker);
                vm.picker = new PickerComponent({
                    data: {
                        value: formatRegionCodes(vm.value, vm.data),  //当前值
                        data: vm.data, //全部数据
                    }
                }).$mount('[view-picker]');

                channel.$on('PickerOkEvent', (value) => {
                    this.v = formatRegionCode(value);
                    vm.formatedNames = formatRegionNames(value, vm.data);

                    if (vm.onPicked) vm.onPicked(value, vm.formatedNames);

                    if (vm.picker) vm.picker.hide();
                    channel.$off('PickerOkEvent');
                });

                channel.$on('PickerCancelEvent', () => {
                    if (vm.onCancel) vm.onCancel();
                    channel.$off('PickerCancelEvent');
                });

                vm.picker.show();
            }
        }
    }
</script>
