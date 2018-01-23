<template>
    <div class="page-progress">

        <Row>
            <Col>
                <Progress :percent="10"></Progress>
                <Progress :percent="100"></Progress>
            </Col>
        </Row>

    </div>
</template>

<script>
    export default {
        data () {
            return {
                message: '进度条',
            }
        },
        methods: {

        },
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

</style>
