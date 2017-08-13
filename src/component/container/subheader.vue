<template>

    <div class="bar bar-subheader" :class="classes">
        <h1 class="title" v-if="title">{{title}}</h1>
        <slot></slot>
    </div>

</template>

<script>

    import { oneOf, insideIonic } from '../../util/check';

    const prefixCls = 'zv-subheader';

    export default {
        name: 'SubHeader',
        props: {
            color: {
                validator (value) {
                    return insideIonic(value);
                }
            },
            title: String,
            className: String
        },
        computed: {
            classes () {
                return [
                    {
                        [`${prefixCls}`]: true,
                        [`bar-${this.color}`]: !!this.color,
                        [`${this.className}`]: !!this.className
                    }
                ];
            },
        }
    }

</script>
