<template>

    <div class="view-list list" :class="classes" :title="title">
        <!--<div class="view-item-divider item item-divider"
             :class="item_divider_classes" v-html="dividerContent" v-if="dividerContent"></div>-->

        <slot name="header">
            <div class="view-item-header item item-divider" :class="item_header_classes"
                 v-if="headerContent || subHeaderContent">
                <Row class="view-list-header">
                    <Col v-html="headerContent"/>
                    <Col class="text-right" v-html="subHeaderContent"/>
                </Row>
            </div>
        </slot>

        <slot></slot>
    </div>

</template>

<script>

    import { oneOf, insideColor } from '../utils';

    export default {
        name: 'List',
        props: {
            type: {
                validator (value) {
                    return oneOf(value, ['list-outer', 'list-inset', 'list-card', 'list-borderless'], true);
                }
            },
            bgColor: {
                validator (value) {
                    return insideColor(value);
                }
            },
            title: [String, Number],
            className: String,
            /*dividerContent:  [String, Number],
            dividerColor: {
                validator (value) {
                    return insideColor(value);
                }
            },
            dividerBgColor: {
                validator (value) {
                    return insideColor(value);
                }
            },
            dividerClassName: String,*/
            headerContent: [Number, String],
            subHeaderContent: [Number, String],
            headerColor: {
                validator (value) {
                    return insideColor(value);
                }
            },
            headerBgColor: {
                validator (value) {
                    return insideColor(value);
                }
            },
            headerClassName: String,
        },
        computed: {
            classes () {
                return [
                    {
                        [`list-borderless`]: this.type=='list-borderless',
                        [`list-outer`]: this.type=='list-outer',
                        [`list-inset`]: this.type=='list-inset',
                        [`card`]: this.type=='list-card',
                        [`${this.bgColor}-bg`]: !!this.bgColor,
                        [`${this.className}`]: !!this.className
                    }
                ];
            },
            /*item_divider_classes () {
                return [
                    {
                        [`${this.dividerColor}-fg`]: !!this.dividerColor,
                        [`${this.dividerBgColor}-bg`]: !!this.dividerBgColor,
                        [`${this.dividerClassName}`]: !!this.dividerClassName
                    }
                ];
            },*/
            item_header_classes () {
                return [
                    {
                        [`${this.headerColor}-fg`]: !!this.headerColor,
                        [`${this.headerBgColor}-bg`]: !!this.headerBgColor,
                        [`${this.headerClassName}`]: !!this.headerClassName
                    }
                ];
            },
        }
    }

</script>
