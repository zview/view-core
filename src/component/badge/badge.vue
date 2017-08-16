<template>

    <span class="view-badge">
        <slot></slot>
        <i class="badge" :class="classes" v-html="text"></i>
    </span>


</template>

<script>

    import { oneOf, insideIonic } from '../../util/check';

    export default {
        name: 'Badge',
        props: {
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
            text: String,
            className: String
        },
        computed: {
            classes () {
                return [
                    {
                        [`${this.color}`]: !!this.color,
                        [`${this.bgColor}-bg`]: !!this.bgColor,
                        [`${this.className}`]: !!this.className
                    }
                ];
            },
        }
    }
</script>
