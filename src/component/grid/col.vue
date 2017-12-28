<template>

    <div class="view-col col" :class="classes" :style="styles">
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
            align: {
                validator (value) {
                    return oneOf(value, ['top', 'center', 'bottom'], true);
                }
            },
            offset: [Number, String],
            className: String,
            xs: [Number, Object],
            sm: [Number, Object],
            md: [Number, Object],
            lg: [Number, Object]
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
                        [`col-offset-${this.offset}`]: this.offset,
                        [`col-${this.align}`]: !!this.align,
                        [`${this.color}`]: !!this.color,
                        [`${this.bgColor}-bg`]: !!this.bgColor,
                        [`${this.className}`]: !!this.className
                    }
                ];
            },
            styles () {
                let style = {};
                if (this.gutter !== 0) {
                    style = {
                        marginLeft: this.gutter / 2 + 'px',
                        marginRight: this.gutter / 2 + 'px'
                    };
                }

                return style;
            }
        },
        methods: {
            updateGutter () {
                this.$parent.updateGutter(this.$parent.gutter);
            }
        },
        mounted () {
            this.updateGutter();
        },
        beforeDestroy () {
            this.updateGutter();
        }
    }
</script>
