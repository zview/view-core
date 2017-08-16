<template>

    <div class="view-input-item item item-input" :class="item_classes">
        <span class="view-input-label input-label" :class="label_classes" v-if="label || labelIcon">
            <Icon :icon="labelIcon" v-if="labelIcon"></Icon> {{label}}
        </span>

        <input v-if="type=='text'" type="text" :class="classes"
               :placeholder="placeholder" v-model.trim="val"
               :readonly="readonly" :disabled="disabled"/>
        <input v-if="type=='password'" type="password" :class="classes"
               :placeholder="placeholder" v-model="val"
               :readonly="readonly" :disabled="disabled"/>

        <textarea v-if="type=='textarea'" :class="classes"
                  :placeholder="placeholder" v-model="val"
                  :readonly="readonly" :disabled="disabled"></textarea>

        <input v-if="type=='button'" type="button"
               class="button button-small" :class="classes" :value="buttonLabel"
               :readonly="readonly" :disabled="disabled"/>
        <input v-if="type=='reset'" type="reset"
               class="button button-small" :class="classes" :value="buttonLabel"
               :readonly="readonly" :disabled="disabled"/>
        <input v-if="type=='submit'" type="submit"
               class="button button-small" :class="classes" :value="buttonLabel"
               :readonly="readonly" :disabled="disabled"/>

        <input v-if="type=='tel'" type="tel" :class="classes"
               :placeholder="placeholder" v-model.number="val"
               :readonly="readonly" :disabled="disabled"/>
        <input v-if="type=='url'" type="url" :class="classes"
               :placeholder="placeholder" v-model.number="val"
               :readonly="readonly" :disabled="disabled"/>
        <input v-if="type=='email'" type="email" :class="classes"
               :placeholder="placeholder" v-model.number="val"
               :readonly="readonly" :disabled="disabled"/>
        <input v-if="type=='number'" type="number" :class="classes"
               :placeholder="placeholder" v-model.number="val"
               :readonly="readonly" :disabled="disabled"/>

        <input v-if="type=='date'" type="date" :class="classes"
               :placeholder="placeholder" v-model.number="val"
               :readonly="readonly" :disabled="disabled"/>
        <input v-if="type=='time'" type="time" :class="classes"
               :placeholder="placeholder" v-model.number="val"
               :readonly="readonly" :disabled="disabled"/>
        <input v-if="type=='color'" type="color" :class="classes"
               :placeholder="placeholder" v-model.number="val"
               :readonly="readonly" :disabled="disabled"/>

        <Button type="clear" :icon="buttonIcon" :color="buttonColor" v-if="buttonIcon"></Button>
    </div>

</template>

<!--
//h4
input[type=text,password],
input[type=checkbox,radio],  -> Check, Radio
input[type=file], -> Upload
input[type=hidden], -> x
input[type=image], -> x
input[type=button,reset,submit],
textarea

//h5
input[type=search], -> Search
input[type=range], -> Slider
input[type=color], -> ColorPicker
input[type=time], -> TimePicker
input[type=date,month,week], -> DatePicker
input[type=datetime,datetime-local], -> DateTimePicker
input[type=tel,url,email,number],

//校验
max	        规定输入字段的最大值。
min	        规定输入字段的最小值。
maxlength	规定输入字段的最大字符数。
pattern     规定通过其检查输入值的正则表达式。
required	规定输入字段是必需的。
size	    规定输入字段的宽度（以字符计）。
step	    规定输入字段的合法数字间隔。
-->

<script>

    import { oneOf, insideIonic } from '../../util/check';

    const prefixCls = 'view-input';

    export default {
        name: 'Input',
        props: {
            value: {
                type: [Number, String],
                default: ''
            },
            label: [Number, String],
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
            labelColor: {
                validator (value) {
                    return insideIonic(value);
                }
            },
            buttonColor: {
                validator (value) {
                    return insideIonic(value);
                },
                default: 'dark',
            },
            buttonIcon: String,
            buttonLabel: [String, Number],
            labelIcon: String,
            type: {
                validator (value) {
                    return oneOf(value, ['text', 'password', 'textarea', 'button', 'reset', 'submit',
                        'tel', 'url', 'email', 'number',
                        'date', 'time', 'color']);
                },
                default: 'text',
            },
            displayStyle: {
                validator (value) {
                    return oneOf(value, ['floating-label', 'stacked-label'], true);
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
                        [`item-${this.displayStyle}`]: !!this.displayStyle,
                        [`item-input-inset`]: !!this.buttonIcon,
                        [`item-button-right`]: !!this.buttonIcon,
                        [`${this.itemClassName}`]: !!this.itemClassName
                    }
                ];
            },
            label_classes () {
                return [
                    {
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
