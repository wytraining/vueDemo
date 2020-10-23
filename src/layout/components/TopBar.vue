<template>
    <div class="header-bar">
        <Menu mode="horizontal" theme="primary" :active-name="activeNav">
            <MenuItem name="scroll"
                      to="/main/scroll">
                <Icon type="ios-map"/>
                <span>scrollDemo</span>
            </MenuItem>
            <MenuItem name="echarts"
                      to="/main/echarts">
                <Icon type="ios-map"/>
                <span>echartsDemo</span>
            </MenuItem>
            <Submenu name="3">
                <template slot="title">
                    <Icon type="md-person"/>
                    <span>admin</span>
                </template>
                <MenuItem name="3-1">
                    <span @click="logout">注销登录</span>
                </MenuItem>
            </Submenu>
        </Menu>
    </div>
</template>

<script>
    export default {
        name: "TopBar",
        data() {
            return {
                activeNav: this.$route.matched[1].meta.name
            }
        },
        methods: {
            logout() {
                // this.$http.get("/logout").then(res => {
                //     this.$router.push("/login");
                // }).catch(err => {
                //     console.log(err);
                // });

                this.$router.push("/login");
            }
        }
    }
</script>
