<template>
    <div view-picker class="view-datepicker" :class="{'active': state == 1}">
        <div class="dp-header">
            <button class="button button-clear button-stable" @click="cancel()">
                <slot name="cancel">
                    取消
                </slot>
            </button>

            <button class="button button-clear button-balanced btn-confirm" @click="confirm()">
                <slot name="confirm">
                    确定
                </slot>
            </button>
        </div>

        <div class="dp-body">
            <scroller class="dp-list dp-years"
                      ref="h_scroller"
                      :animate-duration="1"
                      width="100%"
            >
                <div class="dp-item" v-for="(h, index) in items" v-text="h.name"></div>
            </scroller>

        </div>
    </div>
</template>
<script>
    import channel from './item1channel';

    const item_height = 34;

    const setOpacity = (el, index) => {
        let dp_items = el.querySelectorAll('.dp-item');

        for (let i = 0; i < dp_items.length; i++) {
            let e = dp_items[i];
            if (i == index) {
                e.style.opacity = '1';
            } else if (Math.abs(i - index) == 1) {
                e.style.opacity = '0.4';
            } else if (Math.abs(i - index) == 2) {
                e.style.opacity = '0.2';
            } else if (Math.abs(i - index) >= 3) {
                e.style.opacity = '0.1';
            }
        }
    };

    export default {
        data() {
            return {
                state: 0, // 0: hide, 1: show
                value: '',
                items: {},
                values: {},
                timer: undefined
            }
        },

        mounted() {
            let items = [{'name': '', 'index': 0},{'name': '', 'index': 0},{'name': '', 'index': 0}];
            let values = ['', '', ''];
            for (let item of this.items) {
                values.push(item.value + '');
                items.push(item)
            }
            values = values.concat(['', '', '']);
            items = items.concat([{'name': '', 'index': 0},{'name': '', 'index': 0},{'name': '', 'index': 0}]);
            this.values = values;
            this.items = items;

            this.timer = setInterval(() => {
                this.updateYmd();
            }, 50);

            channel.$on('PickerCancelEvent', () => {
                this.hide();
            });
        },

        beforeDestroy() {
            if (this.timer)
                clearInterval(this.timer);
        },

        destroyed() {
            document.body.removeChild(document.querySelector('[view-picker]'));
        },

        methods: {
            show() {
                let vm = this;
                vm.$backdrop.show().then(() => {
                    let backdrop = document.querySelector('[view-backdrop]');
                    backdrop.onclick = () => {
                        channel.$emit('PickerCancelEvent');
                        backdrop.onclick = null;
                    }
                });

                setTimeout(() => {
                    this.state = 1;

                    this.$refs.h_scroller.resize();
                    this.setYmd();
                });
            },

            hide() {
                let vm = this;
                vm.state = 0;

                vm.$backdrop.hide();
                setTimeout(() => {
                    vm.$destroy();
                }, 300);
            },

            confirm() {
                channel.$emit('PickerOkEvent', this.value);
            },

            cancel() {
                channel.$emit('PickerCancelEvent');
            },

            updateYmd() {
                let hPosition = this.$refs.h_scroller.getPosition();
                let hIndex = parseInt(hPosition.top / item_height) + 3;
                setOpacity(this.$refs.h_scroller.$el, hIndex);

                this.value = this.items[hIndex].index;
            },

            setYmd() {
                let hIndex = this.values.indexOf(this.value);
                this.$refs.h_scroller.scrollTo(0, item_height * (hIndex - 3));
            }
        }
    }
</script>
