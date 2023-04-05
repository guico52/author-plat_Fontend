<template>
  <div class="app">
    <ul>
      <li><RouterLink class="link" to="/">返回主页</RouterLink></li>
      <li><RouterLink to="/user/login">登录</RouterLink></li>
      <li><RouterLink to="/backstage">后台</RouterLink></li>
      <li><RouterLink to="/videoPage">视频播放测试</RouterLink></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "FontStage"
}
</script>

<style scoped>
.app{
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
