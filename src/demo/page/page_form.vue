<template>
    <div class="page-form">

        <input type="text"/>
        <input type="submit" class="button calm-bg"/>

    </div>
</template>

<script>
    export default {
        data () {
            return {
                message: '表单',
            }
        },
        mounted: function() {
            console.log('mounted');
            var vm = this;

            let ver = vm.$version;
            vm.$alert( ver + 'mounted' );
        },
        methods: {

        },
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

</style>
