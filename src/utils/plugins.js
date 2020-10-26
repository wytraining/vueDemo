import ECharts from '@/components/Echarts.vue';

export default {
    install: (Vue, options) => {
        //echarts的vue组件
        Vue.component('v-chart', ECharts);
    }
}
