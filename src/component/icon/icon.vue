<template>

    <i class="view-icon" :class="classes" aria-hidden="true"></i>

</template>

<script>

    import { oneOf, insideIonic } from '../utils';

    const faCls = 'fa';
    const iconCls = 'icon';

    export default {
        name: 'Icon',
        props: {
            icon: [String, Number],
            size: {
                validator (value) {
                    return oneOf(value, ['lg', '2x', '3x', '4x', '5x'], true);
                }
            },
            type: {
                validator (value) {
                    return oneOf(value, [
                        'spin',  //旋转
                        'pulse', //以 8 步为周期进行旋转
                        'rotate-90', //旋转90度
                        'rotate-180', //旋转180度
                        'rotate-270', //旋转270度
                        'flip-horizontal', //水平翻转
                        'flip-vertical' //垂直翻转
                    ], true);
                }
            },
            className: String
        },
        computed: {
            classes () {
                return [
                    {
                        [`fa-${this.type}`]: this.icon.indexOf('fa-')==0 && !!this.type,
                        [`fa-${this.size}`]: this.icon.indexOf('fa-')==0 && !!this.size,
                        [`fa-fw`]: this.icon.indexOf('fa-')==0,  //固定宽度,列表对齐
                        [`${faCls}`]: this.icon.indexOf('fa-')==0,
                        [`${iconCls}`]: this.icon.indexOf('ion-')==0,
                        [`${this.icon}`]: !!this.icon,
                        [`${this.className}`]: !!this.className
                    }
                ];
            },
        }
    }
</script>
