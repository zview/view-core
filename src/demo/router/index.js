const page_404  = { template: '<div><h2>页面未找到</h2></div>' }
const page_user = { template: '<div>用户 {{ $route.params.id }}<router-view></router-view></div>'}
const page_user_home = { template: '<div>用户主页</div>'}
const page_user_profile = { template: '<div>用户详情</div>'}
const page_user_posts = { template: '<div>用户话题</div>'}

const routers = [
    {
        path: '/',
        redirect: '/index'
    },
    {
        path: '/index',
        meta: { title: '启动页面' },
        component: (resolve) => require(['../page/index.vue'], resolve),
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
