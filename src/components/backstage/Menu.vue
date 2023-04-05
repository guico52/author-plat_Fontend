<template>
  <div class="drawer">
<!--    <div class="header">-->
<!--      个人中心-->
<!--    </div>-->
    <n-menu class="main-menu"
            :options="menuOptions"
            :render-label="renderMenuLabel"
            :expand-icon="expandIcon"
    />
    <n-menu class="quit-menu"
            :options="quitOptions"
    />
  </div>

</template>

<script>
import {h, ref} from "vue";
import {RouterLink} from "vue-router";
import {NIcon} from "naive-ui";
import {CaretDownOutline} from "@vicons/ionicons5";
import router from "@/router";

export default {
  name: 'DrawerMenu',
  components: {RouterLink},
  props:{
    collapsed: {
      type: Boolean,
      default: false
    },
    expandIcon: {
      type: Function,
      default: () => h(NIcon, null, { default: () => h(CaretDownOutline) })
    }
  },

  setup() {
    return {
      collapsed: ref(false),
      renderMenuLabel(option) {
        if ("href" in option) {
          return h(
              "a",
              {onclick: () => router.push(option.href)},
              option.label
          );
        }
        return option.label;
      },
      expandIcon(){
        return h(NIcon, null, { default: () => h(CaretDownOutline) });
      }
    }
  },
  data() {
    return {
      isOpen: !this.collapsed,
      menuOptions: [
        {
          label: '公告通知',
          href: '/backstage/default',
          key: 'default'
        },
        {
          label: '账号管理',
          href: '/backstage/accountManagement',
          key: 'accountManagement',
        },
        {
          label: '文章管理',
          key: 'articleManagement',
          children: [
            {
              label: '文章列表',
              key: 'articleList',
              href: '/backstage/articleList'
            },
            {
              label: '添加文章',
              key: 'writeArticle',
              href: '/backstage/writeArticle'
            },
          ]
        },
        {
          label: "视频管理",
          key: 'videoManagement',
          children: [
            {
              label: '视频列表',
              key: 'videoList',
              href: '/backstage/videoList'
            },
            {
              label: '添加视频',
              key: 'uploadVideo',
              href: '/backstage/uploadVideo'
            },
          ]
        },
        {
          label: '分类管理',
          key: 'typeManagement',
          children: [
            {
              label: '分类列表',
              href: '/backstage/typeList',
              key: 'typeList',
            }, {
              label: '添加分类',
              key: 'addType',
              href: '/backstage/addType'
            }
          ]
        },
        {
          label: '审核队列',
          key: 'checkQueue',
          children: [
            {
              label: '文章审核',
              key: 'articleCheck',
            },
            {
              label: '视频审核',
              key: 'commentCheck',
            }
          ]
        },
        {
          label: '收藏夹',
          key: 'collectionManagement',
        }
      ],
      quitOptions: [
        {
          label: '退出登录',
          key: 'quit',
        }, {
          label: () => h(RouterLink, {to: '/'}, {default: () => '返回主页'}),
          key: 'back',
        }
      ],
    };
  }
};
</script>

<style scoped>
.drawer::-webkit-scrollbar{
   display: none;
}
.main-menu {
  height: 70%;
  overflow-y: scroll;
  margin-top: 20px;
}

.main-menu::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

.main-menu::-webkit-scrollbar-thumb {
  background-color: #ccc;
  border-radius: 6px;
}

.main-menu::-webkit-scrollbar-thumb:hover {
  background-color: #aaa;
}

.main-menu::-webkit-scrollbar-track {
  background-color: #f2f2f2;
  border-radius: 6px;
}


.quit-menu {
  position: absolute;
  bottom: 5%;
  left: 25px;
  width: 200px;
  margin-top: 20px;
}


</style>
