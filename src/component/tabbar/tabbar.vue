<template>

    <div class="view-tabbar tabs" :class="classes">
        <a class="tab-item" v-for="(item, index) in titems" :key="index"
           :class="{'has-badge': item.badge && item.badge>0, 'active': tindex == index}"
           @click="tabClicked(index)">
            <i class="badge badge-assertive" v-if="item.badge && item.badge>0">{{item.badge}}</i>
            <Icon :icon="item.icon" v-if="item.icon"></Icon>
            {{item.text}}
        </a>
    </div>

</template>

<script>

    import { oneOf, insideIonic } from '../utils';

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
        data () {
            return {
                titems: this.tabItems,
                tindex: this.tabIndex,
            }
        },
        mounted: function() {
            console.log('mounted');
        },
        watch: {
            tabIndex: function (val) {
                console.log('watch tabIndex', val);
                let vm = this;
                vm.tindex = val;
            }
        },
        computed: {
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
                let vm = this;
                if (vm.onTabClick) vm.onTabClick(index);
            },
        },
    }
</script>
