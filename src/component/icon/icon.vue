<template>

    <i class="view-icon" :class="classes" aria-hidden="true"></i>

</template>

<script>

    import { oneOf, insideIonic } from '../check';

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
