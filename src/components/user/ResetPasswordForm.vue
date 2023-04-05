<template>
<div class="reset-password-form-wrapper">
  <n-form class="reset-password-form">
    <h2 class="title">重置密码</h2>
    <n-input type="password" show-password-on="click" class="input" v-model:value="this.formData.password" placeholder="请输入您的新密码"/>
    <n-input type="password" show-password-on="click" class="input" v-model:value="this.confirmPassword" placeholder="请再次输入您的新密码"/>
    <n-input type="text" class="input" v-model:value="this.formData.email" placeholder="请输入您的邮箱"/>
    <n-button class="submit-button" @click="submitForm">重置密码</n-button>
  </n-form>

</div>
</template>

<script>

import {request} from '@/axios/tool.js';
export default {
  name: "ResetPasswordForm",
  data(){
    return {
      formData: {
        email: "",
        password: "",
      },
      confirmPassword: "",
    };
  },
  methods: {
    async submitForm() {
      if (this.formData.password !== this.confirmPassword) {
        this.$message.error("两次输入的密码不一致")
        return false
      }
      const response = await request(this.formData, "/user/resetPasswordRequest")
      if (response.data.success === true) {
        this.$message.success("重置密码成功，请查收邮件")
        this.$router.push({
          path: '/user/login',
        })
        return true
      }
      this.$message.error("重置密码失败，请检查您的邮箱是否正确")
      return false
    }
  }

}
</script>

<style scoped>
.reset-password-form-wrapper{
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.reset-password-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  width: 400px;
  height: 350px;
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


.submit-button {
  width: 130px;
  height: 44px;
  border-radius: 22px;
  background-color: hsla(160, 100%, 37%, 1);
  color: #fff;
}
</style>
