import Vue from 'vue'
import App from './App.vue'
import router from './router.js'

import './styles/index.scss'

import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
Vue.use(ViewUI);

import axios from 'axios';
Vue.prototype.$http = axios;

if (process.env.NODE_ENV === 'development') {
    //开发环境 do something
    axios.defaults.baseURL = "./api";
} else {
    //生产环境 do something
}

Vue.config.productionTip = false;

// http response 服务器响应拦截器，这里拦截401错误，并重新跳入登页
axios.interceptors.response.use(response => {
    return response;
}, error => {
    if (error.response) {
        switch (error.response.status) {
            case 401:
                router.replace({
                    path: '/login',
                });
                break;
            case 403:
                router.replace({
                    path: '/login',
                });
                break;
            default:
                try {
                    if (error.response.request.responseURL.includes('authox/curUser')) {
                        router.replace({
                            path: '/login',
                        });
                    }
                } catch (e) {
                    console.log(e)
                }
        }
    }
    return Promise.reject(error.response)
});

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');
