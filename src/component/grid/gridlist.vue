<template>

    <div class="view-gridlist" :class="classes" :style="styles">
        <slot></slot>
    </div>

</template>

<script>

    import { oneOf, insideIonic } from '../utils';

    export default {
        name: 'GridList',
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
            styles () {
                let style = {};
                return style;
            }
        },
        methods: {
        },
        watch: {
        }
    }
</script>
