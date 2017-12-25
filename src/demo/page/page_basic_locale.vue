<template>
    <div class="page-locale">

        <Panel>{{message}}</Panel>

        <Panel>
            {{ $t("message.hello") }}<br/>
            {{ $t("demo.vendor") }}
        </Panel>

        <Panel>
            <span @click="_on_set_locale('en-US')">设置en-US语言</span>
            <span @click="_on_set_locale('zh-TW')">设置zh-TW语言</span>
            <span @click="_on_set_locale('zh-CN')">设置zh-CN语言</span>
        </Panel>

    </div>
</template>

<script>
    export default {
        data () {
            return {
                message: '国际化',
            }
        },
        mounted: function() {
            console.log('mounted');
            let vm = this;

            let hello = vm.$t('message.hello');
            console.log('hello', hello);

            let vendor = vm.$t('demo.vendor');
            console.log('vendor', vendor);
        },
        methods: {
            _on_set_locale: function (locale) {
                let vm = this;
                vm.$set_locale(locale);
            },

        },
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

</style>
