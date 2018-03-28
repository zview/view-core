<template>
    <div :class="[prefixCls + '-files']">
        <Row :wrap="true" v-if="display === 'grid'">
            <Col :class="fileCls(file)" :percent="calcPercent(colnum)"
                 v-if="file.status === 'finished'"
                 v-for="(file, index) in files" :key="index">

                <div class="image-holder" :style="'background:url('+file.url+');background-size:cover;'">
                    <img class="image-holder-delete" src="../../assets/clear@3x.png" alt="x"
                         v-show="file.status === 'finished'"
                         @click="handleRemove(file)"/>
                    <span class="image-holder-info" v-if="showInfo">
                        <Icon :icon="format(file)"></Icon> {{file.name}}
                    </span>
                </div>

            </Col>
        </Row>

        <div v-for="file in files" :class="fileCls(file)" v-if="display === 'list'">
            <span @click="handlePreview(file)" class="view-upload-file-label">
                <Icon :icon="format(file)"></Icon> {{ file.name }}
                <!--<img :src="file.url" alt="preview" v-if="file.url"/>-->
            </span>
            <Icon
                icon="ion-backspace"
                :class="[prefixCls + '-file-remove']"
                v-show="file.status === 'finished'"
                @click.native="handleRemove(file)"></Icon>
            <br/>
            <transition name="fade">
                <Progress
                    v-if="file.showProgress"
                    :stroke-width="3"
                    :percent="parsePercentage(file.percentage)"
                    :status="file.status === 'finished' && file.showProgress ? 'success' : 'normal'">
                </Progress>
            </transition>
        </div>
    </div>
</template>
<script>

    //
    import { oneOf, insideIonic, insideColor } from '../utils';

    const prefixCls = 'view-upload';

    export default {
        name: 'UploadList',
        props: {
            files: {
                type: Array,
                default() {
                    return [];
                }
            },
            display: {
                type: String,
                validator (value) {
                    return oneOf(value, ['list', 'grid'], true);
                },
                default: 'list'
            },
            colnum: {
                type: Number,
                validator (value) {
                    return oneOf(value, [1, 2, 3, 4, 5], true);
                },
                default: 1,
            },
            showInfo: {
                type: Boolean,
                default: false,
            }
        },
        data () {
            return {
                prefixCls: prefixCls
            };
        },
        methods: {
            fileCls (file) {
                return [
                    `${prefixCls}-${this.display}-file`,
                    `${prefixCls}-file-${this.colnum}`,
                    {
                        [`${prefixCls}-file-finish`]: file.status === 'finished'
                    }
                ];
            },
            handlePreview (file) {
                this.$emit('on-file-preview', file);
            },
            handleRemove (file) {
                this.$emit('on-file-remove', file);
            },
            format (file) {
                const format = file.name.split('.').pop().toLocaleLowerCase() || '';
                let type = 'fa-file-o';

                if (['gif','jpg','jpeg','png','bmp','webp'].indexOf(format) > -1) {
                    type = 'fa-file-image-o';
                }
                if (['mp4','m3u8','rmvb','avi','swf','3gp','mkv','flv'].indexOf(format) > -1) {
                    type = 'fa-file-video-o';
                }
                if (['mp3','wav','wma','ogg','aac','flac'].indexOf(format) > -1) {
                    type = 'fa-file-audio-o';
                }
                if (['txt'].indexOf(format) > -1) {
                    type = 'fa-file-text-o';
                }
                if (['pdf'].indexOf(format) > -1) {
                    type = 'fa-file-pdf-o';
                }
                if (['doc','docx','pages','epub'].indexOf(format) > -1) {
                    type = 'fa-file-word-o';
                }
                if (['numbers','csv','xls','xlsx'].indexOf(format) > -1) {
                    type = 'fa-file-excel-o';
                }
                if (['keynote','ppt','pptx'].indexOf(format) > -1) {
                    type = 'fa-file-powerpoint-o';
                }

                return type;
            },
            parsePercentage (val) {
                return parseInt(val, 10);
            },
            calcPercent: function (val) {
                if(val>=5) {
                    return 20;
                }
                if(val==4) {
                    return 25;
                }
                else if(val==3) {
                    return 33;
                }
                else if(val==2) {
                    return 50;
                }
                else {
                    return 100;
                }
            },
        }
    };
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

</style>
