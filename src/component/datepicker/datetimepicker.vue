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
    import PickerView from './datetimepickerview.vue';
    import channel from './datetimechannel';

    const PATTERN = 'yyyy-MM-dd hh:mm:ss';

    const encodeDate = (value) => {
        return value.split(' ').join('-').replace(/:/g, '-');
    };

    const decodeDate = (value) => {
        let result = '';
        let dates = value.split('-');
        for (let i = 0; i < dates.length; i++) {
            result += dates[i];
            if (i <= 1)
                result += '-';
            else if (i == 2)
                result += ' ';
            else if(i>2 && i<dates.length-1)
                result += ':';
        }
        return result;
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
            this.formatedDate = this.value;
        },

        methods: {
            showPicker() {
                let el = document.createElement('div');
                el.setAttribute('view-picker', '');
                document.body.appendChild(el);

                let PickerComponent = Vue.extend(PickerView);
                this.picker = new PickerComponent({
                    data: {
                        value: encodeDate(this.v)
                    }
                }).$mount('[view-picker]');

                channel.$on('PickerOkEvent', (value) => {
                    this.v = decodeDate(value);

                    this.formatedDate = decodeDate(value);
                    if (this.picker)
                        this.picker.hide();

                    channel.$off('PickerOkEvent');
                });

                this.picker.show();
            }
        }
    }
</script>
