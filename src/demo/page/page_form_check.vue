<template>
    <div class="page-check">

        <List>
            <Check :title="'选择' + val1" color="balanced" :options="options1" v-model="val1"></Check>
        </List>

        <List>
            <Check :title="'选择' + val2" :options="options2" v-model="val2"></Check>
        </List>

        <List>
            <CheckItem v-model="val3" name="check3">
                <h2>选项</h2>
                <p>说明</p>
            </CheckItem>
        </List>

    </div>
</template>

<script>
    export default {
        data () {
            return {
                message: '复选框',
                val1: [5],
                val2: ['three'],
                options1 : [
                    {'name': '一', 'value': 1, 'desc': '描述', 'subdesc': 'x2',
                        'image': 'https://cdn.pixabay.com/photo/2017/12/29/16/34/fruit-3048001_1280.jpg',
                        'icon': 'ion-aperture'},
                    {'name': '三', 'value': 3},
                    {'name': '五', 'value': 5},
                ],
                options2 : [
                    {'name': '一', 'value': 'one'},
                    {'name': '三', 'value': 'three'},
                    {'name': '五', 'value': 'five'},
                ],
                val3: null,
            }
        },
        methods: {

        },
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

</style>
