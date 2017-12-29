<template>

    <div class="view-item item" :class="classes">
        <Icon :icon="iconLeft" v-if="iconLeft"></Icon>
        <Button bg-color="stable" size="small" v-if="buttonLeft">{{buttonLeft}}</Button>
        <slot></slot>
        <span class="item-note" v-if="note">{{note}}</span>
        <Icon :icon="iconRight" :class-name="icon_right_classes" v-if="iconRight"></Icon>
        <Button bg-color="stable" size="small" v-if="buttonRight">{{buttonRight}}</Button>
    </div>

</template>

<script>

    import { oneOf, insideColor } from '../utils';

    export default {
        name: 'Item',
        props: {
            color: {
                validator (value) {
                    return insideColor(value);
                }
            },
            bgColor: {
                validator (value) {
                    return insideColor(value);
                }
            },
            type: {
                validator (value) {
                    return oneOf(value, ['item-outer', 'item-borderless'], true);
                }
            },
            note: String,
            iconLeft: String,
            iconLeftColor: String,
            iconRight: String,
            iconRightColor: String,
            buttonLeft: String,
            buttonRight: String,
            thumbnailLeft: [String, Boolean],
            thumbnailRight: [String, Boolean],
            avatar: [String, Boolean],
            avatarLeft: [String, Boolean],
            avatarRight: [String, Boolean],
            isImage: [String, Boolean],
            isBody: [String, Boolean],
            isTabs: [String, Boolean],
            className: String
        },
        computed: {
            classes () {
                return [
                    {
//                        [`item-${this.color}`]: !!this.color,
                        [`item-borderless`]: this.type=='item-borderless',
                        [`item-outer`]: this.type=='item-outer',
                        [`${this.color}-fg`]: !!this.color,
                        [`${this.bgColor}-bg`]: !!this.bgColor,
                        [`item-icon-left`]: !!this.iconLeft,
                        [`item-icon-right`]: !!this.iconRight,
                        [`item-button-left`]: !!this.buttonLeft,
                        [`item-button-right`]: !!this.buttonRight,
                        [`item-thumbnail-left`]: !!this.thumbnailLeft,
                        [`item-thumbnail-right`]: !!this.thumbnailRight,
                        [`item-avatar`]: !!this.avatar,
                        [`item-avatar-left`]: !!this.avatarLeft,
                        [`item-avatar-right`]: !!this.avatarRight,
                        [`item-image`]: !!this.isImage,
                        [`item-body`]: !!this.isBody,
                        [`tabs tabs-secondary tabs-icon-left`]: !!this.isTabs,  //
                        [`${this.className}`]: !!this.className
                    }
                ];
            },
            icon_left_classes () {
                return [
                    {
                        [`${this.iconLeftColor}`]: !!this.iconLeftColor
                    }
                ];
            },
            icon_right_classes () {
                return this.iconRightColor?this.iconRightColor:'';
            },
        }
    }

</script>
