<template>
    <div class="main-view">
        <top-bar></top-bar>
        <app-main></app-main>
    </div>
</template>

<script>
    import { TopBar, AppMain } from './components';
    import axios from "axios";
    import store from '@/stores';

    export default {
        name: "Main",
        components: {
            TopBar,
            AppMain,
        },
        data() {
            return {}
        },
        beforeRouteEnter(to, from, next) {
            axios.get('/epcode/app/getCurrentUser').then(res => { //一般为获取用户信息，error则未登录
                if (res.status === 200) {
                    store.commit('getUserInfo', res.data);
                    next(true);
                } else {
                    next(false)
                }
            }).catch(err => {
                next(true);
            })
        },

    }
</script>

<style scoped>

</style>