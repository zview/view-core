<template>

    <form class="view-form list" :class="classes" :title="title">
        <slot></slot>
    </form>

</template>

<script>

    import { oneOf, insideIonic } from '../utils';

    export default {
        name: 'Form',
        props: {
            type: {
                validator (value) {
                    return oneOf(value, ['list-borderless', 'list-inset', 'card'], true);
                }
            },
            title: [String, Number],
            className: String
        },
        mounted () {
            let vm = this;
            vm.$on('on-form-item-change', vm.onFieldChange);

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
        },
        methods: {
            onFieldChange: function () {

            },
        },
    }

</script>
