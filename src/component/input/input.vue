<template>

    <div>
        <input v-if="type=='text'" type="text" :class="classes" :placeholder="placeholder" v-model="val"/>
        <textarea v-if="type=='textarea'" :class="classes" :placeholder="placeholder" v-model="val"></textarea>
    </div>

</template>

<!--
input[type=color],
input[type=date],
input[type=datetime-local],
input[type=datetime],
input[type=email],
input[type=month],
input[type=number],
input[type=password],
input[type=search],
input[type=tel],
input[type=text],
input[type=time],
input[type=url],
input[type=week],
textarea

<input v-model="sth" />
<input v-bind:value="sth" v-on:input="sth = $event.target.value" />
-->

<script>

    import { oneOf, insideIonic } from '../../util/check';

    const prefixCls = 'zv-input';

    export default {
        name: 'Input',
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
            type: {
                validator (value) {
                    return oneOf(value, ['text', 'tel', 'email', 'number', 'hidden', 'password', 'textarea']);
                },
                default: 'text',
            },
            placeholder: [Number, String],
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
