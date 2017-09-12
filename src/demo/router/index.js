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
    meta: { title: '首页' },
    component: (resolve) => require(['../page/index.vue'], resolve),
  },
  {
    path: '/demo',
    meta: { title: '示例' },
    component: (resolve) => require(['../page/page_demo.vue'], resolve),
    children: [
      {
        path: '',
        component: (resolve) => require(['../page/page_home.vue'], resolve),
      },

      //Basic
      {
        path: 'color',
        meta: { title: '颜色' },
        component: (resolve) => require(['../page/page_color.vue'], resolve),
      },
      {
        path: 'font',
        meta: { title: '字体' },
        component: (resolve) => require(['../page/page_font.vue'], resolve),
      },
      {
        path: 'icon',
        meta: { title: '图标' },
        component: (resolve) => require(['../page/page_icon.vue'], resolve),
      },
      {
        path: 'button',
        meta: { title: '按钮' },
        component: (resolve) => require(['../page/page_button.vue'], resolve),
      },
      {
        path: 'theme',
        meta: { title: '主题' },
        component: (resolve) => require(['../page/page_theme.vue'], resolve),
      },
      {
        path: 'locale',
        meta: { title: '国际化' },
        component: (resolve) => require(['../page/page_locale.vue'], resolve),
      },

      //Layout
      {
        path: 'grid',
        meta: { title: '栅格' },
        component: (resolve) => require(['../page/page_grid.vue'], resolve),
      },
      {
        path: 'list',
        meta: { title: '列表' },
        component: (resolve) => require(['../page/page_list.vue'], resolve),
      },

      //Navigator
      {
        path: 'buttonbar',
        meta: { title: '按钮栏' },
        component: (resolve) => require(['../page/page_buttonbar.vue'], resolve),
      },
      {
        path: 'tabs',
        meta: { title: '标签页' },
        component: (resolve) => require(['../page/page_tabs.vue'], resolve),
      },
      {
        path: 'tabsstriped',
        meta: { title: '标签页(下划线)' },
        component: (resolve) => require(['../page/page_tabsstriped.vue'], resolve),
      },


      //Form
      {
        path: 'input',
        meta: { title: '输入框' },
        component: (resolve) => require(['../page/page_input.vue'], resolve),
      },
      {
        path: 'radio',
        meta: { title: '单选框' },
        component: (resolve) => require(['../page/page_radio.vue'], resolve),
      },
      {
        path: 'check',
        meta: { title: '复选框' },
        component: (resolve) => require(['../page/page_check.vue'], resolve),
      },
      {
        path: 'search',
        meta: { title: '搜索框' },
        component: (resolve) => require(['../page/page_search.vue'], resolve),
      },
      {
        path: 'select',
        meta: { title: '下拉框' },
        component: (resolve) => require(['../page/page_select.vue'], resolve),
      },
      {
        path: 'toggle',
        meta: { title: '切换器' },
        component: (resolve) => require(['../page/page_toggle.vue'], resolve),
      },
      {
        path: 'slider',
        meta: { title: '滑动条' },
        component: (resolve) => require(['../page/page_slider.vue'], resolve),
      },
      {
        path: 'upload',
        meta: { title: '文件上传' },
        component: (resolve) => require(['../page/page_upload.vue'], resolve),
      },
      {
        path: 'form',
        meta: { title: '表单' },
        component: (resolve) => require(['../page/page_form.vue'], resolve),
      },

      //View
      {
        path: 'alert',
        meta: { title: '告警提示' },
        component: (resolve) => require(['../page/page_alert.vue'], resolve),
      },
      {
        path: 'badge',
        meta: { title: '徽标' },
        component: (resolve) => require(['../page/page_badge.vue'], resolve),
      },
      {
        path: 'progress',
        meta: { title: '进度条' },
        component: (resolve) => require(['../page/page_progress.vue'], resolve),
      },

      //Other
      {
        path: 'editor',
        meta: { title: '编辑器' },
        component: (resolve) => require(['../page/page_editor.vue'], resolve),
      },


    ]
  },
  {
    path: '/tabbar',
    meta: { title: '底部栏' },
    component: (resolve) => require(['../page/page_tabbar.vue'], resolve),
  },
  {
    path: '/navbar',
    meta: { title: '导航栏' },
    component: (resolve) => require(['../page/page_navbar.vue'], resolve),
  },
  {
    path: '/container',
    meta: { title: '布局' },
    component: (resolve) => require(['../page/page_container.vue'], resolve),
  },
  //Sample
  {
    path: '/sample_css',
    meta: { title: '样式表' },
    component: (resolve) => require(['../page/page_css.vue'], resolve),
  },
  //Directive
  {
    path: '/directive',
    meta: { title: '指令' },
    component: (resolve) => require(['../page/page_directive.vue'], resolve),
  },
  //Filter
  {
    path: '/filter',
    meta: { title: '过滤器' },
    component: (resolve) => require(['../page/page_filter.vue'], resolve),
  },
  {
    path: '/user/:id',
    meta: { title: '用户详情', requireAuthorize: true, requirePermision: 'user', requireWxAuth: true },
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
    meta: { title: '提示信息', requireAuthorize: false, requirePermision: '', },
    component: page_404
  },

];
export default routers;
