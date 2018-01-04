<template>

    <div class="view-panel" :class="classes">

        <slot name="header">
            <Row class="view-panel-header" v-if="headerContent || subHeaderContent" @click="on_header_clicked">
                <Col v-html="headerContent"/>
                <Col class="text-right" v-html="subHeaderContent"/>
            </Row>
        </slot>

        <div class="view-panel-content">
            <slot></slot>
        </div>

        <slot name="footer">
            <Row class="view-panel-footer" v-if="footerContent || subFooterContent">
                <Col v-html="footerContent"/>
                <Col class="text-right" v-html="subFooterContent"/>
            </Row>
        </slot>

    </div>

</template>

<script>

    import { oneOf, insideColor } from '../utils';

    export default {
        name: 'Panel',
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
            type: {
                validator (value) {
                    return oneOf(value, ['outer', 'inset', 'card', 'paddingless'], true);
                },
                default: 'outer',
            },
            headerContent: [Number, String],
            footerContent: [Number, String],
            subHeaderContent: [Number, String],
            subFooterContent: [Number, String],
            onHeaderClick: {
                type: Function
            },
            className: String
        },
        computed: {
            classes () {
                return [
                    {
                        [`panel-outer`]: this.type=='outer',
                        [`panel-inset`]: this.type=='inset',
                        [`panel-card`]: this.type=='card',
                        [`panel-paddingless`]: this.type=='paddingless',
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
