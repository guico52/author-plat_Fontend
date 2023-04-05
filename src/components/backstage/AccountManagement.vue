<template>
  <div class="wrapper">
    <div class="form">
      <h1>账户信息</h1>
      <div>
        用户名
        <n-input class="input" v-model:value="username"></n-input>
      </div>
      <div>
        邮&emsp;箱
        <n-input class="input" v-model:value="email"></n-input>
      </div>
      <div>
        密&emsp;码
        <n-input class="input" type="password" show-password-on="click" v-model:value="password"></n-input>
      </div>
      <div>
        <n-button class="button" color="green" @click="setUserInfo">修改</n-button>
      </div>
    </div>
  </div>
</template>

<script>
import {request} from "@/axios/tool.js";

export default {
  name: "AccountManagement",
  data(){
    return {
      username: '',
      password: '',
      email: ''
    }
  },
  methods:{
    async getUserInfo(){
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

.wrapper{
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.form{
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.input{
  width: 300px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 3px 3px;
}

.button{
  width: 130px;
  height: 44px;
  border-radius: 10px;
  background-color: hsla(160, 100%, 37%, 1);
  color: #fff;
}
</style>
