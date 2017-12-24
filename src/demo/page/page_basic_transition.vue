<template>
    <div class="page-font">

        <span @click="addItem">新增</span> <span @click="reset">重置</span>

        <List>
            <Select :options="options" v-model="effect"></Select>

            <transition-group :name="effect">
                <Item v-for="(item, i) in items" :key="i">{{ item }}</Item>
            </transition-group>
        </List>

    </div>
</template>

<script>
    export default {
        data () {
            return {
                message: '动画/过渡',
                val: 5,
                options : [
                    {'name': 'bounce', 'value': 'bounce'},
                    {'name': 'bounceDown', 'value': 'bounceDown'},
                    {'name': 'fade', 'value': 'fade'},
                ],

                items: ['Sakura', 'Sunflower', 'Rose'],
                input: 'Hello',
                effect: 'fade'
            }
        },
        methods: {
            addItem: function ()
            {
                if (!this.input) {
                    return;
                }

                this.items.push(this.input);
            },
            reset: function ()
            {
                this.items = [];
            }
        },
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

</style>
