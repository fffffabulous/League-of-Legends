import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from './views/Login.vue'
import Main from './views/main.vue'
import CategoryEdit from './views/CategoryEdit.vue'
import CategoryList from './views/CategoryList.vue'

import ItemEdit from './views/ItemEdit.vue'
import ItemList from './views/ItemList.vue'

import HeroEdit from './views/HeroEdit.vue'
import HeroList from './views/HeroList.vue'

import ArticleEdit from './views/ArticleEdit.vue'
import ArticleList from './views/ArticleList.vue'

import AdEdit from './views/AdEdit.vue'
import AdList from './views/AdList.vue'

import AdminUserEdit from './views/AdminUserEdit.vue'
import AdminUserList from "./views/AdminUserList";

import Welcome from "./views/welcome";


Vue.use(VueRouter)


// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}


const routes = [
    //给登录页面加meta允许直接访问 其他页面必须登录才可以访问
    {path: '/login', name: 'login', component: Login, meta: {isPublic: true}},
    {
        path: '/',
        name: 'main',
        component: Main,
        redirect: '/Welcome',
        children: [

            { path: '/welcome', component: Welcome },

            {path: 'categories/create', component: CategoryEdit},
            {path: 'categories/list', component: CategoryList},
            {path: 'categories/edit/:id', component: CategoryEdit, props: true},

            {path: 'items/create', component: ItemEdit},
            {path: 'items/list', component: ItemList},
            {path: 'items/edit/:id', component: ItemEdit, props: true},

            {path: 'heroes/create', component: HeroEdit},
            {path: 'heroes/list', component: HeroList},
            {path: 'heroes/edit/:id', component: HeroEdit, props: true},

            {path: 'articles/create', component: ArticleEdit},
            {path: 'articles/list', component: ArticleList},
            {path: 'articles/edit/:id', component: ArticleEdit, props: true},

            {path: 'ads/create', component: AdEdit},
            {path: 'ads/list', component: AdList},
            {path: 'ads/edit/:id', component: AdEdit, props: true},

            {path: 'admin_users/create', component: AdminUserEdit},
            {path: 'admin_users/list', component: AdminUserList},
            {path: 'admin_users/edit/:id', component: AdminUserEdit, props: true}

        ]
    },
]

const router = new VueRouter({
    routes
})

router.beforeEach((to, from, next) => {
    //console.log('to.meta', to.meta) meta为{} 只有在login页面{ isPablic: true}
    //所以根据此判断
    if(!to.meta.isPublic && !localStorage.token) {
        return next('/login')
    }

    next()
})

export default router