<template>

    <div class="view-header bar bar-header" :class="classes">
        <!-- left button -->
        <div class="buttons">
            <slot name="left"></slot>
        </div>

        <!-- title -->
        <h1 class="title" :class="title_classes">
            <slot name="title"></slot>
        </h1>

        <!-- right button -->
        <div class="buttons">
            <slot name="right"></slot>
        </div>
    </div>

</template>

<script>

    import { oneOf, insideIonic } from '../utils';

    export default {
        name: 'Header',
        props: {
            color: {
                validator (value) {
                    return insideIonic(value);
                },
                default: 'light',
            },
            titleAlign: {
                type: String,
                validator: function (value) {
                    return oneOf(value, ['left', 'right', 'center'], true);
                },
                default: 'center',
            },
            title: String,
            className: String
        },
        computed: {
            classes () {
                return [
                    {
                        [`bar-${this.color}`]: !!this.color,
                        [`${this.className}`]: !!this.className
                    }
                ];
            },
            title_classes () {
                return [
                    {
                        [`title-${this.titleAlign}`]: !!this.titleAlign,
                    }
                ];
            },
        }
    }

</script>

