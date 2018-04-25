<template>

    <div class="view-select-item item item-input item-select" :class="item_classes">
        <label class="view-select-label input-label">
            {{label}}
        </label>
        <label class="view-select-selected" v-if="showSelected && selected && selected!=''">
            {{selected}}
        </label>
        <select class="view-select" v-model="val" :class="classes"
                :multiple="multiple" :readonly="readonly" :disabled="disabled">
            <option disabled>请选择</option>
            <option v-for="(option, index) in options" :key="index"
                    :value="option.value"
                    :disabled="option.disabled == true">{{option.name}}</option>
        </select>
    </div>

</template>

<script>

    import { oneOf, insideIonic } from '../utils';

    const multipileCls = 'view-select-multipile';

    const formatSelected = (items, values) => {

        if(!items || items.length==0 || !values || values.length==0) {
            return '';
        }

        let names = '';
        for(let i=0;i<values.length;i++) {
            let value = values[i];
            let searchs = items.filter(item => (item.value == value));
            if (searchs && searchs.length > 0) {
                names += searchs[0].name;
                if(i<values.length-1) {
                    names += ',';
                }
            }
        }
        return names;

    };

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
            showSelected: {
                type: [Boolean, String],
                default: false,
            },
            label: String,
            itemClassName: String,
            className: String
        },
        data() {
            return {
                selected: '',
            }
        },
        mounted: function() {
            console.log('mounted');
            this.selected = formatSelected(this.options, this.value);
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
        watch: {
            value: function (val) {
                if(!!this.multiple) {
                    this.selected = formatSelected(this.options, val);
                }
            }
        },
        methods: {
            _on_cell_click: function (index, value) {
                let vm = this;
                vm.val = value;
            }
        },
    }
</script>
