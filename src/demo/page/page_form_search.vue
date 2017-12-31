<template>
    <div class="page-search">

        <Search color="balanced" bg-color="dark" v-model="keywords"
                :on-search="onSearch" :on-cancel="onCancel" cancel-text="取消"></Search>

        <List header-content="结果" v-show="searching">
            <Item>查询'{{keywords}}'.条目</Item>
        </List>

        <Search color="balanced" bg-color="dark" v-model="val">
            <div slot="left">
                <Button type="clear" bg-color="balanced" icon="ion-android-arrow-dropdown" icon-align="right" size="small">北京</Button>
            </div>
            <div slot="right">
                <Button type="clear" bg-color="balanced" size="small">搜索</Button>
            </div>
        </Search>

    </div>
</template>

<script>
    export default {
        data () {
            return {
                message: '搜索框',
                val: '',
                keywords: '',
                searching: false
            }
        },
        methods: {
            onSearch(keywords) {
                console.log('onSearch', keywords);
                this.searching = true;
            },

            onCancel() {
                console.log('onCancel');
                this.searching = false;
                this.keywords = ''
            }
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

</style>
