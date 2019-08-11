<template>

    <div class="view-griditem" :class="classes" :style="styles">
        <slot></slot>
    </div>

</template>

<script>

    import { oneOf, insideIonic } from '../utils';

    export default {
        name: 'Col',
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
        data () {
            return {
                gutter: 0
            };
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
        mounted () {

        },
        beforeDestroy () {

        }
    }
</script>
