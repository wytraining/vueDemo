<template>
    <div class="login_body">
        <div class="login_main">
            <div class="login_main_title"></div>
            <div class="login_main_list">
                <Form ref="loginForm" :model="loginForm" :rules="ruleForm" :label-width="0">
                    <FormItem prop="userName">
                        <Input type="text" v-model="loginForm.userName" placeholder="用户名" size="large" @keyup.enter.native="loginSubmit('loginForm')">
                            <Icon type="ios-person-outline" slot="prepend"></Icon>
                        </Input>
                    </FormItem>
                    <FormItem prop="password">
                        <Input type="password" v-model="loginForm.password" placeholder="密码" size="large" @keyup.enter.native="loginSubmit('loginForm')">
                            <Icon type="ios-lock-outline" slot="prepend"></Icon>
                        </Input>
                    </FormItem>
                    <FormItem>
                        <Button type="primary" @click.prevent="loginSubmit('loginForm')" size="large" long>登 录</Button>
                    </FormItem>
                </Form>
            </div>
        </div>
    </div>
</template>

<script>
    import qs from 'qs';
    export default {
        data() {
            const validateName = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('用户名不能为空'));
                } else {
                    callback();
                }
            };
            const validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('密码不能为空'));
                } else {
                    callback();
                }
            };
            return {
                codeImg: "",
                codeCheck: {},
                loginForm: {
                    userName: "",
                    codeValue: "",
                    password: ""
                },
                ruleForm: {
                    userName: [{
                        validator: validateName,
                        trigger: 'blur'
                    }],
                    password: [{
                        validator: validatePass,
                        trigger: 'blur'
                    }],
                    // codeValue: [{
                    // 	validator: validateCode,
                    // 	trigger: 'blur'
                    // }]
                }
            };
        },
        created() {
            this.getCodeImg();
        },
        methods: {
            getCodeImg() {
                this.$http.get("/rest/authox/checkCode?size=120*36").then(res => {
                    this.codeImg = "data:image/gif;base64," + res.data;
                }).catch(err => {
                    console.log(err);
                });
            },
            loginSubmit(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$http({
                            url: '/login',
                            method: 'post',
                            data: qs.stringify({
                                username: this.loginForm.userName,
                                password: this.loginForm.password,
                                // checkCode: this.loginForm.codeValue
                            }),
                            headers: {
                                'Content-Type': 'application/x-www-form-urlencoded'
                            }
                        }).then(res => {
                            if (this.$route.query.redirect) {
                                this.$router.push(this.$route.query.redirect);
                            } else {
                                this.$router.push("/");
                            };
                        }).catch(err => {
                            console.log(err);
                            this.$Message.error('登录失败!');
                        });
                    } else {
                        this.$Message.error('登录失败!');
                    }
                })
            },
        }
    };
</script>
<style lang="scss" scoped>
    .login_body {
        /*background: url("../assets/login/background.png") no-repeat fixed center;*/
        /*background-size: cover;*/
        width: 100%;
        height: 100%;

        .login_main {
            position: absolute;
            left: calc(50% - 200px);
            top: calc(50% - 200px);
            text-align: center;
            width: 400px;
            height: 340px;
            border-radius: 8px;
            padding: 0 40px;
            background-color: rgb(255, 255, 255);
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.22);

            .login_main_title {
                width: 100%;
                height: 90px;
                background: #fff;
                background-position: center;
            }

            .code_img {
                width: 100%;
                height: 36px;
            }
        }
    }
</style>