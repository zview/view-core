<template>
    <div class="page-grid">

        <Panel>
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
        </Panel>

        <Panel>
            <span>指定:</span>

            <Row>
                <Col color="stable" bg-color="royal">100%</Col>
            </Row>
            <Row color="stable">
                <Col bg-color="positive" :percent="10">
                10%
                </Col>
                <Col bg-color="calm" :percent="90">
                90%
                </Col>
            </Row>
            <Row color="stable">
                <Col bg-color="assertive" :percent="25">
                25%
                </Col>
                <Col bg-color="balanced" :percent="25">
                25%
                </Col>
                <Col bg-color="energized" :percent="50">
                50%
                </Col>
            </Row>
            <Row color="stable">
                <Col bg-color="assertive" :percent="25">
                25%
                </Col>
                <Col bg-color="balanced" :percent="75">
                75%
                </Col>
            </Row>
        </Panel>

        <Panel>
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
        </Panel>


        <Panel>
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
        </Panel>


        <Panel>
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
        </Panel>

        <Panel>
        <span>响应式布局:.responsive-sm/md/lg</span>

        <div class="row responsive-sm">
            <div class="col positive-bg">.col</div>
            <div class="col calm-bg">.col</div>
            <div class="col balanced-bg">.col</div>
            <div class="col energized-bg">.col</div>
        </div>
        </Panel>


        <Panel>
            <Row>
                <Col>
                    <img src="../static/images/nature-splash-1280.jpg">
                </Col>
                <Col>
                    <img src="../static/images/nature-macro-1280.jpg">
                </Col>
                <Col>
                    <img src="../static/images/nature-splash-1280.jpg">
                </Col>
                <Col>
                    <img src="../static/images/nature-macro-1280.jpg">
                </Col>
            </Row>
            <Row>
                <Col>
                    <img src="../static/images/nature-splash-1280.jpg">
                </Col>
                <Col>
                    <img src="../static/images/nature-macro-1280.jpg">
                </Col>
                <Col>
                    <img src="../static/images/nature-splash-1280.jpg">
                </Col>
                <Col>
                    <img src="../static/images/nature-macro-1280.jpg">
                </Col>
            </Row>
        </Panel>


        <Panel>
            <pre>
            .col-10	10%
            .col-20	20%
            .col-25	25%
            .col-33	33.3333%
            .col-50	50%
            .col-67	66.6666%
            .col-75	75%
            .col-80	80%
            .col-90	90%

            .col-offset-10	10%
            .col-offset-20	20%
            .col-offset-25	25%
            .col-offset-33	33.3333%
            .col-offset-50	50%
            .col-offset-67	66.6666%
            .col-offset-75	75%
            .col-offset-80	80%
            .col-offset-90	90%
            </pre>
        </Panel>

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

    .row
    {
        .col
        {
            img
            {
                width: 300px;
                height: 300px;
            }
        }
    }

</style>
