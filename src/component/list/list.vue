<template>

    <div class="list" :class="classes">
        <slot></slot>
    </div>

</template>

<script>

    import { oneOf, insideIonic } from '../../util/check';

    const prefixCls = 'zv-list';

    export default {
        name: 'List',
        props: {
            type: {
                validator (value) {
                    return oneOf(value, ['list-borderless', 'list-inset', 'card'], true);
                }
            },
            className: String
        },
        computed: {
            classes () {
                return [
                    {
                        [`${prefixCls}`]: true,
                        [`${this.type}`]: !!this.type,
                        [`${this.className}`]: !!this.className
                    }
                ];
            },
        }
    }

</script>
