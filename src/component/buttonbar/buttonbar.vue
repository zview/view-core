<template>

    <div class="view-buttonbar button-bar" :class="classes">
        <Button v-for="(option,index) in options" @click.native="_on_tab_click(index, option.id)"
                size="small" :theme="theme" :class="button_class(index)"
                :key="index" :icon="option.icon">
            {{option.name}}
        </Button>
    </div>

</template>

<script>

    import { oneOf, insideIonic } from '../check';

    export default {
        name: 'ButtonBar',
        props: {
            options: {
                type: Array,
                required: true
            },
            theme: {
                validator (value) {
                    return insideIonic(value);
                },
                default: 'positive'
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
                        [`${this.className}`]: !!this.className
                    }
                ];
            },
        },
        methods: {
            button_class(index) {
                let vm = this;
                let buttonClass = {};
                buttonClass['button button-small button-' + this.theme + ' button-outline'] = index !== this.active_index;
                buttonClass['button button-small button-' + this.theme] = index == this.active_index;
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
