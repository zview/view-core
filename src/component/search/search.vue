<template>

    <div class="list" :class="list_classes">
        <div class="item item-input-inset" :class="item_classes">
            <slot name="left"></slot>
            <label class="item-input-wrapper" :class="label_classes">
                <input type="search" v-model="val" :placeholder="placeholder" :class="classes">
            </label>
            <slot name="right"></slot>
        </div>
    </div>

</template>

<script>

    import { oneOf, insideIonic } from '../../util/check';

    const prefixListCls = 'zv-search-list';
    const prefixItemCls = 'zv-search-item';
    const prefixLabelCls = 'zv-search-label';
    const prefixCls = 'zv-search';

    export default {
        name: 'Search',
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
            bgColor: {
                validator (value) {
                    return insideIonic(value);
                }
            },
            placeholder: [Number, String],
            listClassName: String,
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
                        [`${prefixCls}`]: true,
                        [`${this.color}`]: !!this.color,
                        [`${this.bgColor}-bg`]: !!this.bgColor,
                        [`${this.className}`]: !!this.className
                    }
                ];
            },
            list_classes () {
                return [
                    {
                        [`${prefixListCls}`]: true,
                        [`${this.listClassName}`]: !!this.listClassName
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
            label_classes () {
                return [
                    {
                        [`${prefixLabelCls}`]: true,
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
