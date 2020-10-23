import Vue from 'vue';
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '',
            redirect: '/main'
        },
        {
            path: '/login',
            component: () => import('./views/Login.vue'),
        },
        {
            path: '/main',
            component: () => import('./layout/Main.vue'),
            children: [
                {
                    path: '',
                    redirect: 'echarts',
                },
                {
                    path: 'echarts',
                    meta: {
                        name: 'echarts'
                    },
                    component: () => import('./views/Echarts.vue'),
                },
                {
                    path: 'scroll',
                    meta: {
                        name: 'scroll'
                    },
                    component: () => import('./views/Scroll.vue'),
                }
            ]
        }
    ]
})