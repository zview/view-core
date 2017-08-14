<template>

    <div class="list">
        <div class="item range" :class="item_classes">
            <slot name="left"></slot>
            <input type="range" :class="classes" :min="min" :max="max" v-model="val">
            <slot name="right"></slot>
        </div>
    </div>

</template>

<script>

    import { oneOf, insideIonic } from '../../util/check';

    const prefixCls = 'zv-slider';
    const prefixItemCls = 'zv-slider-item';

    export default {
        name: 'Slider',
        props: {
            value: {
                type: [Number, String],
                required: true
            },
            color: {
                validator (value) {
                    return insideIonic(value);
                }
            },
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
                        [`${this.className}`]: !!this.className
                    }
                ];
            },
            item_classes () {
                return [
                    {
                        [`${prefixItemCls}`]: true,
                        [`range-${this.color}`]: !!this.color,
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
