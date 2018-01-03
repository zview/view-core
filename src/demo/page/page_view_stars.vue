<template>
    <div class="page-stars">

       <Panel>
           {{stars1}}
            <Stars v-model="stars1"/>
        </Panel>

        <Panel>
            {{stars2}}
            <Stars :max="7" v-model="stars2"/>
        </Panel>

    </div>
</template>

<script>
    export default {
        data () {
            return {
                message: '星级',
                stars1: 0,
                stars2: 2,
            }
        },
        methods: {

        },
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

</style>
