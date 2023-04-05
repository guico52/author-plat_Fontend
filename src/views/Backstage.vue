<template>
  <div class="backstage">
    <div class="backstage-container">
      <n-layout has-sider>
        <n-layout-sider
            bordered
            collapse-mode="width"
            :collapsed-width="64"
            :width="300"
            :collapsed="collapsed"
            show-trigger
            @collapse="collapsed = true"
            @expand="collapsed = false"
            :native-scrollbar="false"
        >
          <Menu class="menu"/>
        </n-layout-sider>
        <n-layout-content>
          <router-view class="router-view"/>
        </n-layout-content>
      </n-layout>


    </div>
  </div>
</template>
<style scoped>
.backstage {
  display: flex;
  flex-direction: row;
  height: 100vh;
}

.backstage-container {
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
}

.menu {
  top: 0;
  flex: 0 0 auto;
  height: 100%;
  flex-shrink: 0;
}

.router-view {
  flex: 1 1 auto;
  height: 100%;
  flex-shrink: 1;
}
</style>
<script>
import Menu from "@/components/backstage/Menu.vue";
import { h } from "vue";
import { NIcon } from "naive-ui";
import { CaretDownOutline } from "@vicons/ionicons5";

export default {
  name: "Backstage",
  components: { Menu },
  setup() {
    return {
      expandIcon() {
        return h(NIcon, null, { default: () => h(CaretDownOutline) });
      },
    };
  },
  data() {
    return {
      collapsed: false,
      useNativeScroll: false,
    };
  },
  methods: {
    onMenuTogglerClick() {
      this.collapsed = !this.collapsed;
      //让菜单收起来
    },
  },
};
</script>
