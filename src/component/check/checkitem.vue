<template>

    <div class="view-check-item item item-checkbox" :class="item_classes">
        <label class="view-check-label checkbox">
            <input class="view-check" :class="classes" type="checkbox"
                   :name="name" v-model="val"
                   :readonly="readonly" :disabled="disabled"/>
        </label>
        <slot></slot>
    </div>

</template>

<script>

    import { oneOf, insideIonic } from '../utils';

    export default {
        name: 'CheckItem',
        props: {
            value: {
                type: [String, Boolean],
            },
            name: [String, Number],
            disabled: [Boolean, String],
            readonly: [Boolean, String],
            color: {
                validator (value) {
                    return insideIonic(value);
                }
            },
            bgColor: {
                validator (value) {
                    return insideIonic(value);
                }
            },
            itemClassName: String,
            className: String
        },
        data() {
            return {

            }
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
                        [`${this.color}`]: !!this.color,
                        [`${this.bgColor}-bg`]: !!this.bgColor,
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

        },
    }
</script>
