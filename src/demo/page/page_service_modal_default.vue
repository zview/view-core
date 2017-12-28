<template>
    <div class="page-modal-default page-content padding padding-top">

        <p>
            我有一只小毛驴我从来也不骑。
        </p>

        <Button size="small" bg-color="assertive" v-if="!showMore" @click.native="more()">显示</Button>

        <p v-if="showMore">
            有一天我心血来潮骑它去赶集。<br>
            有一天我心血来潮骑它去赶集。<br>
            有一天我心血来潮骑它去赶集。<br>
            有一天我心血来潮骑它去赶集。<br>
            有一天我心血来潮骑它去赶集。<br>
            有一天我心血来潮骑它去赶集。<br>
            有一天我心血来潮骑它去赶集。<br>
            有一天我心血来潮骑它去赶集。<br>
            有一天我心血来潮骑它去赶集。<br>
            有一天我心血来潮骑它去赶集。<br>
            有一天我心血来潮骑它去赶集。<br>
            有一天我心血来潮骑它去赶集。<br>
            有一天我心血来潮骑它去赶集。<br>
            有一天我心血来潮骑它去赶集。<br>
            有一天我心血来潮骑它去赶集。<br>
            有一天我心血来潮骑它去赶集。<br>
            有一天我心血来潮骑它去赶集。<br>
            有一天我心血来潮骑它去赶集。<br>
            有一天我心血来潮骑它去赶集。<br>
            有一天我心血来潮骑它去赶集。<br>
            有一天我心血来潮骑它去赶集。<br>
            有一天我心血来潮骑它去赶集。<br>
            有一天我心血来潮骑它去赶集。<br>
            有一天我心血来潮骑它去赶集。<br>
            有一天我心血来潮骑它去赶集。<br>
            有一天我心血来潮骑它去赶集。<br>
            有一天我心血来潮骑它去赶集。<br>
            有一天我心血来潮骑它去赶集。<br>
            有一天我心血来潮骑它去赶集。<br>
            有一天我心血来潮骑它去赶集。<br>
            有一天我心血来潮骑它去赶集。<br>
            有一天我心血来潮骑它去赶集。<br>
            有一天我心血来潮骑它去赶集。<br>
            有一天我心血来潮骑它去赶集。<br>
            有一天我心血来潮骑它去赶集。<br>
            有一天我心血来潮骑它去赶集。<br>
            有一天我心血来潮骑它去赶集。<br>
            有一天我心血来潮骑它去赶集。<br>
            有一天我心血来潮骑它去赶集。<br>
            有一天我心血来潮骑它去赶集。<br>
        </p>

        <Button size="small" bg-color="assertive" @click.showAlert="showAlert()">对话框</Button>

    </div>
</template>

<script>
    export default {
        data () {
            return {
                message: '模态框',
                showMore: false,
            }
        },
        methods: {
            more() {
                this.showMore = true
            },

            showAlert() {
                let vm = this;
                vm.$dialog.alert({
                    content: '测试模态窗内的对话框'
                });
            }
        },
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

</style>
