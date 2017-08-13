<template>

    <div class="item" :class="classes">
        <Icon :icon="iconLeft" v-if="iconLeft"></Icon>
        <Button v-if="buttonLeft">{{buttonLeft}}</Button>
        <slot></slot>
        <span class="item-note" v-if="note">{{note}}</span>
        <Icon :icon="iconRight" v-if="iconRight"></Icon>
        <Button v-if="buttonRight">{{buttonRight}}</Button>
    </div>

</template>

<script>

    import { oneOf, insideIonic } from '../../util/check';

    const prefixCls = 'zv-item';

    export default {
        name: 'Item',
        props: {
            color: {
                validator (value) {
                    return insideIonic(value);
                }
            },
            note: String,
            divider: Boolean,
            iconLeft: String,
            iconRight: String,
            buttonLeft: String,
            buttonRight: String,
            thumbnailLeft: [String, Boolean],
            thumbnailRight: [String, Boolean],
            avatarLeft: [String, Boolean],
            avatarRight: [String, Boolean],
            image: [String, Boolean],
            className: String
        },
        computed: {
            classes () {
                return [
                    {
                        [`${prefixCls}`]: true,
                        [`item-${this.color}`]: !!this.color,
                        [`item-divider`]: !!this.divider,
                        [`item-icon-left`]: !!this.iconLeft,
                        [`item-icon-right`]: !!this.iconRight,
                        [`item-button-left`]: !!this.buttonLeft,
                        [`item-button-right`]: !!this.buttonRight,
                        [`item-thumbnail-left`]: !!this.thumbnailLeft,
                        [`item-thumbnail-right`]: !!this.thumbnailRight,
                        [`item-avatar-left`]: !!this.avatarLeft,
                        [`item-avatar-right`]: !!this.avatarRight,
                        [`item-image`]: !!this.image,
                        [`${this.className}`]: !!this.className
                    }
                ];
            },
        }
    }

</script>
