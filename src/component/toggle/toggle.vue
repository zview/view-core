<template>

    <div class="list">
        <div class="item item-toggle" :class="item_classes">
            {{label}}
            <label class="toggle" :class="classes">
                <input type="checkbox" v-model="val">
                <div class="track">
                    <div class="handle"></div>
                </div>
            </label>
        </div>
    </div>

</template>

<script>

    import { oneOf, insideIonic } from '../../util/check';

    const prefixCls = 'zv-toggle';
    const prefixItemCls = 'zv-toggle-item';

    export default {
        name: 'Toggle',
        props: {
            value: {
                type: [Boolean, String],
                required: true
            },
            color: {
                validator (value) {
                    return insideIonic(value);
                }
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
                        [`toggle-${this.color}`]: !!this.color,
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
        }
    }
</script>
