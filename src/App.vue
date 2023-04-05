<template>
<!--  调用UseMessage-->
  <n-message-provider>
    <UseMessage/>
  </n-message-provider>
  <div class="app">
    <RouterView class="router-view"/>
  </div>

</template>

<script>
import './components/user/LoginForm.vue';
import {defineComponent} from "vue";
import User from "@/views/User.vue";
import UseMessage from "@/components/UseMessage.vue";

export default defineComponent({
  components: {UseMessage, User},
  setup(props) {}
})

</script>

<style>
/*app占据全屏，元素垂直居中分布*/
.app{
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
.router-view{
  height: 100%;
  width: 100%;
}
</style>

