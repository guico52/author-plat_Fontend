<template>
  <div class="login-wrapper">
    <div class="login-form">
      <h2 class="title">用户登录</h2>
      <n-input class="input" placeholder="用户名" v-model:value="formData.username"/>
      <n-input type="password" show-password-on="click" class="input" placeholder="密码" v-model:value="formData.password"/>
      <n-button class="login-button" @click="login">登录</n-button>
      <div class="jump">
        <RouterLink to="/user/register">注册</RouterLink>
        <RouterLink to="/user/resetPassword">忘记密码？</RouterLink>
      </div>
    </div>
  </div>
</template>

<script>
import{request} from '@/axios/tool.js';
export default {
  name: "LoginForm",
  data(){
    return {
      formData:{
        username: '',
        password: ''
      }
    }
  },
  methods:{
    async login(){
      const response = await request(this.formData, "/user/login")
      console.log("response:", response)
      const data = response.data
      console.log("data:",data)
      const token = data.data
      console.log("token", token)
    //   将token存入本地
      localStorage.setItem('token',token)
      if(data.success === true){
        console.log("登录成功，跳转中")
        this.$router.push({
          path: '/home',
          query: {user: this.username}
        })
      }
    }
  }
}
</script>

<style scoped>
.login-wrapper{
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.login-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  width: 400px;
  height: 300px;
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


.login-button {
  width: 130px;
  height: 44px;
  border-radius: 22px;
  background-color: hsla(160, 100%, 37%, 1);
  color: #fff;
}


.jump {
  display: flex;
  justify-content: space-between;
  width: 300px;
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
