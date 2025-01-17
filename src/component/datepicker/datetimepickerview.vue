<template>
    <div view-picker class="view-datepicker" :class="{'active': state == 1}">
        <div class="dp-header">
            <button class="button button-clear button-stable" @click="cancel()">
                <slot name="cancel">
                    取消
                </slot>
            </button>
            <button class="button button-clear button-stable" @click="clear()">
                <slot name="clear">
                    清除
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
            <scroller class="dp-list-full dp-years"
                      ref="y_scroller"
                      :animate-duration="1"
                      width="20%"
            >
                <div class="dp-item" v-for="(y, index) in years" v-text="y"></div>
            </scroller>

            <!-- months -->
            <scroller class="dp-list-full dp-months"
                      ref="m_scroller"
                      :animate-duration="1"
                      width="16%"
            >
                <div class="dp-item" v-for="(m, index) in months" v-text="m"></div>
            </scroller>

            <!-- dates -->
            <scroller class="dp-list-full dp-dates"
                      ref="d_scroller"
                      :animate-duration="1"
                      width="16%"
            >
                <div class="dp-item" v-for="(d, index) in dates" v-text="d"></div>
            </scroller>


            <!-- hours -->
            <scroller class="dp-list-full dp-hours"
                      ref="h_scroller"
                      :animate-duration="1"
                      width="16%"
            >
                <div class="dp-item" v-for="(h, index) in hours" v-text="h"></div>
            </scroller>

            <!-- minutes -->
            <scroller class="dp-list-full dp-minutes"
                      ref="mi_scroller"
                      :animate-duration="1"
                      width="16%"
            >
                <div class="dp-item" v-for="(m, index) in minutes" v-text="m"></div>
            </scroller>

            <!-- seconds -->
            <scroller class="dp-list-full dp-seconds"
                      ref="s_scroller"
                      :animate-duration="1"
                      width="16%"
            >
                <div class="dp-item" v-for="(s, index) in seconds" v-text="s"></div>
            </scroller>

        </div>
    </div>
</template>

<script>
    import channel from './datetimechannel';

    const defaultYears = () => {
        let years = ['', '', ''];
        let today = new Date();
        const passed = today.getFullYear() - 1975;
        let start = today.getFullYear() - passed;
        let end = today.getFullYear() + passed;
        for (let y = start; y <= end; y++) years.push(y + '');
        return years.concat(['', '', '']);
    };

    const defaultMonths = () => [
        '', '', '',
        '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12',
        '', '', ''
    ];

    const defaultDates = (yyyy, mm) => {
        let dates = ['', '', ''];
        let today = new Date();
        let year = today.getFullYear();
        let month = today.getMonth();

        if (yyyy)
            year = parseInt(yyyy);

        if (mm)
            month = parseInt(mm) - 1;

        let end = 30;

        if ([0, 2, 4, 6, 7, 9, 11].indexOf(month) > -1) { // 闰月：一月、三月、五月、七月、八月、十月、十二月
            end = 31;
        }
        else if (month == 1) { // 二月
            // 计算闰二月
            end = year % 100 == 0 ? (year % 400 == 0 ? 29 : 28) : (year % 4 == 0 ? 29 : 28);
        }

        for (let d = 1; d <= end; d++) dates.push((100 + d + '').substr(1, 2));
        return dates.concat(['', '', '']);
    };


    const defaultHours = () => [
        '', '', '',
        '00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11',
        '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23',
        '', '', ''
    ];

    const defaultMinutes = () => [
        '', '', '',
        '00', '01', '02', '03', '04', '05', '06', '07', '08', '09',
        '10', '11', '12', '13', '14', '15', '16', '17', '18', '19',
        '20', '21', '22', '23', '24', '25', '26', '27', '28', '29',
        '30', '31', '32', '33', '34', '35', '36', '37', '38', '39',
        '40', '41', '42', '43', '44', '45', '46', '47', '48', '49',
        '50', '51', '52', '53', '54', '55', '56', '57', '58', '59',
        '', '', ''
    ];

    const defaultSeconds = () => [
        '', '', '',
        '00', '01', '02', '03', '04', '05', '06', '07', '08', '09',
        '10', '11', '12', '13', '14', '15', '16', '17', '18', '19',
        '20', '21', '22', '23', '24', '25', '26', '27', '28', '29',
        '30', '31', '32', '33', '34', '35', '36', '37', '38', '39',
        '40', '41', '42', '43', '44', '45', '46', '47', '48', '49',
        '50', '51', '52', '53', '54', '55', '56', '57', '58', '59',
        '', '', ''
    ];

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

                years: defaultYears(),
                months: defaultMonths(),
                dates: defaultDates(),

                hours: defaultHours(),
                minutes: defaultMinutes(),
                seconds: defaultSeconds(),

                timer: undefined
            }
        },

        mounted() {
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

                    this.$refs.y_scroller.resize();
                    this.$refs.m_scroller.resize();
                    this.$refs.d_scroller.resize();
                    this.$refs.h_scroller.resize();
                    this.$refs.mi_scroller.resize();
                    this.$refs.s_scroller.resize();
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
            clear() {
                this.value = '';
                this.confirm();
            },
            cancel() {
                channel.$emit('PickerCancelEvent');
            },

            updateYmd() {
                let yPosition = this.$refs.y_scroller.getPosition();
                let yIndex = parseInt(yPosition.top / item_height) + 3;
                let mPosition = this.$refs.m_scroller.getPosition();
                let mIndex = parseInt(mPosition.top / item_height) + 3;
                let dPosition = this.$refs.d_scroller.getPosition();
                let dIndex = parseInt(dPosition.top / item_height) + 3;
                setOpacity(this.$refs.y_scroller.$el, yIndex);
                setOpacity(this.$refs.m_scroller.$el, mIndex);
                setOpacity(this.$refs.d_scroller.$el, dIndex);

                let hPosition = this.$refs.h_scroller.getPosition();
                let hIndex = parseInt(hPosition.top / item_height) + 3;
                let miPosition = this.$refs.mi_scroller.getPosition();
                let miIndex = parseInt(miPosition.top / item_height) + 3;
                let sPosition = this.$refs.s_scroller.getPosition();
                let sIndex = parseInt(sPosition.top / item_height) + 3;
                setOpacity(this.$refs.h_scroller.$el, hIndex);
                setOpacity(this.$refs.mi_scroller.$el, miIndex);
                setOpacity(this.$refs.s_scroller.$el, sIndex);

                let yyyy = this.years[yIndex];
                let mm = this.months[mIndex];
                let dd = this.dates[dIndex];
                let newDates = defaultDates(yyyy, mm);

                if (newDates.length !== this.dates.length) {
                    this.dates = newDates;
                    setTimeout(this.$refs.d_scroller.resize, 0);
                }

                if (this.dates.indexOf(dd) === -1) {
                    dIndex = this.dates.length - 4;
                }

                this.value = this.years[yIndex] + '-' + this.months[mIndex] + '-' + this.dates[dIndex] + '-' +
                    this.hours[hIndex] + '-' + this.minutes[miIndex] + '-' + this.seconds[sIndex];
            },

            setYmd() {
                let ymd = this.value.split('-');

                let yIndex = this.years.indexOf(ymd[0]);
                let mIndex = this.months.indexOf(ymd[1]);
                let dIndex = this.dates.indexOf(ymd[2]);
                this.$refs.y_scroller.scrollTo(0, item_height * (yIndex - 3));
                this.$refs.m_scroller.scrollTo(0, item_height * (mIndex - 3));
                this.$refs.d_scroller.scrollTo(0, item_height * (dIndex - 3));

                let hIndex = this.hours.indexOf(ymd[3]);
                let miIndex = this.minutes.indexOf(ymd[4]);
                let sIndex = this.seconds.indexOf(ymd[5]);
                this.$refs.h_scroller.scrollTo(0, item_height * (hIndex - 3));
                this.$refs.mi_scroller.scrollTo(0, item_height * (miIndex - 3));
                this.$refs.s_scroller.scrollTo(0, item_height * (sIndex - 3));
            }
        }
    }
</script>
