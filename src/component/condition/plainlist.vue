<template>
    <div class="view-condition">
        <Row>
            <Col :percent="25">
                <div class="view-condition-title">{{title}}</div>
            </Col>
            <Col :percent="75">
                <div class="view-condition-items">
                    <slot></slot>
                </div>
            </Col>
        </Row>
    </div>
</template>

<script>

    import Emitter from "../../mixins/emitter";

    export default {
        mixins: [Emitter],
        componentName: "Condition",
        data() {
            return {
                istipSelect: true
            }
        },
        props: {
            value: {},
            title: {
                type: [String, Number],
            },
            multiple: {
                type: Boolean,
                default: false
            }
        },
        mounted() {
            this.$on('handleOptionClick', this.handleOptionSelect);
        },
        methods: {
            handleOptionSelect(val) {
                if (this.multiple) {
                    let optionIndex = this.value.indexOf(val);
                    this.value.forEach((item, index) => {
                        if (item.id === val.id) {
                            optionIndex = index;
                        }
                    });

                    if (optionIndex < 0) {
                        this.value.push(val);
                    }
                    else {
                        this.value.splice(optionIndex, 1);
                    }
                }
                else {
                    if (val != this.value) {
                        this.$emit('input', val);
                    } else {
                        this.$emit('input', "");
                    }
                }
            },
        }
    }

</script>
