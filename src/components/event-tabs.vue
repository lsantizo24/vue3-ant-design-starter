<template>
  <a-tabs v-model:activeKey="activeKey">
    <a-tab-pane key="1">
      <template #tab>
        <span>
          <info-circle-outlined />
          Informacion
        </span>
      </template>
      <div class="eventinfo">
        <H2 class="category"
          >PARQUE ECOTURISTICO LOS ENCINOS - SAN ANTONIO DE LAS MINAS</H2
        >
        <p class="description" 
          >Domingo 06 de Marzo de 2022 caminata Los Encinos en San Antonio de
          las Minas, Parque Ecoturístico. 10 Km nivel ligero a medio, no te lo
          pierdas ven y disfruta de esta bella ruta realiza el recorrido en
          compañía de familia y amigos, puedes traer mascota. Disfruta en un
          ambiente agradable y familiar, sal de la Ciudad al campo a ejercitarte
          respirando aire puro. Practica senderismo de forma segura y con
          responsabilidad respetando todos los protocolos sanitarios. Podrás
          también hacer reservación para acampar un día antes de forma opcional.
          Reserva tu lugar para participar en esta caminata, Puedes hacerlo con
          el 50% y liquidar un día antes del evento. Recuerda que el cupo es
          limitado. Te esperamos!!</p
        >
      </div>
    </a-tab-pane>
    <a-tab-pane key="2">
      <template #tab>
        <span>
          <check-outlined />
          Que incluye
        </span>
      </template>
     <div class="eventinclud">
        <H2 class="category"
          >PARQUE ECOTURISTICO LOS ENCINOS - SAN ANTONIO DE LAS MINAS</H2
        >
        <p class="description" 
          >Domingo 06 de Marzo de 2022 caminata Los Encinos en San Antonio de
          las Minas, Parque Ecoturístico. 10 Km nivel ligero a medio, no te lo
          pierdas ven y disfruta de esta bella ruta realiza el recorrido en
          compañía de familia y amigos, puedes traer mascota. Disfruta en un
          ambiente agradable y familiar, sal de la Ciudad al campo a ejercitarte
          respirando aire puro. Practica senderismo de forma segura y con
          responsabilidad respetando todos los protocolos sanitarios. Podrás
          también hacer reservación para acampar un día antes de forma opcional.
          Reserva tu lugar para participar en esta caminata, Puedes hacerlo con
          el 50% y liquidar un día antes del evento. Recuerda que el cupo es
          limitado. Te esperamos!!</p
        >
      </div>
    </a-tab-pane>
    <a-tab-pane key="3">
      <template #tab>
        <span>
          <check-circle-outlined />
          Recomendaciones
        </span>
      </template>
      <div class="eventdesc">
        <H2 class="category"
          >PARQUE ECOTURISTICO LOS ENCINOS - SAN ANTONIO DE LAS MINAS</H2
        >
        <p class="description" 
          >Domingo 06 de Marzo de 2022 caminata Los Encinos en San Antonio de
          las Minas, Parque Ecoturístico. 10 Km nivel ligero a medio, no te lo
          pierdas ven y disfruta de esta bella ruta realiza el recorrido en
          compañía de familia y amigos, puedes traer mascota. Disfruta en un
          ambiente agradable y familiar, sal de la Ciudad al campo a ejercitarte
          respirando aire puro. Practica senderismo de forma segura y con
          responsabilidad respetando todos los protocolos sanitarios. Podrás
          también hacer reservación para acampar un día antes de forma opcional.
          Reserva tu lugar para participar en esta caminata, Puedes hacerlo con
          el 50% y liquidar un día antes del evento. Recuerda que el cupo es
          limitado. Te esperamos!!</p
        >
      </div>
    </a-tab-pane>
    <a-tab-pane key="4">
      <template #tab>
        <span>
          <dollar-circle-outlined />
          Cuotas
        </span>
      </template>
      <div class="eventcuot">
        <H2 class="category"
          >PARQUE ECOTURISTICO LOS ENCINOS - SAN ANTONIO DE LAS MINAS</H2
        >
        <p class="description" 
          >Domingo 06 de Marzo de 2022 caminata Los Encinos en San Antonio de
          las Minas, Parque Ecoturístico. 10 Km nivel ligero a medio, no te lo
          pierdas ven y disfruta de esta bella ruta realiza el recorrido en
          compañía de familia y amigos, puedes traer mascota. Disfruta en un
          ambiente agradable y familiar, sal de la Ciudad al campo a ejercitarte
          respirando aire puro. Practica senderismo de forma segura y con
          responsabilidad respetando todos los protocolos sanitarios. Podrás
          también hacer reservación para acampar un día antes de forma opcional.
          Reserva tu lugar para participar en esta caminata, Puedes hacerlo con
          el 50% y liquidar un día antes del evento. Recuerda que el cupo es
          limitado. Te esperamos!!</p
        >
      </div>
    </a-tab-pane>
    <a-tab-pane key="5">
      <template #tab>
        <span>
          <question-outlined />
          FAQs
        </span>
      </template>
      Preguntas
    </a-tab-pane>
  </a-tabs>
</template>
<script lang="ts">
import {
  InfoCircleOutlined,
  CheckOutlined,
  CheckCircleOutlined,
  DollarCircleOutlined,
  QuestionOutlined,
} from "@ant-design/icons-vue";
import { defineComponent, ref } from "vue";
export default defineComponent({
  components: {
    InfoCircleOutlined,
    CheckOutlined,
    CheckCircleOutlined,
    DollarCircleOutlined,
    QuestionOutlined,
  },
  setup() {
    return {
      activeKey: ref("1"),
    };
  },
});
</script>

<style scoped>
/* For demo */
.ant-carousel :deep(.slick-slide) {
  text-align: center;
  height: 600px;
  line-height: 160px;
  background: #364d79;
  overflow: hidden;
}

.ant-carousel :deep(.slick-slide h3) {
  color: #fff;
}
.eventinfo {
  text-align:left;
  height: 300px;
  background: #a7ebdfec;
  width: 80%;
  margin: auto;
  padding: 10px;
  position: static;
}
.eventinclud {
  text-align:left;
  height: 300px;
  background: #a7ebdfec;
  width: 80%;
  margin: auto;
  padding: 10px;
  position: static;
}
.eventdesc {
  text-align:left;
  height: 300px;
  background: #a7ebdfec;
  width: 80%;
  margin: auto;
  padding: 10px;
  position: static;
}
.eventcuot {
  text-align:left;
  height: 300px;
  background: #a7ebdfec;
  width: 80%;
  margin: auto;
  padding: 10px;
  position: static;
}
</style>


