<template>
    <div class="view-input-wrapper">
        <div view-datepicker class="view-input-item view-item item item-input" @click="showPicker()">
            <span v-if="label != ''" class="view-input-label input-label" v-text="label"></span>
            <input ref="datetime" type="datetime" :value="v">
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
            }
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
                this.$emit('input', newValue);
                this.$refs.datetime.value = newValue;
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
                    this.v = value;
//          console.log('datetime input =>', this.$refs.datetime);
//          this.$refs.datetime.value = value;
//          this.$emit('input', value);

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
