<template>
    <div class="page-slider">

        <List :title="val">
            <Slider color="positive" :min="0" :max="100" v-model="val">
                <Icon slot="left" icon="ion-ios-sunny-outline"></Icon>
                <Icon slot="right" icon="ion-ios-sunny"></Icon>
            </Slider>
            <Slider color="calm" :min="0" :max="100">
                <Icon slot="left" icon="ion-ios-lightbulb-outline"></Icon>
                <Icon slot="right" icon="ion-ios-lightbulb"></Icon>
            </Slider>
            <Slider color="balanced" :min="0" :max="100">
                <Icon slot="left" icon="ion-ios-bolt-outline"></Icon>
                <Icon slot="right" icon="ion-ios-bolt"></Icon>
            </Slider>
            <Slider color="energized" :min="0" :max="100">
                <Icon slot="left" icon="ion-ios-moon-outline"></Icon>
                <Icon slot="right" icon="ion-ios-moon"></Icon>
            </Slider>
            <Slider color="assertive" :min="0" :max="100">
                <Icon slot="left" icon="ion-ios-partlysunny-outline"></Icon>
                <Icon slot="right" icon="ion-ios-partlysunny"></Icon>
            </Slider>
            <Slider color="royal" :min="0" :max="100">
                <Icon slot="left" icon="ion-ios-rainy-outline"></Icon>
                <Icon slot="right" icon="ion-ios-rainy"></Icon>
            </Slider>
        </List>

    </div>
</template>

<script>
    export default {
        data () {
            return {
                message: '滑动条',
                val: 20,
            }
        },
        methods: {

        },
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

</style>
