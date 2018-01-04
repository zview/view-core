<template>

    <div class="view-card card" :class="classes">

        <slot name="header">
            <div class="item item-divider" v-if="headerContent" v-html="headerContent" @click="on_header_clicked"></div>
        </slot>

        <div class="item item-text-wrap">
            <slot></slot>
        </div>

        <slot name="footer">
            <div class="item item-divider" v-if="footerContent" v-html="footerContent"></div>
        </slot>

    </div>

</template>

<script>

    import { oneOf, insideColor } from '../utils';

    export default {
        name: 'Card',
        props: {
            color: {
                validator (value) {
                    return insideColor(value);
                }
            },
            bgColor: {
                validator (value) {
                    return insideColor(value);
                },
                default: 'light',
            },
            headerContent: [Number, String],
            footerContent: [Number, String],
            onHeaderClick: {
                type: Function
            },
            className: String,
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
        },
        methods: {
            on_header_clicked() {
                if (this.onHeaderClick) this.onHeaderClick();
            }
        },
    }
</script>
