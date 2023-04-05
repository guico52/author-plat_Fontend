<template>
  <div class="register-wrapper">
    <n-form class="register-form">
      <h2 class="title">用户注册</h2>
      <n-input class="input" placeholder="用户名" v-model:value="formData.username"/>
      <n-input type="password" class="input" show-password-on="click" placeholder="密码" v-model:value="formData.password"/>
      <n-input type="password" class="input" show-password-on="click" placeholder="确认密码" v-model:value="confirmPassword"/>
      <n-input class="input" placeholder="邮箱" v-model:value="formData.email"/>
      <n-button class="register-button" @click="submitForm">注册</n-button>
      <RouterLink class="jump" to="/user/login">已有账号？去登录</RouterLink>
    </n-form>

  </div>
</template>

<script>

import {useMessage} from "naive-ui";
import {request} from "@/axios/tool";

const message = useMessage();
export default {
  data() {
    return {
      formData: {
        username: "",
        password: "",
        email: ""
      },
      confirmPassword: "",
    };
  },
  methods: {
    submitForm() {
      // TODO: 发送注册请求
      // 1，验证两次密码是否一致
      if (this.formData.password !== this.confirmPassword) {
        $message.error("两次密码不一致");
        return false;
      }
      console.log("发送表单，内容为：" + this.formData)
      // 2. 发送注册请求
      const data = request(this.formData, "/user/register")
      return data.success === true;
    }

  },
};
</script>

<style scoped>
.register-wrapper{
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.register-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  width: 400px;
  height: 400px;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12), 0 4px 12px rgba(0, 0, 0, 0.24);
}

.title {
  font-size: 28px;
  margin-bottom: 20px;
  text-align: center;
}

.input {
  width: 300px;
  margin-bottom: 20px;
  border-radius: 10px;
  border: 1px solid #ccc;
  padding: 3px 3px;
}


.register-button {
  width: 130px;
  height: 44px;
  border-radius: 22px;
  background-color: hsla(160, 100%, 37%, 1);
  color: #fff;
}


.jump {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #888;
}

.jump a {
  color: hsla(160, 100%, 37%, 1);
}

.jump a:hover {
  text-decoration: underline;
}

</style>
