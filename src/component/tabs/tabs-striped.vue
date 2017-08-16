<template>

    <div class="view-tabs-striped tabs-striped tabs-top tabs-icon-only" :class="classes">
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
                        [`tabs-${this.color}`]: !!this.color,
                        [`${this.className}`]: !!this.className
                    }
                ];
            },
        }
    }
</script>
