<template>

    <div class="view-page page" :class="classes">
        <div class="view-page-content page-content" :class="content_classes" v-if="!noContent">
            <slot></slot>
        </div>
        <template v-else>
            <slot></slot>
        </template>
    </div>

</template>

<script>

    import { oneOf, insideIonic } from '../utils';

    export default {
        name: 'Page',
        props: {
            hasNavbar: Boolean,
            hasTabbar: Boolean,
            isPadding: Boolean,
            noContent: {
                type: Boolean,
                default: false
            },
            className: String
        },
        computed: {
            classes () {
                return [
                    {
                        [`has-navbar`]: !!this.hasNavbar,
                        [`has-tabbar`]: !!this.hasTabbar,
                        [`${this.className}`]: !!this.className
                    }
                ];
            },
            content_classes () {
                return [
                    {
                        [`padding-top`]: this.hasNavbar && this.isPadding,
                        [`padding-bottom`]: this.hasTabbar && this.isPadding,
                    }
                ];
            },
        }
    }

</script>
