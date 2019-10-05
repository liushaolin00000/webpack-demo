<template>
  <div class="all">
    <!-- 关闭图标 -->
    <div class="iconfont iconicon-test close"></div>
    <div class="iconfont new iconnew logo"></div>
    <!-- 两个输入框的布局 -->
    <ModuleInput
      text="用户名/手机号码"
      :value="form.username"
      @input="handleUsername"
      :rule="/^1[0-9]{4,10}$/"
      err_message="用户名格式不正确"
    ></ModuleInput>
    <ModuleInput
      text="密码"
      :value="form.password"
      @input="handlePassword"
      :rule="/^[0-9,a-z,A-Z]{3,10}$/"
      err_message="密码格式不正确"
    ></ModuleInput>
    <div class="tioazhuan">没有账号？<router-link to='/register'>去注册</router-link></div>
    <!-- 登录按钮的布局 -->
    <div class="login" @click="handleSubmit">登录</div>
  </div>
</template>

<script>
//引入组件
import ModuleInput from "@/components/ModuleInput.vue";
export default {
  components: {
    //注册输入框组件
    ModuleInput
  },
  data() {
    return {
      form: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    //   传递给输入框组件，用于获取用户名
    handleUsername(value) {
      this.form.username = value;
    },
    handlePassword(value) {
      this.form.password = value;
    },
    //向后台发起登录请求
    handleSubmit() {
      this.$axios({
        url: "/login",
        method: "post",
        data: this.form
      }).then(res => {
        if (res.data.message === "登录成功") {
          this.$toast.success(res.data.message);
          //登陆成功跳转到首页
          this.$router.push("/");
        }
      });
    }
  }
};
</script>

<style lang='less' scoped>
.all {
  padding: 30px 30px;
  .close {
    font-size: 27/360 * 100vw;
  }
  .logo {
    font-size: 126/360 * 100vw;
    color: #d81e06;
    text-align: center;
  }
  .login {
    height: 48/360 * 100vw;
    background-color: #cc3300;
    border-radius: 50px;
    text-align: center;
    line-height: 48/360 * 100vw;
    color: #f8e4dd;
    margin-top: 48/360 * 100vw;
    font-size: 18/360 * 100vw;
  }
  .tioazhuan{
    display: flex;
    float:right;
    margin-top: 20px;
  }
}
</style>