<template>

    <div class="view-radio-list">
        <div class="view-radio-title item item-divider" v-if="title">{{title}}</div>
        <div class="view-radio-item item item-radio" v-for="(option, index) in options" :key="index"
             @click="_on_cell_click(index, option.value)" :class="item_classes">
            <input class="view-radio" type="radio" :name="radio_name"
                   :value="option.value" v-model="val"
                   :readonly="readonly" :disabled="disabled"/>
            <div class="radio-content">
                <span class="view-radio-label item-content">{{option.name}}</span>
                <i class="view-radio-indicator radio-icon ion-ios-checkmark" :class="indicator_classes"></i>
            </div>
        </div>
    </div>

</template>

<script>

    import { oneOf, insideIonic } from '../utils';

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
            disabled: [Boolean, String],
            readonly: [Boolean, String],
            color: {
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
            title: [String, Number],
            itemClassName: String,
            indicatorClassName: String,
            className: String
        },
        mounted: function() {
            console.log('mounted');
        },
        data() {
            return {
                radio_name: 'view-radio-' + Math.random().toString(36).substring(3, 6),
            }
        },
        computed: {
            item_classes () {
                return [
                    {
                        [`${indicatorLeftCls}`]: this.indicatorAlign && this.indicatorAlign=='left',
                        [`${this.color}`]: !!this.color,
                        [`${this.itemClassName}`]: !!this.itemClassName
                    }
                ];
            },
            indicator_classes () {
                return [
                    {
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
