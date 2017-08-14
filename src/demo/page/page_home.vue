<template>
    <div class="page-home">

        <List>
            <Item :divider="true" color="positive" note="Basic">基础</Item>
            <Item @click.native="_on_goto_page('/demo/color')" note="Color">颜色</Item>
            <Item @click.native="_on_goto_page('/demo/font')" note="Font">字体</Item>
            <Item @click.native="_on_goto_page('/demo/icon')" note="Icon">图标</Item>
            <Item @click.native="_on_goto_page('/demo/button')" note="Button">按钮</Item>
            <Item @click.native="_on_goto_page('/demo/theme')" note="Theme">主题</Item>
            <Item @click.native="_on_goto_page('/demo/locale')" note="Locale">国际化</Item>

            <Item :divider="true" color="positive" note="Layout">布局</Item>
            <Item @click.native="_on_goto_page('/demo/grid')" note="Grid">栅格</Item>
            <Item @click.native="_on_goto_page('/demo/list')" note="List">列表</Item>
            <Item @click.native="_on_goto_page('/demo/table')" note="Table">表格</Item>
            <Item @click.native="_on_goto_page('/demo/card')" note="Card">卡片</Item>
            <Item @click.native="_on_goto_page('/demo/panel')" note="Panel">面板</Item>
            <Item @click.native="_on_goto_page('/demo/collapse')" note="Collapse">折叠面板</Item>
            <Item @click.native="_on_goto_page('/demo/tree')" note="Tree">树形控件</Item>
            <Item @click.native="_on_goto_page('/demo/timeline')" note="Timeline">时间轴</Item>
            <Item @click.native="_on_goto_page('/demo/carousel')" note="Carousel">走马灯</Item>
            <Item @click.native="_on_goto_page('/container')" note="Container">布局</Item>

            <Item :divider="true" color="positive" note="Navigation">导航</Item>
            <Item @click.native="_on_goto_page('/demo/menu')" note="Menu">导航菜单</Item>
            <Item @click.native="_on_goto_page('/demo/dropdown')" note="Dropdown">下拉菜单</Item>
            <Item @click.native="_on_goto_page('/demo/pagination')" note="Pagination">分页</Item>
            <Item @click.native="_on_goto_page('/demo/breadcrumb')" note="BreadCrumb">面包屑</Item>
            <Item @click.native="_on_goto_page('/demo/steps')" note="Steps">步骤条</Item>
            <Item @click.native="_on_goto_page('/demo/tabs')" note="Tabs">标签页</Item>
            <Item @click.native="_on_goto_page('/demo/tabs2')" note="Tabs">标签页2</Item>
            <Item @click.native="_on_goto_page('/demo/loadingbar')" note="LoadingBar">加载进度条</Item>
            <Item @click.native="_on_goto_page('/demo/buttonbar')" note="ButtonBar">按钮栏</Item>
            <Item @click.native="_on_goto_page('/demo/toolbar')" note="ToolBar">工具栏</Item>
            <Item @click.native="_on_goto_page('/demo/tabbar')" note="Tabbar">底部栏</Item>
            <Item @click.native="_on_goto_page('/demo/navbar')" note="Navbar">导航栏</Item>
            <Item @click.native="_on_goto_page('/demo/sidebar')" note="Sidebar">侧边栏</Item>

            <Item :divider="true" color="positive" note="Form">表单</Item>
            <Item @click.native="_on_goto_page('/demo/input')" note="Input">输入框</Item>
            <Item @click.native="_on_goto_page('/demo/radio')" note="Radio">单选框</Item>
            <Item @click.native="_on_goto_page('/demo/check')" note="Check">复选框</Item>
            <Item @click.native="_on_goto_page('/demo/toggle')" note="Toggle">开关</Item>
            <Item @click.native="_on_goto_page('/demo/select')" note="Select">选择器</Item>
            <Item @click.native="_on_goto_page('/demo/search')" note="Search">搜索框</Item>
            <Item @click.native="_on_goto_page('/demo/slider')" note="Slider">滑块</Item>
            <Item @click.native="_on_goto_page('/demo/datepicker')" note="DatePicker">日期选择</Item>
            <Item @click.native="_on_goto_page('/demo/timepicker')" note="TimerPicker">时间选择</Item>
            <Item @click.native="_on_goto_page('/demo/regionpicker')" note="RegionPicker">地区选择</Item>
            <Item @click.native="_on_goto_page('/demo/colorpicker')" note="ColorPicker">颜色选择</Item>
            <Item @click.native="_on_goto_page('/demo/cascader')" note="Cascader">级联选择</Item>
            <Item @click.native="_on_goto_page('/demo/tranfer')" note="Transfer">穿梭框</Item>
            <Item @click.native="_on_goto_page('/demo/number')" note="Number">数字输入</Item>
            <Item @click.native="_on_goto_page('/demo/rate')" note="Rate">评分</Item>
            <Item @click.native="_on_goto_page('/demo/upload')" note="Upload">上传</Item>
            <Item @click.native="_on_goto_page('/demo/form')" note="Form">表单</Item>

            <Item :divider="true" color="positive" note="View">视图</Item>
            <Item @click.native="_on_goto_page('/demo/alert')" note="Alert">告警提示</Item>
            <Item @click.native="_on_goto_page('/demo/confirm')" note="Confirm">确认提示</Item>
            <Item @click.native="_on_goto_page('/demo/toast')" note="Toast">一般提示</Item>
            <Item @click.native="_on_goto_page('/demo/message')" note="Message">全局提示</Item>
            <Item @click.native="_on_goto_page('/demo/notice')" note="Notice">通知提醒</Item>
            <Item @click.native="_on_goto_page('/demo/modal')" note="Modal">模态框</Item>
            <Item @click.native="_on_goto_page('/demo/progress')" note="Progress">进度条</Item>
            <Item @click.native="_on_goto_page('/demo/badge')" note="Badge">徽标</Item>
            <Item @click.native="_on_goto_page('/demo/tag')" note="Tag">标签</Item>
            <Item @click.native="_on_goto_page('/demo/tooltip')" note="Tooltip">文字提示</Item>
            <Item @click.native="_on_goto_page('/demo/poptip')" note="Cascader">气泡提示</Item>
            <Item @click.native="_on_goto_page('/demo/loading')" note="Loading">加载提示</Item>

            <Item :divider="true" color="positive" note="Chart">图表</Item>
            <Item @click.native="_on_goto_page('/demo/circle')" note="Circle">进度环</Item>
            <Item @click.native="_on_goto_page('/demo/chinamap')" note="ChinaMap">中国省市图</Item>

            <Item :divider="true" color="positive" note="Other">其他</Item>
            <Item @click.native="_on_goto_page('/demo/backtop')" note="BackTop">回到顶部</Item>
            <Item @click.native="_on_goto_page('/demo/spin')" note="Spin">进度条</Item>

            <Item :divider="true" color="positive" note="Other">高级</Item>
            <Item @click.native="_on_goto_page('/demo/directive')" note="Directive">指令</Item>
            <Item @click.native="_on_goto_page('/demo/filter')" note="Filter">Filter</Item>

        </List>

    </div>
</template>

<script>
    export default {
        data () {
            return {
                message: '示例',
            }
        },
        methods: {
            _on_goto_page: function (page) {
                console.log('_on_goto_page', page);
                let vm = this;

                vm.$router.push(page);
            }
        },
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

</style>
