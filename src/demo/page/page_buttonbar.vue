<template>
    <div class="page-buttonbar">

        <Row>
            <Col color="stable" :gutter="8">
                <ButtonBar color="balanced" :options="options" @on-cell-click="_on_cell_click"></ButtonBar>
            </Col>
        </Row>

    </div>
</template>

<script>
    export default {
        data () {
            return {
                message: '按钮栏',
                options: [
                    {'id': 1, 'name' : '中文', 'icon': 'ion-android-share'},
                    {'id': 2, 'name' : '英文', 'icon': 'ion-images'},
                ],
            }
        },
        methods: {
            _on_cell_click: function (index, id) {
                console.log('_on_cell_click', index, id);
            }

        },
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

</style>
