<template>

    <div class="view-tabs tabs" :class="classes">
        <a class="tab-item" v-for="(tabItem, index) in tabItems" :key="index"
           :class="{'has-badge': tabItem.badge && tabItem.badge!='', 'active': activeIndex == index}"
           @click="tabClicked(index)">
            <i class="badge badge-assertive" v-if="tabItem.badge && tabItem.badge!=''">{{tabItem.badge}}</i>
            <Icon :icon="tabItem.icon" v-if="tabItem.icon"></Icon>
            {{tabItem.text}}
        </a>
    </div>

</template>

<script>

    import { oneOf, insideIonic } from '../check';

    export default {
        name: 'Tabbar',
        props: {
            tabItems: {
                type: Array,
                required: true
            },
            tabIndex: {
                type: Number,
                required: true,
                validator(value) {
                    return value >= 0
                }
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
            isTop: {
                type: [Boolean, String],
                defalut: false,
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
            onTabClick: {
                type: Function
            },
            className: String
        },
        mounted: function() {
            console.log('mounted');
        },
        computed: {
            activeIndex: function () {
                return this.tabIndex;
            },
            classes () {
                return [
                    {
                        [`tabs-top`]: !!this.isTop,
                        [`tabs-icon-only`]: !!this.isIconOnly,
                        [`tabs-icon-top`]: !!this.iconAlign && this.iconAlign=='top',
                        [`tabs-icon-left`]: !!this.iconAlign && this.iconAlign=='left',
                        [`tabs-${this.bgColor}`]: !!this.bgColor,
                        [`${this.tabColor}-fg`]: !!this.tabColor,
                        [`${this.className}`]: !!this.className
                    }
                ];
            },
        },
        methods: {
            tabClicked(index) {
                if (this.onTabClick) this.onTabClick(index);
            }
        },
    }
</script>
