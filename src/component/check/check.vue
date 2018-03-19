<template>

    <div class="view-check-list">
        <div class="view-check-title item item-divider" v-if="title">{{title}}</div>
        <div class="view-check-item item item-checkbox"
             v-for="(option, index) in options" :key="index"
             :class="item_classes">
            <label class="view-check-label checkbox">
                <input class="view-check" :class="classes" type="checkbox"
                       :name="check_id" :value="option.value" v-model="val"
                       :readonly="readonly" :disabled="disabled"/>
            </label>
            <div class="view-check-image" v-if="option.image">
                <img :src="option.image"/>
            </div>
            <div class="view-check-name">
                <span>{{option.name}}</span>
                <Icon class="float-right" :icon="option.icon"
                      v-if="option.icon && option.icon!=''"
                      @click="_on_sub_click(index, option.value)"></Icon>
            </div>
            <div class="view-check-desc" v-if="option.desc || option.subdesc">
                <span v-if="option.desc && option.desc!=''">
                    {{option.desc}}
                </span>
                <span class="float-right" v-if="option.subdesc && option.subdesc!=''"
                      @click="_on_sub_click(index, option.value)">
                    {{option.subdesc}}
                </span>
            </div>
        </div>
    </div>

</template>

<script>

    import { oneOf, insideIonic } from '../utils';

    export default {
        name: 'Check',
        props: {
            options: {
                type: Array,
                required: true
            },
            value: {
                type: Array,
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
            title: [String, Number],
            itemClassName: String,
            onItemClick: Function,
            onSubClick: Function,
            className: String
        },
        data() {
            return {
                check_id: 'view-check-' + Math.random().toString(36).substring(3, 6),
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
                    if (this.onItemClick) this.onItemClick(val);
                }
            },
        },
        methods: {
            /*_on_item_click: function (index, value) {
                console.log('_on_item_click', index, value);
                let vm = this;

                let i = vm.val.indexOf(value);
                if (i == -1) {
                    vm.val.push(value);
                }
                else {
                    vm.val.splice(i, 1);
                }
                vm.val.sort();
            },*/
            _on_sub_click: function (index, value) {
//                console.log('_on_sub_click', index, value);
                let vm = this;
                if (vm.onSubClick) vm.onSubClick(index, value);
            },
        },
    }
</script>
