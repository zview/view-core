<template>

    <div class="view-footer bar bar-footer" :class="classes">
        <h1 class="title" v-if="title">{{title}}</h1>
        <slot></slot>
    </div>

</template>

<script>

    import { oneOf, insideIonic } from '../utils';

    export default {
        name: 'Footer',
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
                        [`bar-${this.color}`]: !!this.color,
                        [`${this.className}`]: !!this.className
                    }
                ];
            },
        }
    }

</script>
