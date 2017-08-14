<template>

    <div class="list">
        <div class="item item-input item-select" :class="item_classes">
            <label class="input-label">
                {{label}}
            </label>
            <select v-model="val" :class="classes" :multiple="multiple">
                <option disabled value="">请选择</option>
                <option v-for="(option, index) in options" :key="index"
                        :value="option.value">{{option.name}}</option>
            </select>
        </div>
    </div>

</template>

<script>

    import { oneOf, insideIonic } from '../../util/check';

    const prefixCls = 'zv-select';
    const prefixItemCls = 'zv-select-item';
    const multipileCls = 'zv-select-multipile';

    export default {
        name: 'Select',
        props: {
            options: {
                type: Array,
                required: true
            },
            value: {
                type: [Number, Array, String],
                required: true
            },
            color: {
                validator (value) {
                    return insideIonic(value);
                }
            },
            multiple: {
                type: [Boolean, String],
                default: false,
            },
            label: String,
            itemClassName: String,
            className: String
        },
        mounted: function() {
            console.log('mounted');
        },
        computed: {
            classes () {
                return [
                    {
                        [`${prefixCls}`]: true,
                        [`${multipileCls}`]: !!this.multiple && this.multiple==true,
                        [`${this.color}`]: !!this.color,
                        [`${this.className}`]: !!this.className
                    }
                ];
            },
            item_classes () {
                return [
                    {
                        [`${prefixItemCls}`]: true,
                        [`${this.itemClassName}`]: !!this.itemClassName
                    }
                ];
            },
            val: {
                get:function() {
                    return this.value;
                },
                set:function(val) {
                    this.$emit('input', val);
                }
            },
        },
        methods: {
            _on_cell_click: function (index, value) {
//                console.log('_on_cell_click', index, value);
                let vm = this;

                vm.val = value;
            }
        },
    }
</script>
