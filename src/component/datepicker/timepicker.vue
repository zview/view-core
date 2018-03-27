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
    import PickerView from './timepickerview.vue';
    import channel from './timechannel';

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
                        value: this.v
                    }
                }).$mount('[view-picker]');

                channel.$on('PickerOkEvent', (value) => {
                    this.v = value;

                    this.formatedDate = value;
                    if (this.picker)
                        this.picker.hide();

                    channel.$off('PickerOkEvent');
                });

                this.picker.show();
            }
        }
    }
</script>
