<template>

    <div class="view-search-item item item-input-inset" :class="item_classes">
        <slot name="left"></slot>
        <label class="view-search-label item-input-wrapper" :class="label_classes">
            <Icon icon="ion-ios-search" class-name="placeholder-icon"></Icon>
            <input type="search" v-model="val"
                   :placeholder="placeholder" class="view-search" :class="classes"
                   :readonly="readonly" :disabled="disabled"/>
        </label>
        <slot name="right"></slot>
    </div>

</template>

<script>

    import { oneOf, insideIonic } from '../../util/check';

    export default {
        name: 'Search',
        props: {
            value: {
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
            bgColor: {
                validator (value) {
                    return insideIonic(value);
                }
            },
            placeholder: [Number, String],
            itemClassName: String,
            labelClassName: String,
            className: String
        },
        mounted: function() {
            console.log('mounted');
        },
        computed: {
            classes () {
                return [
                    {
                        [`${this.color}`]: !!this.color,
                        [`${this.bgColor}-bg`]: !!this.bgColor,
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
            label_classes () {
                return [
                    {
                        [`${this.labelClassName}`]: !!this.labelClassName
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
