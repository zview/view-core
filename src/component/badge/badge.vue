<template>

    <span class="view-badge">
        <slot></slot>
        <i class="badge" :class="classes" v-html="text"></i>
    </span>


</template>

<script>

    import { oneOf, insideColor } from '../utils';

    export default {
        name: 'Badge',
        props: {
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
            text: String,
            className: String
        },
        computed: {
            classes () {
                return [
                    {
                        [`${this.color}-fg`]: !!this.color,
                        [`${this.bgColor}-bg`]: !!this.bgColor,
                        [`${this.className}`]: !!this.className
                    }
                ];
            },
        }
    }
</script>
