<template>
    <div class="page-modal padding">

        <Button type="block" bg-color="assertive" @click.native="showModal()">默认</Button>

    </div>
</template>

<script>

    import DefaultModal from './page_service_modal_default.vue';

    export default {
        data () {
            return {
                message: '模态框',
                modal: undefined,
            }
        },
        mounted() {
            let vm = this;
            vm.$modal.fromComponent(DefaultModal, {
                title: '模态窗标题',
                theme: 'default',
                onHide: () => {
                    console.log('modal hide')
                }
            }).then((modal) => {
                vm.modal = modal
            });
        },
        destroyed() {
            let vm = this;
            if (vm.modal)
                vm.$modal.destroy(vm.modal);
        },
        methods: {
            showModal() {
                this.modal.show();
            },
        },
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

</style>
