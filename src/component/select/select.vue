<template>

    <div class="view-select-item item item-input item-select" :class="item_classes">
        <label class="view-select-label input-label">
            {{label}}
        </label>
        <select class="view-select" v-model="val" :class="classes"
                :multiple="multiple" :readonly="readonly" :disabled="disabled">
            <option disabled value="">请选择</option>
            <option v-for="(option, index) in options" :key="index"
                    :value="option.value">{{option.name}}</option>
        </select>
    </div>

</template>

<script>

    import { oneOf, insideIonic } from '../check';

    const multipileCls = 'view-select-multipile';

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
            disabled: [Boolean, String],
            readonly: [Boolean, String],
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
                        [`${multipileCls}`]: !!this.multiple && this.multiple==true,
                        [`${this.color}`]: !!this.color,
                        [`${this.className}`]: !!this.className
                    }
                ];
            },
            item_classes () {
                return [
                    {
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
                let vm = this;
                vm.val = value;
            }
        },
    }
</script>
