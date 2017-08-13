<template>

    <div :class="classes">
        <slot></slot>
    </div>

</template>

<script>

    import { oneOf } from '../../util/check';

    const prefixCls = 'zv-content';

    export default {
        name: 'Content',
        props: {
            hasHeader: Boolean,
            hasSubHeader: Boolean,
            hasFooter: Boolean,
            hasSubFooter: Boolean,
            scroll: Boolean,
            className: String
        },
        computed: {
            classes () {
                return [
                    {
                        [`${prefixCls}`]: true,
                        [`content`]: !this.scroll,
                        [`scroll-content`]: !!this.scroll,
                        [`has-header`]: !!this.hasHeader,
                        [`has-subheader`]: !!this.hasSubHeader,
                        [`has-footer`]: !!this.hasFooter,
                        [`has-subfooter`]: !!this.hasSubFooter,
                        [`${this.className}`]: !!this.className
                    }
                ];
            },
        }
    }

</script>
