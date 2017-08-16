<template>

    <form class="view-form list" :class="classes" :title="title">
        <slot></slot>
    </form>

</template>

<script>

    import { oneOf, insideIonic } from '../../util/check';

    export default {
        name: 'List',
        props: {
            type: {
                validator (value) {
                    return oneOf(value, ['list-borderless', 'list-inset', 'card'], true);
                }
            },
            title: [String, Number],
            className: String
        },
        computed: {
            classes () {
                return [
                    {
                        [`${this.type}`]: !!this.type,
                        [`${this.className}`]: !!this.className
                    }
                ];
            },
        }
    }

</script>
