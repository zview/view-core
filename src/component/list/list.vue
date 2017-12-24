<template>

    <div class="view-list list" :class="classes" :title="title">
        <div class="view-item-divider item item-divider item-borderless"
             :class="item_divider_classes" v-html="dividerContent" v-if="dividerContent"></div>
        <slot></slot>
    </div>

</template>

<script>

    import { oneOf, insideColor } from '../check';

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
            dividerContent:  [String, Number],
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
            dividerClassName: String
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
            item_divider_classes () {
                return [
                    {
                        [`${this.dividerColor}-fg`]: !!this.dividerColor,
                        [`${this.dividerBgColor}-bg`]: !!this.dividerBgColor,
                        [`${this.dividerClassName}`]: !!this.dividerClassName
                    }
                ];
            },
        }
    }

</script>
