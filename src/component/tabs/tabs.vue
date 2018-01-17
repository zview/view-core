<template>

    <div>
        <div class="tabs">
            <a v-for="(tabItem, index) in tabItems" :key="index"
               class="tab-item"
               :class="{'active': activeIndex == index}"
               @click="tabClicked(index)">
                {{tabItem.text}}
                <!--<Icon :icon="tabItem.icon" v-if="tabItem.icon"></Icon>-->
            </a>
        </div>
    </div>

</template>

<script>

    import { oneOf, insideIonic } from '../utils';

    export default {
        name: 'TabsStriped',
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
            onTabClick: {
                type: Function
            },
            className: String
        },
        mounted: function() {
            console.log('mounted');
            let className = `view-tabs tabs-striped tabs-${ this.position } tabs-background-${ this.bgColor } tabs-color-${ this.tabColor }`;
            this.$el.className = className;
        },
        computed: {
            activeIndex: function () {
                return this.tabIndex;
            },
        },
        methods: {
            tabClicked(index) {
                if (this.onTabClick) this.onTabClick(index);
            }
        },
    }
</script>

