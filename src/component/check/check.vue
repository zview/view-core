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

            <Row>
                <Col :percent="option.extraicon?80:90">
                    <span class="view-check-name">{{option.name}}</span><br/>
                    <span class="view-check-desc" v-if="option.desc && option.desc!=''">
                        {{option.desc}}
                    </span>
                </Col>
                <Col class="float-right text-right">
                    <div class="float-left text-right" @click="_on_sub_click(index, option.value)"
                         v-if="option.icon || option.subdesc">
                        <Icon class="float-right" :icon="option.icon"
                              v-if="option.icon && option.icon!=''"></Icon><br/>
                        <span class="view-check-desc" v-if="option.subdesc && option.subdesc!=''">{{option.subdesc}}</span>
                    </div>
                    <div class="float-right text-right" @click="_on_extra_click(index, option.value)"
                         v-if="option.extraicon">
                        <Icon class="float-right" :icon="option.extraicon"
                              v-if="option.extraicon && option.extraicon!=''"></Icon><br/>
                    </div>
                </Col>
            </Row>

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
            onExtraClick: Function,
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
                console.log('_on_sub_click', index, value);
                let vm = this;
                if (vm.onSubClick) vm.onSubClick(index, value);
            },
            _on_extra_click: function (index, value) {
                console.log('_on_extra_click', index, value);
                let vm = this;
                if (vm.onExtraClick) vm.onExtraClick(index, value);
            },
        },
    }
</script>
