<template>
    <div class="view-dropdown-condition">
        <div class="dropdown-toggle" @click="on_list_toggle">
            <span>{{lbl}}</span>
            <i class="icon" :class="{'ion-arrow-down-b': !isShow, 'ion-arrow-up-b': isShow}"></i>
        </div>
        <transition name="fade">
            <div class="dropdown-menu" v-if="isShow">
                <ul>
                    <li v-for="(item,index) in options" :key="index"
                        @click="on_item_click(index, item.id, item.label)"
                        :class="{'active': val===item.id}">
                        {{item.label}}
                    </li>
                </ul>
            </div>
        </transition>
    </div>
</template>

<script>

    export default {
        componentName: "DropdownCondition",
        data() {
            return {
                isShow: false,
                lbl: this.title,
            }
        },
        props: {
            value: {},
            title: {
                type: [String, Number],
            },
            options: {
                type: Array,
                require: true,
            },
            onItemClick: Function,
        },
        mounted() {
            //

        },
        computed: {
            val: {
                get:function() {
                    return this.value;
                },
                set:function(val) {
                    this.$emit('input', val);
                }
            },
        },
        methods: {
            on_list_toggle: function () {
                this.isShow = !this.isShow;
            },
            on_item_click: function(index, id, label) {
                this.val = id;
                this.lbl = label;
                this.isShow = false;
                if(this.onItemClick) this.onItemClick(id, label);
            },
        }
    }

</script>
