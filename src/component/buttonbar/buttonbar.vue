<template>

    <div class="view-buttonbar button-bar" :class="classes">
        <Button v-for="(option,index) in options" @click.native="_on_tab_click(index, option.id)"
                :size="size" :theme="theme" :class="button_class(index)"
                :key="index" :icon="option.icon">
            {{option.name}}
        </Button>
    </div>

</template>

<script>

    import { oneOf, insideIonic } from '../utils';

    export default {
        name: 'ButtonBar',
        props: {
            options: {
                type: Array,
                required: true
            },
            theme: {
                type: String,
                validator (value) {
                    return insideIonic(value);
                },
                default: 'positive'
            },
            type: {
                type: String,
                validator (value) {
                    return oneOf(value, ['buttonbar-btn', 'buttonbar-tabs'], true);
                },
                default: 'buttonbar-btn'
            },
            size: {
                type: String,
                validator (value) {
                    return oneOf(value, ['small', 'large', 'normal'], true);
                },
                default: 'small'
            },
            tabIndex: {
                type: Number,
                required: false,
                default: 0,
                validator(value) {
                    return value >= 0
                }
            },
            onTabSelected: Function,
            className: String
        },
        data () {
            return {
                active_index: this.tabIndex,
            }
        },
        mounted: function() {
            console.log('mounted');
        },
        computed: {
            classes () {
                return [
                    {
                        [`${this.type}`]: !!this.type,
                        [`${this.className}`]: !!this.className
                    }
                ];
            },
        },
        methods: {
            button_class(index) {
                let vm = this;
                let buttonClass = {};
                buttonClass['buttonbar-' + this.theme + ' button-outline'] = index !== this.active_index;
                buttonClass['buttonbar-' + this.theme] = index == this.active_index;
                return buttonClass;
            },
            _on_tab_click: function (index, id) {
                let vm = this;

                vm.active_index = index;
                vm.$emit('on-tab-click', index, id);

                if (vm.onTabSelected) vm.onTabSelected(index)
            }
        },
    }
</script>
