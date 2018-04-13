<template>

    <div class="view-toggle-item item item-toggle view-item-toggle" :class="item_classes">
        <span class="view-toggle-label">{{label}}</span>
        <label class="toggle" :class="classes">
            <input type="checkbox" v-model="val" :readonly="readonly" :disabled="disabled">
            <div class="view-toggle track">
                <div class="handle"></div>
            </div>
        </label>
    </div>

</template>

<script>

    import { oneOf, insideIonic } from '../utils';

    export default {
        name: 'Toggle',
        props: {
            value: {
                type: [Boolean, String],
                required: false,
                default: false,
            },
            color: {
                validator (value) {
                    return insideIonic(value);
                }
            },
            label: String,
            disabled: [Boolean, String],
            readonly: [Boolean, String],
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
                        [`toggle-${this.color}`]: !!this.color,
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
        }
    }
</script>
