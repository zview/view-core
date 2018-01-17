<template>

    <div>
        <div class="tabs" :class="classes">
            <div class="tab-item">
                <slot></slot>
            </div>
        </div>
    </div>

</template>

<script>

    import { oneOf, insideIonic } from '../utils';

    export default {
        name: 'ActionBar',
        props: {
            position: {
                type: String,
                validator (value) {
                    return oneOf(value, ['bottom', 'top'], true);
                },
                default: 'top'
            },
            bgColor: {
                type: String,
                default: 'light',
                validator (value) {
                    return insideIonic(value);
                }
            },
            tabColor: {
                type: String,
                default: 'positive',
                validator (value) {
                    return insideIonic(value);
                }
            },
            hasNavbar: Boolean,
            hasTabbar: Boolean,
            className: String
        },
        mounted: function() {
            console.log('mounted');
            let className = `view-actionbar tabs-${ this.position } tabs-background-${ this.bgColor } tabs-color-${ this.tabColor }`;
            this.$el.className = className;
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
        },
        methods: {

        },
    }
</script>

