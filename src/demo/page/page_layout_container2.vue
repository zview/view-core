<template>
    <div class="page-container2">

        <Header :color="themes[theme_value].name">

            <button class="button button-icon ion-ios-arrow-back" slot="left"></button>
            <span slot="title">容器2</span>
            <button class="button button-icon ion-navicon" slot="right"></button>

        </Header>

        <SubHeader color="stable">
            <h1 class="title">SubHeader</h1>
        </SubHeader>

        <Content :has-header="true" :has-sub-header="true"
                 :has-footer="true" :has-sub-footer="true" :scroll="true">

            <Radio :options="themes" v-model="theme_value"></Radio>

        </Content>

        <SubFooter color="stable">
            <h1 class="title">SubFooter</h1>
        </SubFooter>

        <Footer color="dark">
            <h1 class="title">Footer</h1>
        </Footer>

    </div>
</template>

<script>
    export default {
        data () {
            return {
                message: '容器2',

                theme_value: 0,
                themes : [
                    {'name': 'light', 'value': 0},
                    {'name': 'stable', 'value': 1},
                    {'name': 'positive', 'value': 2},
                    {'name': 'calm', 'value': 3},
                    {'name': 'balanced', 'value': 4},
                    {'name': 'energized', 'value': 5},
                    {'name': 'assertive', 'value': 6},
                    {'name': 'dark', 'value': 7},
                ],
            }
        },
        methods: {

        },
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

</style>
