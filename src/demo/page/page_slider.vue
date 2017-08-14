<template>
    <div class="page-slider">

        <Slider color="positive" :min="0" :max="100" v-model="val">
            <Icon slot="left" icon="ion-ios-sunny-outline"></Icon>
            <Icon slot="right" icon="ion-ios-sunny"></Icon>
        </Slider>
        {{val}}

    </div>
</template>

<script>
    export default {
        data () {
            return {
                message: '滑块',
                val: 20,
            }
        },
        methods: {

        },
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

</style>
