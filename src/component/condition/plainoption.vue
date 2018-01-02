<template>
    <span class="view-condition-item" @click="selectOptionClick" :class="{'active':itemSelected }">
        {{currentLabel}}
    </span>
</template>

<script>

    import Emitter from "../../mixins/emitter";

    export default{
        mixins: [Emitter],
        componentName: "ConditionItem",
        props: {
            value: {
                required: true
            },
            label: [String, Number],
        },
        computed: {
            currentLabel() {
                return this.label || ((typeof this.value === 'string' || typeof this.value === 'number') ? this.value : '');
            },
            parent() {
                let result = this.$parent;
                while (!result.istipSelect) {
                    result = result.$parent;
                }
                return result;
            },
            itemSelected() {
                if (!this.parent.multiple) {
                    return this.parent.value === this.value;
                }
                else {
                    let isSelected = false;
                    this.parent.value.forEach((item, index) => {
                        if (item.id === this.value.id) {
                            isSelected = true;
                        }
                    });
                    return isSelected;
                }
            },
        },
        methods: {
            selectOptionClick(){
                this.dispatch('Condition', 'handleOptionClick', this.value);
            }
        }
    }

</script>
