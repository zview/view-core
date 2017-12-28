<template>

    <div class="view-input-wrapper" :class="wrapper_classes">

        <div class="view-input-item item item-input" :class="item_classes">

            <span class="view-input-label input-label" :class="label_classes" v-if="label || labelIcon">
                <Icon :icon="labelIcon" v-if="labelIcon"></Icon>
                {{label}}
            </span>

            <input v-if="type=='text'" type="text" :class="classes"
                   ref="input" :value="value"
                   @compositionstart="compositionStart($event)"
                   @compositionend="compositionEnd($event)"
                   @input="input($event)"
                   @focus="focus($event)"
                   @blur="blur($event)"
                   :placeholder="placeholder" :readonly="readonly" :disabled="disabled"/>
            <input v-if="type=='password'" type="password" :class="classes"
                   ref="input" :value="value"
                   @input="updateValue($event.target.value)"
                   @focus="focus($event)"
                   @blur="blur($event)"
                   :placeholder="placeholder" :readonly="readonly" :disabled="disabled"/>

            <textarea v-if="type=='textarea'" :class="classes"
                      ref="input" :value="value"
                      @input="updateValue($event.target.value)"
                      @focus="focus($event)"
                      @blur="blur($event)"
                      :placeholder="placeholder" :readonly="readonly" :disabled="disabled"></textarea>

            <input v-if="type=='button'" type="button"
                   class="button button-small" :class="classes" :value="inputLabel"
                   :readonly="readonly" :disabled="disabled"/>
            <input v-if="type=='reset'" type="reset"
                   class="button button-small" :class="classes" :value="inputLabel"
                   :readonly="readonly" :disabled="disabled"/>
            <input v-if="type=='submit'" type="submit"
                   class="button button-small" :class="classes" :value="inputLabel"
                   :readonly="readonly" :disabled="disabled"/>

            <input v-if="type=='tel'" type="tel" :class="classes"
                   ref="input" :value="value"
                   @input="updateValue($event.target.value)"
                   @focus="focus($event)"
                   @blur="blur($event)"
                   :placeholder="placeholder" :readonly="readonly" :disabled="disabled"/>
            <input v-if="type=='url'" type="url" :class="classes"
                   ref="input" :value="value"
                   @input="updateValue($event.target.value)"
                   @focus="focus($event)"
                   @blur="blur($event)"
                   :placeholder="placeholder" :readonly="readonly" :disabled="disabled"/>
            <input v-if="type=='email'" type="email" :class="classes"
                   ref="input" :value="value"
                   @input="updateValue($event.target.value)"
                   @focus="focus($event)"
                   @blur="blur($event)"
                   :placeholder="placeholder" :readonly="readonly" :disabled="disabled"/>
            <input v-if="type=='number'" type="number" :class="classes"
                   ref="input" :value="value"
                   @input="updateValue($event.target.value)"
                   @focus="focus($event)"
                   @blur="blur($event)"
                   :placeholder="placeholder" :readonly="readonly" :disabled="disabled"/>

            <input v-if="type=='date'" type="date" :class="classes"
                   ref="input" :value="value"
                   @input="updateValue($event.target.value)"
                   @focus="focus($event)"
                   @blur="blur($event)"
                   :placeholder="placeholder" :readonly="readonly" :disabled="disabled"/>
            <input v-if="type=='time'" type="time" :class="classes"
                   ref="input" :value="value"
                   @input="updateValue($event.target.value)"
                   @focus="focus($event)"
                   @blur="blur($event)"
                   :placeholder="placeholder" :readonly="readonly" :disabled="disabled"/>
            <input v-if="type=='color'" type="color" :class="classes"
                   ref="input" :value="value"
                   @input="updateValue($event.target.value)"
                   @focus="focus($event)"
                   @blur="blur($event)"
                   :placeholder="placeholder" :readonly="readonly" :disabled="disabled"/>

            <slot name="right">
                <Button type="clear" size="small" :icon="buttonIcon" :color="buttonColor"
                        v-if="buttonIcon || buttonLabel">
                    {{buttonLabel}}
                </Button>
            </slot>

        </div>

        <span class="input-clear" :class="clear_classes" @click="clear(value)"></span>

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

    import { oneOf, insideIonic,insideColor } from '../utils';

    const prefixCls = 'view-input';

    let lock = false;

    const is_ios = /iPad|iPhone|iPod/.test(navigator.userAgent);

    export default {
        name: 'Input',
        props: {
            value: {
                type: [Number, String],
                default: ''
            },
            label: [Number, String],
            labelIcon: String,
            disabled: [Boolean, String],
            readonly: [Boolean, String],
            showClear: {
                type: [Boolean, String],
                default: true,
            },
            color: {
                validator (value) {
                    return insideColor(value);
                }
            },
            bgColor: {
                validator (value) {
                    return insideColor(value);
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
            inputLabel: [String, Number],
            buttonIcon: String,
            buttonLabel: [String, Number],
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
        data() {
            return {
                showClearButton: false,
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
            wrapper_classes () {
                return [
                    {
                        [`has-floating-label`]: this.displayStyle=='floating-label',
                    }
                ];
            },
            item_classes () {
                return [
                    {
                        [`item-${this.displayStyle}`]: !!this.displayStyle,
//                        [`item-input-inset`]: !!this.buttonIcon,
                        [`item-button-right`]: !!this.buttonIcon,
                        [`${this.itemClassName}`]: !!this.itemClassName
                    }
                ];
            },
            label_classes () {
                return [
                    {
                        [`has-input`]: this.displayStyle=='floating-label' && !!this.value,
                        [`${this.labelColor}`]: !!this.labelColor,
                        [`${this.labelClassName}`]: !!this.labelClassName
                    }
                ];
            },
            clear_classes () {
                return [
                    {
                        [`active`]: !!this.showClearButton && this.showClear,
                    }
                ];
            },
            /*val: {
                get:function() {
                    return this.value;
                },
                set:function(val) {
                    this.$emit('input', val);
                }
            },*/
        },


        methods: {
            clear(value) {
                this.$refs.input.blur();
                this.$refs.input.value = '';
                this.$emit('input', '');
                this.showClearButton = false;
                this.$refs.input.focus();
            },

            updateValue(value) {
                this.$refs.input.value = value;
                this.$emit('input', value);
            },

            input($event) {
                if (lock) {
                    $event.preventDefault();
                    return;
                }

                let value = $event.target.value;
                this.$refs.input.value = value;
                this.$emit('input', value);
            },

            compositionStart($event) {
                lock = true;
            },

            compositionEnd($event) {
                lock = false;
                this.$emit('input', this.$refs.input.value);
            },

            focus($event) {
//                if (is_ios) this.showClearButton = !!this.$refs.input.value;
            },

            blur($event) {
//                if (is_ios) this.showClearButton = false;
            }
        },

        watch: {
            value: function (newValue) {
                this.showClearButton = !!newValue
            }
        },
    }
</script>
