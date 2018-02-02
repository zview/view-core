<template>
    <div class="page-scroller">

        <Scroller :on-refresh="onRefresh" :on-infinite="onInfinite" :has-navbar="true" :has-tabbar="false">

            <Item>表头</Item>

            <Item v-for="(item, index) in items" :key="index"
                  @click.native="onItemClick(index)"
                  :class="{'item-stable': index % 2 == 0}">
                {{ item }}
            </Item>

            <div v-if="infiniteCount >= 2" slot="infinite" class="text-center">没有更多数据</div>

        </Scroller>

    </div>
</template>

<script>

    const PAGE_SIZE = 15;

    export default {
        data () {
            return {
                message: '下拉刷新/自动加载, 基于vue-scroller v2.2.0',
                items: [],
                infiniteCount: 0,
                top: 0,
                bottom: 0,
            }
        },
        mounted() {
            for (let i = 1; i <= PAGE_SIZE; i++) {
                this.items.push(i + ' - 数据. 基于vue-scroller v2.2.0');
            }
            this.top = 1;
            this.bottom = PAGE_SIZE;
        },

        methods: {
            onRefresh(done) {
                setTimeout(() => {
                    //
                    this.items = [];
                    this.infiniteCount = 0;
                    this.top = 0;
                    this.bottom = 0;

                    let start = this.top;
                    for (let i = start; i > start - PAGE_SIZE; i--) {
                        this.items.splice(0, 0, i + ' - keep walking, be 2 with you.');
                    }
                    this.top = this.top - PAGE_SIZE;

                    done();
                }, 1500);
            },

            onInfinite(done) {
                setTimeout(() => {
                    if (this.infiniteCount < 2) {
                        let start = this.bottom + 1;
                        for (let i = start; i < start + PAGE_SIZE; i++) {
                            this.items.push(i + ' - keep walking, be 2 with you.');
                        }
                        this.bottom = this.bottom + PAGE_SIZE;

                        this.infiniteCount++;
                    }

                    done();
                }, 1500)
            },

            onItemClick(index) {
                console.log(index);
            },


        }
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

</style>
