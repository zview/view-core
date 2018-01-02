const page_404 = {template: '<div><h2>页面未找到</h2></div>'}
const page_user = {template: '<div>用户 {{ $route.params.id }}<router-view></router-view></div>'}
const page_user_home = {template: '<div>用户主页</div>'}
const page_user_profile = {template: '<div>用户详情</div>'}
const page_user_posts = {template: '<div>用户话题</div>'}

const routers = [
    {
        path: '/',
        redirect: '/index'
    },
    {
        path: '/index',
        meta: {title: '首页'},
        component: (resolve) => require(['../page/index.vue'], resolve),
    },
    {
        path: '/demo',
        component: (resolve) => require(['../page/page_demo.vue'], resolve),
        children: [
            {
                path: '',
                meta: {title: '示例'},
                component: (resolve) => require(['../page/page_home.vue'], resolve),
            },

            //Basic
            {
                path: 'color',
                meta: {title: '颜色'},
                component: (resolve) => require(['../page/page_basic_color.vue'], resolve),
            },
            {
                path: 'font',
                meta: {title: '字体'},
                component: (resolve) => require(['../page/page_basic_font.vue'], resolve),
            },
            {
                path: 'theme',
                meta: {title: '多主题'},
                component: (resolve) => require(['../page/page_basic_theme.vue'], resolve),
            },
            {
                path: 'locale',
                meta: {title: '国际化'},
                component: (resolve) => require(['../page/page_basic_locale.vue'], resolve),
            },
            {
                path: 'transition',
                meta: {title: '动画/过渡'},
                component: (resolve) => require(['../page/page_basic_transition.vue'], resolve),
            },
            {
                path: 'icon',
                meta: {title: '图标'},
                component: (resolve) => require(['../page/page_basic_icon.vue'], resolve),
            },
            {
                path: 'button',
                meta: {title: '按钮'},
                component: (resolve) => require(['../page/page_basic_button.vue'], resolve),
            },

            //Layout
            {
                path: 'grid',
                meta: {title: '栅格'},
                component: (resolve) => require(['../page/page_layout_grid.vue'], resolve),
            },
            {
                path: 'list',
                meta: {title: '列表'},
                component: (resolve) => require(['../page/page_layout_list.vue'], resolve),
            },
            {
                path: 'cells',
                meta: {title: '宫格'},
                component: (resolve) => require(['../page/page_layout_cells.vue'], resolve),
            },
            {
                path: 'panel',
                meta: {title: '面板'},
                component: (resolve) => require(['../page/page_layout_panel.vue'], resolve),
            },
            {
                path: 'card',
                meta: {title: '卡片'},
                component: (resolve) => require(['../page/page_layout_card.vue'], resolve),
            },
            {
                path: 'accordion',
                meta: {title: '折叠面板'},
                component: (resolve) => require(['../page/page_layout_accordion.vue'], resolve),
            },
            {
                path: 'swiper',
                meta: {title: '轮播'},
                component: (resolve) => require(['../page/page_layout_swiper.vue'], resolve),
            },
            {
                path: 'swiper/default',
                meta: {title: '轮播默认'},
                component: (resolve) => require(['../page/page_layout_swiper_default.vue'], resolve),
            },
            {
                path: 'swiper/vertical',
                meta: {title: '轮播垂直'},
                component: (resolve) => require(['../page/page_layout_swiper_vertical.vue'], resolve),
            },
            {
                path: 'scalable',
                meta: {title: '缩放'},
                component: (resolve) => require(['../page/page_layout_scalable.vue'], resolve),
            },

            //Navigator
            {
                path: 'tabbar',
                meta: {title: '底部栏'},
                component: (resolve) => require(['../page/page_nav_tabbar.vue'], resolve),
            },
            {
                path: 'buttonbar',
                meta: {title: '按钮栏'},
                component: (resolve) => require(['../page/page_nav_buttonbar.vue'], resolve),
            },
            {
                path: 'tabs',
                meta: {title: '标签页'},
                component: (resolve) => require(['../page/page_nav_tabs.vue'], resolve),
            },

            //Form
            {
                path: 'input',
                meta: {title: '输入框'},
                component: (resolve) => require(['../page/page_form_input.vue'], resolve),
            },
            {
                path: 'radio',
                meta: {title: '单选框'},
                component: (resolve) => require(['../page/page_form_radio.vue'], resolve),
            },
            {
                path: 'check',
                meta: {title: '复选框'},
                component: (resolve) => require(['../page/page_form_check.vue'], resolve),
            },
            {
                path: 'toggle',
                meta: {title: '切换器'},
                component: (resolve) => require(['../page/page_form_toggle.vue'], resolve),
            },
            {
                path: 'select',
                meta: {title: '下拉框'},
                component: (resolve) => require(['../page/page_form_select.vue'], resolve),
            },
            {
                path: 'search',
                meta: {title: '搜索框'},
                component: (resolve) => require(['../page/page_form_search.vue'], resolve),
            },
            {
                path: 'slider',
                meta: {title: '滑动条'},
                component: (resolve) => require(['../page/page_form_slider.vue'], resolve),
            },
            {
                path: 'cascade',
                meta: {title: '级联选择'},
                component: (resolve) => require(['../page/page_form_cascade.vue'], resolve),
            },
            {
                path: 'datepicker',
                meta: {title: '日期选择'},
                component: (resolve) => require(['../page/page_form_datepicker.vue'], resolve),
            },
            {
                path: 'upload',
                meta: {title: '文件上传'},
                component: (resolve) => require(['../page/page_form_upload.vue'], resolve),
            },
            {
                path: 'form',
                meta: {title: '表单'},
                component: (resolve) => require(['../page/page_form_form.vue'], resolve),
            },

            //View
            {
                path: 'badge',
                meta: {title: '徽标'},
                component: (resolve) => require(['../page/page_view_badge.vue'], resolve),
            },
            {
                path: 'progress',
                meta: {title: '进度条'},
                component: (resolve) => require(['../page/page_view_progress.vue'], resolve),
            },
            {
                path: 'condition',
                meta: {title: '条件选择'},
                component: (resolve) => require(['../page/page_view_condition.vue'], resolve),
            },

            //Other
            {
                path: 'editor',
                meta: {title: '编辑器'},
                component: (resolve) => require(['../page/page_editor.vue'], resolve),
            },

            //Service
            {
                path: 'actionsheet',
                meta: {title: '操作列表'},
                component: (resolve) => require(['../page/page_service_actionsheet.vue'], resolve),
            },
            {
                path: 'dialog',
                meta: {title: '对话框'},
                component: (resolve) => require(['../page/page_service_dialog.vue'], resolve),
            },
            {
                path: 'popup',
                meta: {title: '自定义弹层'},
                component: (resolve) => require(['../page/page_service_popup.vue'], resolve),
            },
            {
                path: 'modal',
                meta: {title: '模态框'},
                component: (resolve) => require(['../page/page_service_modal.vue'], resolve),
            },

        ]
    },
    //Navigation
    {
        path: '/navbar',
        meta: {title: '导航栏'},
        component: (resolve) => require(['../page/page_nav_navbar.vue'], resolve),
    },
    //Layout
    {
        path: '/container1',
        meta: {title: '容器1'},
        component: (resolve) => require(['../page/page_layout_container1.vue'], resolve),
    },
    {
        path: '/container2',
        meta: {title: '容器2'},
        component: (resolve) => require(['../page/page_layout_container2.vue'], resolve),
    },
    {
        path: '/scroller',
        meta: {title: '下拉刷新/自动加载'},
        component: (resolve) => require(['../page/page_layout_scroller.vue'], resolve),
    },
    //Sample
    {
        path: '/sample_css',
        meta: {title: '样式表'},
        component: (resolve) => require(['../page/sample_css.vue'], resolve),
    },
    {
        path: '/sample_animation',
        meta: {title: '动画'},
        component: (resolve) => require(['../page/sample_animation.vue'], resolve),
    },
    {
        path: '/sample_transition',
        meta: {title: '过渡'},
        component: (resolve) => require(['../page/sample_transition.vue'], resolve),
    },
    //Directive
    {
        path: '/directive',
        meta: {title: '指令'},
        component: (resolve) => require(['../page/page_directive.vue'], resolve),
    },
    //Filter
    {
        path: '/filter',
        meta: {title: '过滤器'},
        component: (resolve) => require(['../page/page_filter.vue'], resolve),
    },
    //Embed
    {
        path: '/user/:id',
        meta: {title: '用户详情', requireAuthorize: true, requirePermision: 'user', requireWxAuth: true},
        component: page_user,
        children: [
            {
                // 当 /user/:id 匹配成功，
                // UserHome 会被渲染在 User 的 <router-view> 中
                path: '',
                component: page_user_home
            },
            {
                // 当 /user/:id/profile 匹配成功，
                // UserProfile 会被渲染在 User 的 <router-view> 中
                path: 'profile',
                component: page_user_profile
            },
            {
                // 当 /user/:id/posts 匹配成功
                // UserPosts 会被渲染在 User 的 <router-view> 中
                path: 'posts',
                component: page_user_posts
            }
        ]
    },
    {
        path: '*', //默认页面
        meta: {title: '提示信息', requireAuthorize: false, requirePermision: '',},
        component: page_404
    },

];
export default routers;
