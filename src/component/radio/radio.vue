<template>

    <div class="list" :class="classes">
        <div class="item" v-for="(option, index) in options" :key="index">
            <input type="radio" :id="index" :value="option.value" v-model="val">
            <label :for="index">{{option.name}}</label>
        </div>
    </div>

</template>

<script>

    import { oneOf, insideIonic } from '../../util/check';

    const prefixCls = 'zv-radio';

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
