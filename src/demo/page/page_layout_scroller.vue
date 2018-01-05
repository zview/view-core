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
    export default {
        data () {
            return {
                message: '下拉刷新/自动加载, 基于vue-scroller v2.2.0',
                items: [],
                infiniteCount: 0,

                tabindex: 0,
                tabitems : [
                    {'id': 1, 'text': '新闻', 'icon': 'ion-ios-paper-outline'},
                    {'id': 2, 'text': '订阅', 'icon': 'ion-ios-book-outline'},
                    {'id': 3, 'text': '图片', 'icon': 'ion-images', 'badge': '2'},
                    {'id': 4, 'text': '视频', 'icon': 'ion-ios-videocam-outline'},
                ],
            }
        },
        mounted() {
            for (let i = 1; i <= 20; i++) {
                this.items.push(i + ' - 数据. 基于vue-scroller v2.2.0');
            }
            this.top = 1;
            this.bottom = 20;
        },

        methods: {
            onRefresh(done) {
                setTimeout(() => {
                    let start = this.top - 1;
                    for (let i = start; i > start - 10; i--) {
                        this.items.splice(0, 0, i + ' - keep walking, be 2 with you.');
                    }
                    this.top = this.top - 10;

                    done();
                }, 1500);
            },

            onInfinite(done) {
                setTimeout(() => {
                    if (this.infiniteCount < 2) {
                        let start = this.bottom + 1;
                        for (let i = start; i < start + 10; i++) {
                            this.items.push(i + ' - keep walking, be 2 with you.');
                        }
                        this.bottom = this.bottom + 10;

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
