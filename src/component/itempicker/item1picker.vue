<template>
    <div class="view-input-wrapper">
        <div view-datepicker class="view-input-item view-item item item-input" @click="showPicker()">
            <span v-if="label != ''" class="view-input-label input-label" v-text="label"></span>
            <input ref="datetime" type="datetime" :value="v">
            <span v-if="showName" class="view-input-text" v-text="formatedDate"></span>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import PickerView from './item1pickerview.vue';
    import channel from './item1channel';

    const formatDate = (items, value) => {
        let searchs = items.filter(item => item.index == value);
        if (searchs && searchs.length > 0) {
            return searchs[0].name;
        }
        return value;
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
                type: [Number, String],
                default: ''
            },
            items: {
                type: Array,
                default: {},
            },
            showName: {
                type: Boolean,
                default: true,
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
            this.formatedDate = formatDate(this.items, this.value);
        },

        methods: {
            showPicker() {
                let el = document.createElement('div');
                el.setAttribute('view-picker', '');
                document.body.appendChild(el);

                let PickerComponent = Vue.extend(PickerView);
                this.picker = new PickerComponent({
                    data: {
                        value: this.v,
                        items: this.items,
                    }
                }).$mount('[view-picker]');

                channel.$on('PickerOkEvent', (value) => {
                    this.v = value;

                    this.formatedDate = formatDate(this.items, value);

                    if (this.picker)
                        this.picker.hide();

                    channel.$off('PickerOkEvent');
                });

                this.picker.show();
            },
        }
    }
</script>
