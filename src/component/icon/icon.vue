<template>

    <i :class="classes" aria-hidden="true"></i>

</template>

<script>

    import { oneOf, insideIonic } from '../../util/check';

    const prefixCls = 'zv-icon';
    const faCls = 'fa';
    const iconCls = 'icon';

    export default {
        name: 'Icon',
        props: {
            icon: [String, Number],
            className: String
        },
        computed: {
            classes () {
                return [
                    {
                        [`${prefixCls}`]: true,
                        [`${faCls}`]: this.icon.indexOf('fa-')==0,
                        [`${iconCls}`]: this.icon.indexOf('ion-')==0,
                        [`${this.icon}`]: !!this.icon,
                        [`${this.className}`]: !!this.className
                    }
                ];
            },
        }
    }
</script>
