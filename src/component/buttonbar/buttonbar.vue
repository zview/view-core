<template>

    <div class="view-buttonbar button-bar" :class="classes">
        <Button v-for="(option,index) in options" @click.native="_on_cell_click(index, option.id)"
                :color="color" :type="get_type(index)" :key="index" :icon="option.icon">
            {{option.name}}
        </Button>
    </div>

</template>

<script>

    import { oneOf, insideIonic } from '../../util/check';

    export default {
        name: 'ButtonBar',
        props: {
            options: {
                type: Array,
                required: true
            },
            color: {
                validator (value) {
                    return insideIonic(value);
                },
            },
            className: String
        },
        data () {
            return {
                active_index: 0,
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
            get_type: function (index) {
//                console.log('get_type', index);
                let vm = this;

                return (vm.active_index == index)?'':'clear';
            },
            _on_cell_click: function (index, id) {
//                console.log('_on_cell_click', index, id);
                let vm = this;

                vm.active_index = index;
                vm.$emit('on-cell-click', index, id);
            }
        },
    }
</script>
