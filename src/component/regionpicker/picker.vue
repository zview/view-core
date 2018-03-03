<template>
    <div view-picker class="view-regionpicker" :class="{'active': state == 1}">
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
            <!-- years -->
            <scroller class="dp-list dp-provs"
                      ref="y_scroller"
                      :animate-duration="1"
                      width="34%"
            >
                <div class="dp-item" v-for="(y, index) in years" v-text="y.name"></div>
            </scroller>

            <!-- months -->
            <scroller class="dp-list dp-citys"
                      ref="m_scroller"
                      :animate-duration="1"
                      width="33%"
            >
                <div class="dp-item" v-for="(m, index) in months" v-text="m.name"></div>
            </scroller>

            <!-- dates -->
            <scroller class="dp-list dp-cntrys"
                      ref="d_scroller"
                      :animate-duration="1"
                      width="33%"
            >
                <div class="dp-item" v-for="(d, index) in dates" v-text="d.name"></div>
            </scroller>

        </div>
    </div>
</template>

<script>

    import channel from './channel';

    const entry = { name:'', value:'' };
    const initval = 3;

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
                data: [],

                years: [],
                months: [],
                dates: [],

                yindex: 0,
                mindex: 0,
                dindex: 0,

                timer: undefined
            }
        },

        mounted() {
            let vm = this;

            //启动默认值
            let provs = vm.data.filter(item => (item.level == 'c0' || item.level == 'c1'));
            vm.years = [entry,entry,entry,entry];
            vm.years = vm.years.concat(provs);
            vm.years = vm.years.concat([entry,entry,entry,entry]);
            vm.yindex = initval;

            let citys = vm.data.filter(item => (item.parent == provs[0].value && (item.level == 'd0' || item.level == 'd1')));
            vm.months = [entry,entry,entry,entry];
            vm.months = vm.months.concat(citys);
            vm.months = vm.months.concat([entry,entry,entry,entry]);
            vm.mindex = initval;

            let cntrys = vm.data.filter(item => (item.parent == citys[0].value && (item.level == 'x0' || item.level == 'x1')));
            vm.dates = [entry,entry,entry,entry];
            vm.dates = vm.dates.concat(cntrys);
            vm.dates = vm.dates.concat([entry,entry,entry,entry]);
            vm.dindex = initval;

            //定时
            vm.timer = setInterval(() => {
                vm.updateYmd();
            }, 50);

            channel.$on('PickerCancelEvent', () => {
                vm.hide();
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

                //
                vm.$backdrop.show().then(() => {
                    let backdrop = document.querySelector('[view-backdrop]');
                    backdrop.onclick = () => {
                        channel.$emit('PickerCancelEvent');
                        backdrop.onclick = null;
                    }
                });

                //启动设置一次
                setTimeout(() => {
                    vm.state = 1;

                    vm.$refs.y_scroller.resize();
                    vm.$refs.m_scroller.resize();
                    vm.$refs.d_scroller.resize();
                    vm.setYmd();
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
                let vm = this;
                let yPosition = this.$refs.y_scroller.getPosition();
                let yIndex = parseInt(yPosition.top / item_height) + initval;
                let mPosition = this.$refs.m_scroller.getPosition();
                let mIndex = parseInt(mPosition.top / item_height) + initval;
                let dPosition = this.$refs.d_scroller.getPosition();
                let dIndex = parseInt(dPosition.top / item_height) + initval;
                setOpacity(this.$refs.y_scroller.$el, yIndex);
                setOpacity(this.$refs.m_scroller.$el, mIndex);
                setOpacity(this.$refs.d_scroller.$el, dIndex);

                //
                let haschange = false;
                if(yIndex != vm.yindex) {
                    let citys = vm.data.filter(item => (item.parent == vm.years[yIndex].value && (item.level == 'd0' || item.level == 'd1')));
                    vm.months = [entry,entry,entry,entry];
                    vm.months = vm.months.concat(citys);
                    vm.months = vm.months.concat([entry,entry,entry,entry]);
                    vm.mindex = initval;
                    haschange = true;
                    setTimeout(vm.$refs.m_scroller.resize, 0);
                }
                vm.yindex = yIndex;

                //
                if(mIndex != vm.mindex || haschange) {
                    let cntrys = vm.data.filter(item => (item.parent == vm.months[mIndex].value && (item.level == 'x0' || item.level == 'x1')));
                    vm.dates = [entry,entry,entry,entry];
                    vm.dates = vm.dates.concat(cntrys);
                    vm.dates = vm.dates.concat([entry,entry,entry,entry]);
                    vm.dindex = initval;
                    haschange = true;
                    setTimeout(vm.$refs.d_scroller.resize, 0);
                }
                vm.mindex = mIndex;

                //
                if(dIndex != vm.dindex || haschange) {
                    vm.dindex = initval;
                    setTimeout(vm.$refs.d_scroller.resize, 0);
                }
                vm.dindex = dIndex;

                vm.value = vm.years[vm.yindex].value + '-' + vm.months[vm.mindex].value + '-' + vm.dates[vm.dindex].value;
            },

            setYmd() {
                let vm = this;
                let ymd = vm.value.split('-');

//                debugger

                //
                let haschange = false;
                let yindex = vm.getItemIndex(vm.years, ymd[0]);
                if(yindex != vm.yindex) {
                    let citys = vm.data.filter(item => (item.parent == vm.years[yindex].value && (item.level == 'd0' || item.level == 'd1')));
                    vm.months = [entry,entry,entry,entry];
                    vm.months = vm.months.concat(citys);
                    vm.months = vm.months.concat([entry,entry,entry,entry]);
                    vm.mindex = initval;
                    haschange = true;
                    setTimeout(vm.$refs.m_scroller.resize, 0);
                }
                vm.yindex = yindex;

                //
                let mindex = vm.getItemIndex(vm.months, ymd[1]);
                if(mindex != vm.mindex || haschange) {
                    let cntrys = vm.data.filter(item => (item.parent == vm.months[mindex].value && (item.level == 'x0' || item.level == 'x1')));
                    vm.dates = [entry,entry,entry,entry];
                    vm.dates = vm.dates.concat(cntrys);
                    vm.dates = vm.dates.concat([entry,entry,entry,entry]);
                    vm.dindex = initval;
                    haschange = true;
                    setTimeout(vm.$refs.d_scroller.resize, 0);
                }
                vm.mindex = mindex;

                //
                let dindex = vm.getItemIndex(vm.dates, ymd[2]);
                if(dindex != vm.dindex || haschange) {
                    vm.dindex = initval;
                    setTimeout(vm.$refs.d_scroller.resize, 0);
                }
                vm.dindex = dindex;

                //
                vm.$refs.y_scroller.scrollTo(0, item_height * (vm.yindex-initval));
                vm.$refs.m_scroller.scrollTo(0, item_height * (vm.mindex-initval));
                vm.$refs.d_scroller.scrollTo(0, item_height * (vm.dindex-initval));
            },

            getItemIndex(items, value) {
                for (let index = 0; index < items.length; index++) {
                    if (items[index].value == value) {
                        return index;
                    }
                }
                return initval;
            },

        }
    }
</script>
