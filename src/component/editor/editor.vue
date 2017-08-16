<template>

    <div class="view-editor" :class="classes">
        <div class="view-editor-toolbar">
            <ButtonBar color="balanced" :options="options" @on-cell-click="_on_cell_click"></ButtonBar>
        </div>
        <div class="view-editor-content" contenteditable="true" v-html="value" ref="ec">
        </div>
    </div>

</template>

<script>

    import { oneOf, insideIonic } from '../../util/check';

    export default {
        name: 'Editor',
        props: {
            value: {
                type: [Number, String],
                required: true
            },
            color: {
                validator (value) {
                    return insideIonic(value);
                }
            },
            bgColor: {
                validator (value) {
                    return insideIonic(value);
                }
            },
            className: String
        },
        data () {
            return {
                options: [
                    {'id': 1, 'name' : '粗体'},
                    {'id': 2, 'name' : '斜体'},
                ],
            }
        },
        mounted: function() {
            console.log('mounted');
        },
        computed: {
            classes () {
                return [
                    {
                        [`${this.color}`]: !!this.color,
                        [`${this.bgColor}-bg`]: !!this.bgColor,
                        [`${this.className}`]: !!this.className
                    }
                ];
            },
        },
        methods: {
            _on_cell_click: function (index, id) {
                console.log('_on_cell_click', index, id);
                let vm = this;

                switch(id)
                {
                    case 1:
                        document.execCommand('bold');
                        break;
                    case 2:
                        document.execCommand('italic');
                        break;
                }

                vm.$refs['ec'].focus();
            }

        },
    }
</script>
