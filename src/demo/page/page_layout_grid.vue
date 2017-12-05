<template>
    <div class="page-grid">

        <span>平分:</span>

        <Row>
            <Col color="stable" bg-color="royal">100%</Col>
        </Row>
        <Row color="stable">
            <Col bg-color="positive">
                50%
            </Col>
            <Col bg-color="calm">
                50%
            </Col>
        </Row>
        <Row color="stable">
            <Col bg-color="assertive">
            33%
            </Col>
            <Col bg-color="balanced">
            33%
            </Col>
            <Col bg-color="energized">
            33%
            </Col>
        </Row>

        <span>偏移:</span>

        <Row color="stable">
            <Col :offset="25" bg-color="positive">
            offset 25%
            </Col>
            <Col bg-color="calm">
            1:1
            </Col>
        </Row>
        <Row color="stable">
            <Col bg-color="calm">
            1:1
            </Col>
            <Col :offset="25" bg-color="positive">
            offset 25%
            </Col>
        </Row>
        <Row color="stable">
            <Col bg-color="assertive">
            1:1:1
            </Col>
            <Col :offset="25" bg-color="balanced">
            offset 25%
            </Col>
            <Col bg-color="energized">
            1:1:1
            </Col>
        </Row>


        <span>间距:</span>

        <Row color="stable" :gutter="4">
            <Col bg-color="positive">
            50%
            </Col>
            <Col bg-color="calm">
            50%
            </Col>
        </Row>
        <Row color="stable" :gutter="4">
            <Col bg-color="assertive">
            33%
            </Col>
            <Col bg-color="balanced">
            33%
            </Col>
            <Col bg-color="energized">
            33%
            </Col>
        </Row>


        <span>对齐:</span>

        <Row color="stable">
            <Col bg-color="positive">
            20%
            </Col>
            <Col bg-color="calm" align="top">
            20%
            </Col>
            <Col bg-color="assertive" align="center">
            20%
            </Col>
            <Col bg-color="balanced" align="bottom">
            20%
            </Col>
            <Col bg-color="energized">
            1<br/>2<br/>3<br/>4<br/>
            </Col>
        </Row>
        <Row color="stable" align="bottom">
            <Col bg-color="positive">
            20%
            </Col>
            <Col bg-color="calm">
            20%
            </Col>
            <Col bg-color="assertive">
            20%
            </Col>
            <Col bg-color="balanced">
            20%
            </Col>
            <Col bg-color="energized">
            1<br/>2<br/>3<br/>4<br/>
            </Col>
        </Row>


        <span>响应式布局:.responsive-sm/md/lg</span>

        <div class="row responsive-sm">
            <div class="col positive-bg">.col</div>
            <div class="col calm-bg">.col</div>
            <div class="col balanced-bg">.col</div>
            <div class="col energized-bg">.col</div>
        </div>

    </div>
</template>

<script>
    export default {
        data () {
            return {
                message: '栅格',
            }
        },
        methods: {

        },
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

</style>
