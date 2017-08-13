<template>

    <div class="bar bar-header" :class="classes">
        <div class="button icon ion-ios-arrow-left"></div>
        <h1 class="title">{{title}}</h1>
        <div class="button icon ion-gear-b"></div>
    </div>

</template>

<script>

    import { oneOf, insideIonic } from '../../util/check';

    const prefixCls = 'zv-navbar';

    export default {
        name: 'Navbar',
        props: {
            color: {
                validator (value) {
                    return insideIonic(value);
                }
            },
            title: String,
            className: String
        },
        computed: {
            classes () {
                return [
                    {
                        [`${prefixCls}`]: true,
                        [`bar-${this.color}`]: !!this.color,
                        [`${this.className}`]: !!this.className
                    }
                ];
            },
        }
    }

</script>
