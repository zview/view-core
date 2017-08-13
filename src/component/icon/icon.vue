<template>

    <i :class="classes" aria-hidden="true"></i>

</template>

<script>

    const prefixCls = 'zv-icon';
    const faCls = 'fa';
    const ionCls = 'icon';

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
                        [`${ionCls}`]: this.icon.indexOf('ion-')==0,
                        [`${this.icon}`]: !!this.icon,
                        [`${this.className}`]: !!this.className
                    }
                ];
            },
        }
    }
</script>
