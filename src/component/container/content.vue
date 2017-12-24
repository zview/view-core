<template>

    <div class="view-content" :class="classes">
        <slot></slot>
    </div>

</template>

<script>

    import { oneOf } from '../check';

    export default {
        name: 'Content',
        props: {
            hasHeader: Boolean,
            hasSubHeader: Boolean,
            hasFooter: Boolean,
            hasSubFooter: Boolean,
            hasTabs: Boolean,
            hasTabsTop: Boolean,
            scroll: Boolean,
            className: String
        },
        computed: {
            classes () {
                return [
                    {
                        [`content`]: !this.scroll,
                        [`scroll-content`]: !!this.scroll,
                        [`has-header`]: !!this.hasHeader,
                        [`has-subheader`]: !!this.hasSubHeader,
                        [`has-footer`]: !!this.hasFooter,
                        [`has-subfooter`]: !!this.hasSubFooter,
                        [`has-tabs`]: !!this.hasTabs,
                        [`has-tabs-top`]: !!this.hasTabsTop,
                        [`${this.className}`]: !!this.className
                    }
                ];
            },
        }
    }

</script>
