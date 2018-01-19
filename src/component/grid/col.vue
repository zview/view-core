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
            valign: {
                validator (value) {
                    return oneOf(value, ['top', 'center', 'bottom'], true);
                }
            },
            percent: [Number, String], //10 20 25 33 50 67 75 80 90
            offset: [Number, String], //10 20 25 33 50 67 75 80 90
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
                        [`col-${this.percent}`]: !!this.percent,
                        [`col-offset-${this.offset}`]: !!this.offset,
                        [`col-${this.valign}`]: !!this.valign,
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
