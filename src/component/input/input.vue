<template>

    <div class="list">
        <div class="item item-input" :class="item_classes">
            <span class="input-label" :class="label_classes" v-if="label || labelIcon">
                <i class="icon" :class="labelIcon" v-if="labelIcon"></i> {{label}}
            </span>
            <input v-if="type=='text'" type="text" :class="classes" :placeholder="placeholder" v-model.trim="val"/>
            <input v-if="type=='password'" type="password" :class="classes" :placeholder="placeholder" v-model="val"/>
            <input v-if="type=='number'" type="number" :class="classes" :placeholder="placeholder" v-model.number="val"/>
            <textarea v-if="type=='textarea'" :class="classes" :placeholder="placeholder" v-model="val"></textarea>
            <Button type="clear" :color="buttonColor" icon="ion-ios-arrow-right" v-if="buttonColor"></Button>
        </div>
    </div>

</template>

<!--
input[type=date,time,datetime,datetime-local,month,week],
input[type=color],
input[type=email],
input[type=number],
input[type=password],
input[type=search],
input[type=tel],
input[type=text],
input[type=url],
textarea
-->

<script>

    import { oneOf, insideIonic } from '../../util/check';

    const prefixCls = 'zv-input';
    const prefixItemCls = 'zv-input-item';
    const prefixLabelCls = 'zv-input-label';

    export default {
        name: 'Input',
        props: {
            value: {
                type: [Number, String],
                required: true
            },
            label: [Number, String],
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
            labelColor: {
                validator (value) {
                    return insideIonic(value);
                }
            },
            buttonColor: {
                validator (value) {
                    return insideIonic(value);
                }
            },
            labelIcon: String,
            type: {
                validator (value) {
                    return oneOf(value, ['text', 'tel', 'email', 'number', 'hidden', 'password', 'textarea']);
                },
                default: 'text',
            },
            displayStyle: {
                validator (value) {
                    return oneOf(value, ['floating-label', 'stacked-label']);
                },
                default: '',
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
                        [`item-${this.displayStyle}`]: !!this.displayStyle,
                        [`item-input-inset`]: !!this.buttonColor,
                        [`item-button-right`]: !!this.buttonColor,
                        [`${this.itemClassName}`]: !!this.itemClassName
                    }
                ];
            },
            label_classes () {
                return [
                    {
                        [`${prefixLabelCls}`]: true,
                        [`has-input`]: this.displayStyle=='floating-label',
                        [`${this.labelColor}`]: !!this.labelColor,
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
