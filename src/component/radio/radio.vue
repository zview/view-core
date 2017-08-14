<template>

    <div class="list" :class="classes">
        <div class="item item-divider" v-if="title">{{title}}</div>
        <div class="item item-radio" v-for="(option, index) in options" :key="index"
             @click="_on_cell_click(index, option.value)" :class="item_classes">
            <input type="radio" :name="radio_id" :id="index" :value="option.value" v-model="val"/>
            <div class="radio-content">
                <div class="item-content">{{option.name}}</div>
                <i class="radio-icon ion-checkmark" :class="indicator_classes"></i>
            </div>
        </div>
    </div>

</template>

<script>

    import { oneOf, insideIonic } from '../../util/check';

    const prefixCls = 'zv-radio';
    const prefixItemCls = 'zv-radio-item';
    const prefixIndicatorCls = 'zv-radio-indicator';
    const indicatorLeftCls = 'item-icon-left';

    export default {
        name: 'Radio',
        props: {
            options: {
                type: Array,
                required: true
            },
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
            indicatorColor: {
                validator (value) {
                    return insideIonic(value);
                }
            },
            indicatorAlign: {
                validator (value) {
                    return oneOf(value, ['left', 'right'], true);
                },
                default: 'right',
            },
            title: String,
            itemClassName: String,
            indicatorClassName: String,
            className: String
        },
        mounted: function() {
            console.log('mounted');
        },
        data() {
            return {
                radio_id: prefixCls + '-' + Math.random().toString(36).substring(3, 6),
            }
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
            item_classes () {
                return [
                    {
                        [`${prefixItemCls}`]: true,
                        [`${indicatorLeftCls}`]: this.indicatorAlign && this.indicatorAlign=='left',
                        [`${this.indicatorColor}`]: !!this.indicatorColor,
                        [`${this.itemClassName}`]: !!this.itemClassName
                    }
                ];
            },
            indicator_classes () {
                return [
                    {
                        [`${prefixIndicatorCls}`]: true,
                        [`${this.indicatorColor}`]: !!this.indicatorColor,
                        [`${this.indicatorClassName}`]: !!this.indicatorClassName
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
