module.exports = {
    devServer: {
        proxy: {
            "/api/": {
                // target: "http://172.18.61.192:8098", //环保码内网
                target: "http://218.108.6.126:8888", //环保码外网
                // target: "http://220.191.216.151:5008", //湖州外网
                changeOrigin: true,
                pathRewrite: {
                    "^/api": ""
                }
            }
        }
    }
};