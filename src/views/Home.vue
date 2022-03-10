<template>
  <!-- Carrousel component  src/components/carrousel.vue -->
  <app-carrousel />
  <!-- Company Description -->
  <div id="company-des">
    <h1> Baja Coast Hiking - Senderismo Responsable</h1>
    <p>
     Baja Coast Hiking ofrece servicio de activiades al aire libre como Senderismo, campismo, excursiones, etc.\
     Brindandamos seguro contra accidentes y asistencia a lo largo del recorrido. En BCH usted no es uno mas, usted es parte de nuestra familia.
    </p>
  </div>
  <!-- Event cards  src/components/event-cards.vue -->
  <app-event-card />
  <!-- Mailing List -->
  <app-mailing-list />
  <!-- Know more-->
  <app-know-more />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import AppCarrousel from "@/components/carrousel.vue";
import AppEventCard from "@/components/event-cards.vue";
import AppMailingList from "@/components/mailing-list.vue";
import AppKnowMore from "@/components/know-more.vue";

export default defineComponent({
  components: {
     AppCarrousel,
     AppEventCard,
     AppMailingList,
     AppKnowMore
  },
  setup() {
    return {
      selectedKeys: ref<string[]>(['2']),
      publicPath: process.env.BASE_URL
    };
  },
});
</script>

<style>
  #company-des{
    width: 50%;
    margin-left: 25%;
    align-content: center;
    padding: 10px 25px;
    display: block;
  }

  #company-des h1{
    text-align: center;
  }

  #company-des p{
    text-align: center;
  }
</style>