<template>

    <div class="tabs tabs-icon-top" :class="classes">
        <a class="tab-item active">
            <i class="icon ion-ios-paper-outline"></i>新闻
        </a>
        <a class="tab-item disabled">
            <i class="icon ion-ios-book-outline"></i>订阅
        </a>
        <a class="tab-item has-badge">
            <div class="badge badge-assertive">12</div>
            <i class="icon ion-images"></i>图片
        </a>
        <a class="tab-item activated">
            <i class="icon ion-ios-videocam-outline"></i>视频
        </a>
    </div>

</template>

<script>

    import { oneOf, insideIonic } from '../../util/check';

    const prefixCls = 'zv-tabbar';

    export default {
        name: 'Tabbar',
        props: {
            color: {
                validator (value) {
                    return insideIonic(value);
                }
            },
            className: String
        },
        computed: {
            classes () {
                return [
                    {
                        [`${prefixCls}`]: true,
                        [`tabs-${this.color}`]: !!this.color,
                        [`${this.className}`]: !!this.className
                    }
                ];
            },
        }
    }

</script>
