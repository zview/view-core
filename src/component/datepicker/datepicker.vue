<template>
    <div class="view-input-wrapper">
        <div view-datepicker class="view-input-item view-item item item-input" @click="showPicker()">
            <span v-if="label != ''" class="view-input-label input-label" v-text="label"></span>
            <input ref="datetime" type="datetime" :value="v" :readonly="readonly" :disabled="disabled">
            <span class="view-input-text" v-text="formatedDate"></span>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import PickerView from './datepickerview.vue';
    import channel from './datechannel';

    const formatDate = (value, format) => {
        switch (format) {
            case 'yyyy/MM/dd':
                return value.split('-').join('/');
                break;
            default:
                return value;
        }
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
            dateFormat: {
                type: String,
                default: 'yyyy-MM-dd',
                validator: function (value) {
                    return ['yyyy-MM-dd', 'yyyy/MM/dd'].indexOf(value) > -1;
                }
            },
            disabled: [Boolean, String],
            readonly: [Boolean, String]
        },

        computed: {
            v: {
                get: function () {
                    return this.value;
                },
                set: function (val) {
                    this.$emit('input', val);
                    this.$refs.datetime.value = val;
                }
            },
        },

        watch: {
            value: function (newValue) {
                this.formatedDate = formatDate(newValue, this.dateFormat);
                console.log('watch', newValue, this.formatedDate);
            }
        },

        data() {
            return {
                picker: undefined, // picker vm
                formatedDate: '',
            }
        },

        mounted() {
            this.formatedDate = formatDate(this.value, this.dateFormat);
        },

        methods: {
            showPicker() {
                if(this.readonly || this.disabled) return;

                let el = document.createElement('div');
                el.setAttribute('view-picker', '');
                document.body.appendChild(el);

                let PickerComponent = Vue.extend(PickerView);
                this.picker = new PickerComponent({
                    data: {
                        value: this.v
                    }
                }).$mount('[view-picker]');

                channel.$on('PickerOkEvent', (value) => {
//                    this.v = value;
                    this.v = formatDate(value, this.dateFormat);
                    this.formatedDate = formatDate(value, this.dateFormat);
                    if (this.picker)
                        this.picker.hide();

                    channel.$off('PickerOkEvent');
                });

                this.picker.show();
            }
        }
    }
</script>
