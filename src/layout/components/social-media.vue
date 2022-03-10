<template>
  <a-row type="flex" id="social-bar">
    <a-col :span="6" :xs="{ order: 1 }" :sm="{ order: 2 }" :md="{ order: 3 }" :lg="{ order: 1 }">
    </a-col>
    <a-col :span="3" :xs="{ order: 2 }" :sm="{ order: 2 }" :md="{ order: 3 }" :lg="{ order: 2 }">
      <a-button  link="https://www.facebook.com/bajacoasthiking" type="primary">
            <template #icon >
            <FacebookOutlined  />
            </template >
        </a-button >
    </a-col>
    <a-col :span="3" :xs="{ order: 3 }" :sm="{ order: 1 }" :md="{ order: 4 }" :lg="{ order: 3 }">
      <a-button type="primary">
            <template #icon>
            <InstagramOutlined />
            </template>
        </a-button>
    </a-col>
    <a-col :span="3" :xs="{ order: 4 }" :sm="{ order: 4 }" :md="{ order: 2 }" :lg="{ order: 4 }">
      <a-button type="primary">
            <template #icon>
            <TwitterOutlined />
            </template>
        </a-button>
    </a-col>
    <a-col :span="3" :xs="{ order: 5 }" :sm="{ order: 3 }" :md="{ order: 1 }" :lg="{ order: 5 }">
      <a-button type="primary">
            <template #icon>
            <YoutubeOutlined />
            </template>
        </a-button>
    </a-col>
    <a-col :span="6" :xs="{ order: 6 }" :sm="{ order: 2 }" :md="{ order: 3 }" :lg="{ order: 6 }">
    </a-col>
  </a-row>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { FacebookOutlined, InstagramOutlined, TwitterOutlined, YoutubeOutlined } from '@ant-design/icons-vue';
export default defineComponent({
  components: {
    FacebookOutlined,
    InstagramOutlined,
    TwitterOutlined,
    YoutubeOutlined
  }
});
</script>
<style>
#social-bar{
    text-align: center;
    background-color: #873800;
}

#social-bar .ant-col button{
    width: 50%;
    height: 50px;
    background: none;
    border-style: none;
}

#social-bar .ant-col button:hover{
    background-color: #ad4e00;
}

#social-bar .ant-col button span svg{
    width: 100%;
    height: 100%;
}
</style>