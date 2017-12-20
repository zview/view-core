<template>

    <div class="view-navbar bar bar-header bar-transparent" :class="classes">
        <div class="buttons" v-if="showBack">
            <button class="button button-icon" @click="onBackClick()">
                <span v-html="backText"></span>
            </button>
        </div>

        <h1 class="title">
            <span v-text="title"></span>
        </h1>

        <div class="buttons" v-if="showMenu">
            <button class="button button-icon" @click="onMenuClick()">
                <span v-html="menuText"></span>
            </button>
        </div>
    </div>

</template>

<script>

    import { oneOf, insideIonic } from '../../util/check';

    const DEFAULT_BACK_TEXT = '<i class="icon ion-ios-arrow-back"></i>';
    const DEFAULT_MENU_TEXT = '<i class="icon ion-navicon"></i>';

    export default {
        name: 'Navbar',
        props: {
            color: {
                validator (value) {
                    return insideIonic(value);
                }
            },
            title: String,
            showBack: {
                type: [Boolean, String],
                default: false
            },
            backText: {
                type: String,
                default: DEFAULT_BACK_TEXT
            },
            onBack: Function,
            showMenu: {
                type: [Boolean, String],
                default: false
            },
            menuText: {
                type: String,
                default: DEFAULT_MENU_TEXT
            },
            onMenu: Function,
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
        },
        methods: {
            onBackClick() {
                if (this.onBack) {
                    this.onBack()
                }
            },

            onMenuClick() {
                if (this.onMenu) {
                    this.onMenu()
                }
            },
        }
    }

</script>
