<template>
    <div class="page-condition">

        <Panel>
            <Row>
                <Col>
                    <DropdownCondition v-model="city" :on-item-click="_on_item_click" label="'地区'" :options="cityitems"></DropdownCondition>
                </Col>
                <Col>
                    <DropdownCondition v-model="city" label="'地区'" :options="cityitems"></DropdownCondition>
                </Col>
            </Row>
        </Panel>

        <Panel>

            <Condition title="地区" v-model="loacl_select">
                <ConditionItem v-for="(item,index) in local" :label="item.label" :value="item" :key="index"></ConditionItem>
            </Condition>

            <Condition title="薪资要求" v-model="salary_select">
                <ConditionItem v-for="(item,index) in salary" :label="item.label" :value="item" :key="index"></ConditionItem>
            </Condition>

            <Condition title="福利待遇" :multiple="true" v-model="treatment_select">
                <ConditionItem v-for="(item,index) in treatment" :label="item.label" :value="item" :key="index"></ConditionItem>
            </Condition>

            <Row>
                <Col :percent="25">
                    已选条件
                </Col>
                <Col :percent="75">
                <div>
                    <span class="view-condition-item active" v-if="loacl_select">{{loacl_select.label}}</span>
                    <span class="view-condition-item active" v-if="salary_select">{{salary_select.label}}</span>
                    <span class="view-condition-item active" v-for="item in treatment_select">{{item.label}}</span>
                </div>
                </Col>
            </Row>

        </Panel>

    </div>
</template>

<script>
    export default {
        data () {
            return {
                message: '条件选择',

                city: {},
                cityitems: [
                    {id:1, label:"北京"},
                    {id:2, label:"安徽"},
                    {id:3, label:"上海"},
                    {id:4, label:"广州"}
                ],

                loacl_select:"",
                treatment_select:[{id:4,label:"项目奖金"}],
                salary_select:"",

                local:[{id:1, label:"北京"},
                    {id:2, label:"安徽"},
                    {id:3, label:"上海"},
                    {id:4, label:"广州"}],
                treatment:[
                    {id:1, label:"五险一金"},
                    {id:2, label:"交通补助"},
                    {id:3, label:"带薪年假"},
                    {id:4, label:"项目奖金"}],
                salary:[{id:1, label:"4000以下"},
                    {id:2, label:"4000-6000"},
                    {id:3, label:"6000-8000"},
                    {id:4, label:"8000以上"}],
            }
        },
        methods: {
            _on_item_click: function (id, label) {
                console.log('_on_item_click', id, label);
            }

        },
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

</style>
