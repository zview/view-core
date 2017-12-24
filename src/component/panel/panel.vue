<template>

    <div class="view-panel padding" :class="classes">
        <slot></slot>
    </div>


</template>

<script>

    import { oneOf, insideColor } from '../check';

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
        }
    }
</script>
