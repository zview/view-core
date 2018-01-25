<template>
    <div :class="[prefixCls + '-list-files']">
        <div
            v-for="file in files"
            :class="fileCls(file)">
            <span @click="handlePreview(file)" class="view-upload-list-file-label" style="font-size: 15px;">
                <Icon :icon="format(file)"></Icon> {{ file.name }}
            </span>
            <Icon
                icon="ion-backspace"
                :class="[prefixCls + '-list-remove']"
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

    const prefixCls = 'view-upload';

    export default {
        name: 'UploadList',
        props: {
            files: {
                type: Array,
                default() {
                    return [];
                }
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
                    `${prefixCls}-list-file`,
                    {
                        [`${prefixCls}-list-file-finish`]: file.status === 'finished'
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
            }
        }
    };
</script>


<style lang="scss" rel="stylesheet/scss" scoped>

    .view-upload-list-files
    {
        margin: 10px;

        .view-upload-list-file
        {
            padding: 15px 0;

            span.view-upload-list-file-label
            {
                font-size: 15px;
            }
        }

    }

</style>
