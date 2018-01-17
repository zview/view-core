<template>
    <div class="page-home">

        <List>
            <Item color="light" bg-color="positive" note="Basic">基础</Item>
            <Item @click.native="_on_goto_page('/demo/color')" note="Color">颜色</Item>
            <Item @click.native="_on_goto_page('/demo/font')" note="Font">字体</Item>
            <Item @click.native="_on_goto_page('/demo/theme')" note="Theme">多主题</Item>
            <Item @click.native="_on_goto_page('/demo/locale')" note="Locale">国际化</Item>
            <Item @click.native="_on_goto_page('/demo/transition')" note="Animation/Transition">动画/过渡</Item>
            <Item @click.native="_on_goto_page('/demo/icon')" note="Icon">图标</Item>
            <Item @click.native="_on_goto_page('/demo/button')" note="Button">按钮</Item>

            <Item color="light" bg-color="positive" note="Layout">布局</Item>
            <Item @click.native="_on_goto_page('/demo/grid')" note="Row/Col">栅格</Item>
            <Item @click.native="_on_goto_page('/demo/cells')" note="Cells">宫格</Item>
            <Item @click.native="_on_goto_page('/demo/list')" note="List/Item">列表</Item>
            <Item @click.native="_on_goto_page('/demo/table')" note="Table">表格</Item>
            <Item @click.native="_on_goto_page('/demo/panel')" note="Panel">面板</Item>
            <Item @click.native="_on_goto_page('/demo/card')" note="Card">卡片</Item>
            <Item @click.native="_on_goto_page('/demo/accordion')" note="Accordion/Collapse">折叠面板</Item>
            <Item @click.native="_on_goto_page('/demo/scalable')" note="Scalable">缩放</Item>
            <!--<Item @click.native="_on_goto_page('/demo/tree')" note="Tree">树形控件</Item>-->
            <!--<Item @click.native="_on_goto_page('/demo/timeline')" note="Timeline">时间轴</Item>-->
            <!--<Item @click.native="_on_goto_page('/demo/carousel')" note="Carousel">走马灯</Item>-->
            <Item @click.native="_on_goto_page('/demo/swiper')" note="Swiper">轮播</Item>
            <Item @click.native="_on_goto_page('/demo/scroller')" note="Refresh/Infinite">下拉刷新/自动加载</Item>
            <Item @click.native="_on_goto_page('/container1')" note="Page/Navbar/Tabbar">容器1</Item>
            <Item @click.native="_on_goto_page('/container2')" note="Content/Header/Footer">容器2</Item>

            <Item color="light" bg-color="positive" note="Navigation">导航</Item>
            <!--<Item @click.native="_on_goto_page('/demo/menu')" note="Menu">导航菜单</Item>-->
            <!--<Item @click.native="_on_goto_page('/demo/dropdown')" note="Dropdown">下拉菜单</Item>-->
            <!--<Item @click.native="_on_goto_page('/demo/pagination')" note="Pagination">分页</Item>-->
            <!--<Item @click.native="_on_goto_page('/demo/breadcrumb')" note="BreadCrumb">面包屑</Item>-->
            <!--<Item @click.native="_on_goto_page('/demo/steps')" note="Steps">步骤条</Item>-->
            <Item @click.native="_on_goto_page('/demo/tabs')" note="Tabs">标签页</Item>
            <!--<Item @click.native="_on_goto_page('/demo/loadingbar')" note="LoadingBar">加载进度条</Item>-->
            <Item @click.native="_on_goto_page('/demo/buttonbar')" note="ButtonBar">按钮栏</Item>
            <Item @click.native="_on_goto_page('/demo/actionbar')" note="ActionBar/ToolBar">工具栏</Item>
            <Item @click.native="_on_goto_page('/demo/tabbar')" note="Tabbar/Page">底部栏</Item>
            <Item @click.native="_on_goto_page('/navbar')" note="Navbar/Page">导航栏</Item>

            <Item color="light" bg-color="positive" note="Form">表单</Item>
            <Item @click.native="_on_goto_page('/demo/input')" note="Input">输入框</Item>
            <Item @click.native="_on_goto_page('/demo/radio')" note="Radio">单选框</Item>
            <Item @click.native="_on_goto_page('/demo/check')" note="Check">复选框</Item>
            <Item @click.native="_on_goto_page('/demo/toggle')" note="Toggle">切换器</Item>
            <Item @click.native="_on_goto_page('/demo/select')" note="Select">下拉框</Item>
            <Item @click.native="_on_goto_page('/demo/search')" note="Search">搜索框</Item>
            <Item @click.native="_on_goto_page('/demo/slider')" note="Slider">滑动条</Item>
            <Item @click.native="_on_goto_page('/demo/cascade')" note="Cascade">级联选择</Item>
            <!--<Item @click.native="_on_goto_page('/demo/picker')" note="Picker">选择器</Item>-->
            <Item @click.native="_on_goto_page('/demo/datepicker')" note="DatePicker">日期选择</Item>
            <!--<Item @click.native="_on_goto_page('/demo/timepicker')" note="TimerPicker">时间选择</Item>-->
            <Item @click.native="_on_goto_page('/demo/regionpicker')" note="RegionPicker">地区选择</Item>
            <!--<Item @click.native="_on_goto_page('/demo/colorpicker')" note="ColorPicker">颜色选择</Item>-->
            <!--<Item @click.native="_on_goto_page('/demo/tranfer')" note="Transfer">穿梭框</Item>-->
            <!--<Item @click.native="_on_goto_page('/demo/number')" note="Number">数字输入</Item>-->
            <!--<Item @click.native="_on_goto_page('/demo/rate')" note="Rate">星级评分</Item>-->
            <Item @click.native="_on_goto_page('/demo/upload')" note="Upload">文件上传</Item>
            <Item @click.native="_on_goto_page('/demo/form')" note="Form">表单</Item>

            <Item color="light" bg-color="positive" note="View">视图</Item>
            <!--<Item @click.native="_on_goto_page('/demo/message')" note="Message">全局提示</Item>-->
            <!--<Item @click.native="_on_goto_page('/demo/notice')" note="Notice">通知提醒</Item>-->
            <Item @click.native="_on_goto_page('/demo/progress')" note="Progress">进度条</Item>
            <Item @click.native="_on_goto_page('/demo/badge')" note="Badge">徽标</Item>
            <Item @click.native="_on_goto_page('/demo/tag')" note="Tag">标签</Item>
            <!--<Item @click.native="_on_goto_page('/demo/tooltip')" note="Tooltip">文字提示</Item>-->
            <!--<Item @click.native="_on_goto_page('/demo/poptip')" note="Poptip">气泡提示</Item>-->
            <!--<Item @click.native="_on_goto_page('/demo/backtop')" note="BackTop">回到顶部</Item>-->
            <Item @click.native="_on_goto_page('/demo/stars')" note="Stars">星级</Item>

            <Item color="light" bg-color="positive" note="Chart">图表</Item>
            <Item @click.native="_on_goto_page('/demo/circle')" note="Circle">进度环</Item>
            <Item @click.native="_on_goto_page('/demo/chinamap')" note="ChinaMap">中国省市图</Item>

            <Item color="light" bg-color="positive" note="Other">其他</Item>
            <Item @click.native="_on_goto_page('/demo/editor')" note="Editor">编辑器</Item>

            <Item color="light" bg-color="positive" note="Service">服务</Item>
            <Item @click.native="_on_backdrop" note="Backdrop">全屏遮罩</Item>
            <Item @click.native="_on_toast" note="Toast">一般提示</Item>
            <Item @click.native="_on_loading" note="Loading/Spin">加载提示</Item>
            <Item @click.native="_on_goto_page('/demo/actionsheet')" note="ActionSheet">操作列表</Item>
            <Item @click.native="_on_goto_page('/demo/dialog')" note="Alert/Confirm">对话框</Item>
            <Item @click.native="_on_goto_page('/demo/popup')" note="Popup">自定义弹层</Item>
            <Item @click.native="_on_toggle_sidebar_left" note="Sidebar">侧边栏</Item>
            <Item @click.native="_on_goto_page('/demo/modal')" note="Modal">模态框</Item>

            <Item color="light" bg-color="positive" note="Advanced">高级</Item>
            <Item @click.native="_on_goto_page('/directive')" note="Directive">指令</Item>
            <Item @click.native="_on_goto_page('/filter')" note="Filter">过滤器</Item>

            <Item color="light" bg-color="positive" note="Sample">示例</Item>
            <Item @click.native="_on_goto_page('/sample_css')" note="CSS/SCSS">样式表</Item>
            <Item @click.native="_on_goto_page('/sample_transition')" note="Transition">过渡效果</Item>
            <Item @click.native="_on_goto_page('/sample_animation')" note="Animation">动画效果</Item>
            <Item @click.native="_on_goto_page('/sample_mediaquery')" note="MediaQuery">媒体查询</Item>
            <Item @click.native="_on_goto_page('/sample_dyncontent')" note="DynamicContent">动态内容</Item>
            <Item @click.native="_on_goto_page('/sample_dice')" note="DiceLayout">骰子布局</Item>
            <Item @click.native="_on_goto_page('/sample_grid')" note="GridLayout">网格布局</Item>
            <Item @click.native="_on_goto_page('/sample_holy')" note="HolyGrailLayout">圣杯布局</Item>
            <Item @click.native="_on_goto_page('/sample_input')" note="InputLayout">输入框布局</Item>
            <Item @click.native="_on_goto_page('/sample_hang')" note="HangLayout">悬挂式布局</Item>
            <Item @click.native="_on_goto_page('/sample_fixed')" note="FixedLayout">固定底栏</Item>
            <Item @click.native="_on_goto_page('/sample_flow')" note="FlowLayout">流式布局</Item>

        </List>

    </div>
</template>

<script>
    export default {
        data () {
            return {
                message: '示例',
                sidebarLeft: undefined,
                sidebarRight: undefined,
            }
        },
        mounted() {
            let vm = this;
            let template = `
                <p style="font-size: 13px;">
                No man is an island,<br>
                entire of itself.<br>
                Every man is a piece of the continent,<br>
                a part of the main.<br>
                If a clod be washed away by the sea,<br>
                Europe is the less,<br>
                as well as if a promontory were,<br>
                as well as if a manor of thy friend's or of thine own were.<br>
                Any man's death diminishes me.<br>
                Because I am involved in mankind.<br>
                And,<br>
                therefore,<br>
                never send to know for whom the bells tolls,<br>
                it tolls for thee.<br>
                </p>
              `;

            vm.sidebarLeft = vm.$sidebar.fromTemplate(template, {position: 'left'})

            vm.sidebarRight = vm.$sidebar.fromTemplate('<h5>右边栏</h5>', {position: 'right'})

        },

        destroyed() {
            let vm = this;
            vm.$sidebar.destroy()
        },
        methods: {
            _on_goto_page: function (page) {
                console.log('_on_goto_page', page);
                let vm = this;
                vm.$router.push(page);
            },

            _on_toast: function () {
                console.log('_on_toast');
                let vm = this;

                vm.$toast.show('发送成功', 1500).then(() => {
                    console.log('toast hide');
                });
            },

            _on_loading: function () {
                console.log('_on_loading');
                let vm = this;

                vm.$loading.show('正在加载中');

                setTimeout(() => {
                    vm.$loading.hide();
                }, 2000);
            },

            _on_backdrop: function () {
                console.log('_on_backdrop');
                let vm = this;

                vm.$backdrop.show(true);

                setTimeout(() => {
                    vm.$backdrop.hide();
                }, 2000);
            },

            _on_toggle_sidebar_left() {
                this.sidebarLeft.toggle();
            },

            _on_toggle_sidebar_right() {
                this.sidebarRight.toggle();
            }
        },
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

</style>
