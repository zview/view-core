<template>
    <div class="page-accordion">

        <Panel type="paddingless">

            <Accordion default-index="0">
                <AccordionItem title="农夫" content-height="108">
                    <p>
                        如果有一天我能够拥有一个大果园，
                        我愿放下所有追求做个农夫去种田，
                        每一个早晨我耕耘在绿野田园，
                        每一个黄昏我守望在乡间的麦田。
                        我会把忧虑都融化在夕阳里，
                        让孤独的心等待秋收的欢喜。
                    </p>
                </AccordionItem>
                <AccordionItem title="渔夫" content-height="108">
                    <p>
                        如果有一天我能够拥有一条渔船，
                        我愿放下所有执着做个渔夫住在海边，
                        每一个早晨我航行在晨曦的海面，
                        每一个黄昏我遥望在无际的海云间。
                        我会把思绪都消失在波涛里，
                        让澎湃的心等待风雨后的平息。
                    </p>
                </AccordionItem>
            </Accordion>
        </Panel>

    </div>
</template>

<script>
    export default {
        data () {
            return {
                message: '折叠面板',
            }
        },
        methods: {

        },
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
    p
    {
        /*background-color: white;*/
        padding: 10px 15px;
        font-size: 12px;
        text-align: justify;
    }
</style>
