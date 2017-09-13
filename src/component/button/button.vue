<template>

    <div class="view-button button" :class="classes" :style="styles" @click="_on_click($event)">
        <slot></slot>
    </div>

</template>

<script>

    import { oneOf, insideIonic, insideColor } from '../../util/check';

    const faCls = 'fa';
    const iconCls = 'icon';
    const iconRightCls = 'icon-right';
    const outlineCls = 'button-outline';
    const materialCls = 'button-material';

    export default {
        name: 'Button',
        props: {
            theme: {
                validator (value) {
                    return insideIonic(value);
                },
            },
            color: {
                validator (value) {
                    return insideColor(value);
                },
            },
            bgColor: {
                validator (value) {
                    return insideColor(value);
                },
            },
            type: {
                validator (value) {
                    return oneOf(value, ['clear', 'block', 'full', 'outline', 'fab'], true);
                }
            },
            size: {
                validator (value) {
                    return oneOf(value, ['small', 'large'], true);
                }
            },
            iconAlign: {
                validator (value) {
                    return oneOf(value, ['left', 'right'], true);
                },
                default: 'left',
            },
            icon: [String, Number],
            outline: [String, Boolean],
            material: [String, Boolean],
            className: String
        },
        computed: {
            classes () {
                return [
                    {
                        [`button-${this.theme}`]: !!this.theme,
                        [`${this.color}-fg`]: !!this.color,
                        [`${this.bgColor}-bg`]: !!this.bgColor,
                        [`button-${this.type}`]: !!this.type,
                        [`${outlineCls}`]: !!this.outline || this.outline=='true',
                        [`${materialCls}`]: !!this.material || this.material=='true',
                        [`button-${this.size}`]: !!this.size,
                        [`${faCls}`]: this.icon && this.icon.indexOf('fa-')==0,
                        [`${iconCls}`]: this.icon && this.icon.indexOf('ion-')==0,
                        [`${this.icon}`]: !!this.icon,
                        [`${iconRightCls}`]: this.iconAlign && this.iconAlign=='right',
                        [`${this.className}`]: !!this.className
                    }
                ];
            },
            styles () {
                return {
                    'border-color': this.bgColor,
                };
            },

        },
        methods: {
            _on_click (event) {

                //
                if(this.material || this.material=='true')
                {
                    event.preventDefault();
                    let btn = event.target;

                    let ripple = document.createElement('div');
                    ripple.classList.add('ripple-container');
                    let x = event.pageX - btn.offsetLeft;
//                    let y = event.pageY - btn.offsetTop;
                    let left = x - btn.offsetHeight / 2 + 'px';
                    let top = (event.offsetY  - btn.offsetHeight / 2) + 'px';//y - btn.offsetHeight / 2 + 'px';

                    ripple.style.height = btn.offsetHeight + 'px';
                    ripple.style.width = btn.offsetHeight + 'px';
                    ripple.style.left = left;
                    ripple.style.top = top;
                    btn.appendChild(ripple);

                    ripple.classList.add('ripple-animation');
                    setTimeout(() => {
                        btn.removeChild(ripple);
                    }, 2000);
                }

                //
                this.$emit('click', event);
            }
        },
    }
</script>
