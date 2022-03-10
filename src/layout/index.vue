<template>
  <a-layout class="layout">
    <a-layout-header class="header">
      <div class="logo" @click="clickMenuItem('home')">
        <img id="img-logo" :src="`${publicPath}logo.png`">
        <h1>BBaja Coast Hiking - Senderismo Responsable</h1>
      </div>
      <a-menu class="header menu-text" mode="horizontal">
        <a-menu-item key="mail" class="menu-text" @click="clickMenuItem('blog')">
          <template #icon>
            <container-outlined />
          </template>
          Blog
        </a-menu-item>
        <a-menu-item key="about" class="menu-text" @click="clickMenuItem('about')">
          <template #icon>
            <monitor-outlined />
          </template>
          Conocenos
        </a-menu-item>
        <a-menu-item key="contact" class="menu-text" @click="clickMenuItem('contact')">
          <template #icon>
            <mail-outlined />
          </template>
          Contactanos
        </a-menu-item>
        <a-menu-item id="join" key="join" class="menu-text" @click="clickMenuItem('join')">
          <template #icon>
            <check-circle-outlined />
          </template>
          Unirme
        </a-menu-item>
        <!--<a-sub-menu key="sub1" class="menu-text">
          <template #icon>
          </template>
          <template #title>Navigation Three - Submenu</template>
          <a-menu-item-group title="Item 1">
            <a-menu-item class="menu-text" key="setting:1">Option 1</a-menu-item>
            <a-menu-item class="menu-text" key="setting:2">Option 2</a-menu-item>
          </a-menu-item-group>
          <a-menu-item-group title="Item 2">
            <a-menu-item class="menu-text" key="setting:3">Option 3</a-menu-item>
            <a-menu-item class="menu-text" key="setting:4">Option 4</a-menu-item>
          </a-menu-item-group>
        </a-sub-menu>-->
      </a-menu>
    </a-layout-header>
    <a-layout-content style="padding: 0 0">
      <!--<a-breadcrumb style="margin: 16px 0">
        <a-breadcrumb-item>Home</a-breadcrumb-item>
      </a-breadcrumb>-->
      <div :style="{ background: '#fff', padding: '0px', minHeight: '280px' }">
        <router-view />
      </div>
    </a-layout-content>
    <app-social-media />
    <a-layout-footer style="text-align: center">
      WareTech ©2022 Created by SoftTech 
    </a-layout-footer>
  </a-layout>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { MailOutlined, ContainerOutlined, MonitorOutlined, CheckCircleOutlined } from '@ant-design/icons-vue';
import AppSocialMedia from '@/layout/components/social-media.vue';
import { useRouter } from "vue-router";
export default defineComponent({
  components: {
     MailOutlined,
     ContainerOutlined,
     MonitorOutlined,
     CheckCircleOutlined,
     AppSocialMedia     
  },
  setup() {
    const router = useRouter();
    const clickMenuItem = (key) => {
      if (router.hasRoute(key)) {
        router.push({ name: key, replace: true });
      } else {
        router.push({ name: "Error403", replace: true });
      }
    };
    return {
      clickMenuItem,
      selectedKeys: ref<string[]>(['2']),
      publicPath: process.env.BASE_URL
    };
  },
});
</script>
<style>
.site-layout-content {
  min-height: 280px;
  padding: 24px;
  background: #84b6b6;
}

#app .logo{
  float: left;
  box-sizing: border-box;
  font-variant: tabular-nums;
  font-feature-settings: 'tnum';
  display: flex;
  text-align: left;
}

#app .logo h1{
  color: white;
  font-weight: bold;
  font-size: 20px;
}

#img-logo{
  float: left;
  margin-right: 10spx;
  max-height:64px;
}

.ant-row-rtl #app .logo {
  float: right;
  margin: 16px 0 16px 24px;
}

.site-layout-header {
  background: #fffefe;
}

.site-layout-content {
  background: #fffefe;
}

.ant-menu.header{
  background: #ffa940;
  float: right;
}

.ant-layout-header.header{
  background: #ffa940;
}

.ant-menu.menu-text{
  color: #fff;
}

.ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item-selected.menu-text{
  color: #d46b08;
}

.ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item-selected.menu-text::after{
  border-bottom-color: #d46b08;
}

.ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item-selected.menu-text:hover{
  color: #d46b08;
  border-bottom-color: #d46b08;
}

.ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item.menu-text:hover{
  color: #d46b08;
  border-bottom-color: #d46b08;
}

.ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu-selected.menu-text{
  color: #d46b08;
}

.ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu-open.menu-text{
  color: #d46b08;
}

.ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu-selected.menu-text::after{
  border-bottom-color: #d46b08;
}

.ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu-selected.menu-text:hover > .ant-menu-submenu-title{
  color: #d46b08;
}

.ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu.menu-text:hover > .ant-menu-submenu-title{
  color: #d46b08;
}

</style>