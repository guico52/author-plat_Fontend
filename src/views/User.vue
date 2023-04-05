<template>
<div>
  <RouterLink class="link" to="/">返回主页</RouterLink>
  <RouterView></RouterView>
</div>
</template>

<script>
import LoginForm from "@/components/user/LoginForm.vue";

export default {
  name: "user",
  components: {LoginForm}

}
</script>

<style scoped>
.link{
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 15px;
}



</style>
