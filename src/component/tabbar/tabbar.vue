<template>

    <div class="view-tabbar tabs" :class="classes">
        <a class="tab-item" v-for="(option, index) in options" :key="index"
           :class="{'has-badge': option.badge && option.badge!='', 'active': value==option.id}">
            <i class="badge badge-assertive" v-if="option.badge && option.badge!=''">{{option.badge}}</i>
            <Icon :icon="option.icon" v-if="option.icon"></Icon>
            {{option.text}}
        </a>
    </div>

</template>

<script>

    import { oneOf, insideIonic } from '../../util/check';

    export default {
        name: 'Tabbar',
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
            isIconOnly: {
                type: [Boolean, String],
                defalut: false,
            },
            iconAlign: {
                validator (value) {
                    return oneOf(value, ['left', 'top'], true);
                },
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
                        [`tabs-icon-only`]: !!this.isIconOnly,
                        [`tabs-icon-top`]: !!this.iconAlign && this.iconAlign=='top',
                        [`tabs-icon-left`]: !!this.iconAlign && this.iconAlign=='left',
                        [`tabs-${this.color}`]: !!this.color,
                        [`${this.className}`]: !!this.className
                    }
                ];
            },
        }
    }
</script>
