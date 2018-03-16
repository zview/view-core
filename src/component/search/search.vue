<template>

    <div class="view-search-item bar bar-header item-input-inset" :class="item_classes">
        <slot name="left"></slot>
        <label class="view-search-label item-input-wrapper" :class="label_classes">
            <Icon icon="ion-ios-search" class-name="placeholder-icon"></Icon>
            <form :id="formId" >
                <input type="text" ref="input" :value="value"
                       @input="updateValue($event.target.value)"
                       :placeholder="placeholder" class="view-search" :class="classes"
                       :readonly="readonly" :disabled="disabled"/>
                <!--type="search"-->
            </form>
        </label>
        <slot name="right">
            <Button size="small" type="clear" bg-color="positive" @click='cancel()' v-if="!!onCancel">
                {{cancelText}}
            </Button>
        </slot>
    </div>

</template>

<script>

    import { oneOf, insideIonic } from '../utils';

    export default {
        name: 'Search',
        props: {
            value: {
                type: [Number, String],
                required: true
            },
            cancelText: {
                type: String,
                default: 'Cancel'
            },
            onSearch: Function,
            onCancel: Function,
            disabled: [Boolean, String],
            readonly: [Boolean, String],
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
            placeholder: [Number, String],
            itemClassName: String,
            labelClassName: String,
            className: String
        },
        data() {
            return {
                formId: 'view-search-' + Math.random().toString(36).substring(3, 8)
            }
        },
        mounted: function() {
            //
            document.getElementById(this.formId).onsubmit = this.search
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
            item_classes () {
                return [
                    {
                        [`${this.itemClassName}`]: !!this.itemClassName
                    }
                ];
            },
            label_classes () {
                return [
                    {
                        [`${this.labelClassName}`]: !!this.labelClassName
                    }
                ];
            },
            /*val: {
                get:function() {
                    return this.value;
                },
                set:function(val) {
                    this.$emit('input', val);
                }
            },*/
        },
        methods: {
            search(e) {
                e.preventDefault();
                let search = document.querySelector('#' + this.formId + ' > [type=text]'); //[type=search]
                search.blur();
                if (this.onSearch) this.onSearch(search.value);
            },

            cancel() {
                if (this.onCancel) this.onCancel();
            },

            updateValue(value) {
                this.$refs.input.value = value;
                this.$emit('input', value);
            }
        },

    }
</script>
