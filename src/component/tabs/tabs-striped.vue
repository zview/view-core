<template>

    <div class="tabs-striped tabs-top tabs-icon-only" :class="classes">
        <div class="tabs">
            <a class="tab-item" v-for="(option, index) in options" :key="index"
               :class="{'active': value==option.id}">
                <Icon :icon="option.icon" v-if="option.icon"></Icon>
            </a>
        </div>
    </div>

</template>

<script>

    import { oneOf, insideIonic } from '../../util/check';

    const prefixCls = 'zv-tabs-striped';

    export default {
        name: 'TabsStriped',
        props: {
            options: {
                type: Array,
                required: true
            },
            value: {
                type: [Number, String],
            },
            color: {
                validator (value) {
                    return insideIonic(value);
                }
            },
            className: String
        },
        mounted: function() {
            console.log('mounted');
        },
        computed: {
            classes () {
                return [
                    {
                        [`${prefixCls}`]: true,
                        [`tabs-${this.color}`]: !!this.color,
                        [`${this.className}`]: !!this.className
                    }
                ];
            },
        }
    }
</script>
