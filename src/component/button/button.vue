<template>

    <a class="button" :class="classes">
        <slot></slot>
    </a>

</template>

<script>

    import { oneOf, insideIonic } from '../../util/check';

    const prefixCls = 'zv-button';
    const ionCls = 'icon';

    export default {
        name: 'Button',
        props: {
            color: {
                validator (value) {
                    return insideIonic(value);
                }
            },
            type: {
                validator (value) {
                    return oneOf(value, ['clear', 'block', 'full', 'outline']);
                }
            },
            size: {
                validator (value) {
                    return oneOf(value, ['small', 'large']);
                }
            },
            icon: [String, Number],
            className: String
        },
        computed: {
            classes () {
                return [
                    {
                        [`${prefixCls}`]: true,
                        [`button-${this.color}`]: !!this.color,
                        [`button-${this.type}`]: !!this.type,
                        [`button-${this.size}`]: !!this.size,
                        [`${ionCls}`]: this.icon && this.icon.indexOf('ion-')==0,
                        [`${this.icon}`]: !!this.icon,
                        [`${this.className}`]: !!this.className
                    }
                ];
            },
        }
    }
</script>
