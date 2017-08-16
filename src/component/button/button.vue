<template>

    <a class="view-button button" :class="classes">
        <slot></slot>
    </a>

</template>

<script>

    import { oneOf, insideIonic } from '../../util/check';

    const faCls = 'fa';
    const iconCls = 'icon';
    const iconRightCls = 'icon-right';

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
                    return oneOf(value, ['clear', 'block', 'full', 'outline'], true);
                }
            },
            size: {
                validator (value) {
                    return oneOf(value, ['small', 'large'], true);
                }
            },
            iconAlign: {
                validator (value) {
                    return oneOf(value, ['left', 'right'], true);
                },
                default: 'left',
            },
            icon: [String, Number],
            className: String
        },
        computed: {
            classes () {
                return [
                    {
                        [`button-${this.color}`]: !!this.color,
                        [`button-${this.type}`]: !!this.type,
                        [`button-${this.size}`]: !!this.size,
                        [`${faCls}`]: this.icon && this.icon.indexOf('fa-')==0,
                        [`${iconCls}`]: this.icon && this.icon.indexOf('ion-')==0,
                        [`${this.icon}`]: !!this.icon,
                        [`${iconRightCls}`]: this.iconAlign && this.iconAlign=='right',
                        [`${this.className}`]: !!this.className
                    }
                ];
            },
        }
    }
</script>
