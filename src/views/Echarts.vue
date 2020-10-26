<template>
    <div class="echarts">
        <v-chart
                :options="options"
                :autoResize="true"
                style="width:50%;height:100%;display: inline-block">
        </v-chart>
        <v-chart
                :options="liquidFill"
                :autoResize="true"
                style="width:50%;height:100%;display: inline-block">
        </v-chart>
    </div>
</template>

<script>
    export default {
        name: "Echarts",
        data() {
            return {
                options: {
                    title: {
                        text: "ECharts 入门示例"
                    },
                    tooltip: {},
                    xAxis: {
                        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
                    },
                    yAxis: {},
                    series: [
                        {
                            name: "销量",
                            type: "bar",
                            data: [5, 20, 36, 10, 10, 20]
                        }
                    ]
                },
                liquidFill: {
                    title: {
                        text: '基本水球图'
                    },
                    series: [{
                        type: 'liquidFill',
                        data: [0.6]
                    }]
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .echarts {
        height: 100%;
        width: 100%;

    }
</style>