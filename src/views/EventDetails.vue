<template>
  <!--Fhotos-Carrosel-->
   <image-inf/>
  <!-- Tab List-->
  <app-event-tabs/>
  <!-- Mailing List -->
  <app-mailing-list />
  <!-- Know more-->
  <app-know-more />
</template>

<script>
import { defineComponent } from 'vue';
import AppMailingList from "@/components/mailing-list.vue";
import AppKnowMore from "@/components/know-more.vue";
import AppEventTabs from "@/components/event-tabs.vue";
import ImageInf from '@/components/image-inf.vue';



export default defineComponent({
    components: {
        AppMailingList,
        AppKnowMore,
        AppEventTabs,
        ImageInf
       
    }
})
</script>
<style>
</style>