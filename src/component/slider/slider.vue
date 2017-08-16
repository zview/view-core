<template>

    <div class="view-slider-item item range" :class="item_classes">
        <slot name="left"></slot>
        <input type="range" class="view-slider" :class="classes"
               :min="min" :max="max" v-model="val"
               :readonly="readonly" :disabled="disabled"/>
        <slot name="right"></slot>
    </div>

</template>

<script>

    import { oneOf, insideIonic } from '../../util/check';

    export default {
        name: 'Slider',
        props: {
            value: {
                type: [Number, String],
                required: true
            },
            min: {
                type: [Number, String],
                required: true
            },
            max: {
                type: [Number, String],
                required: true
            },
            disabled: [Boolean, String],
            readonly: [Boolean, String],
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
                        [`${this.className}`]: !!this.className
                    }
                ];
            },
            item_classes () {
                return [
                    {
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
