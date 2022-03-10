<template>
  <div id="event-cards-title">
    <h1>¿¡Dónde será tu próxima aventura!?</h1>
  </div>
  <div class="event-card" style="background:#70b7f9; padding: 30px;">
    <a-card :bordered="false" style="width: 100%; padding: 10px">
      <template #cover>
        <img alt="example" src="https://www.arqhys.com/wp-content/fotos/2011/07/Fotografias-de-paisajes.jpg" />
      </template>
      <a-card-meta class="img-title" title="Caminara encinos"></a-card-meta>
    </a-card>
    <a-card title="CAMINATA FAMILIAR LOS ENCINOS">
      <p class="p-event-desc">
    Domingo 06 de Marzo de 2022 caminata Los Encinos en San Antonio de las Minas, Parque Ecoturístico. 10 Km nivel ligero a medio, no te lo pierdas ven y 
    disfruta de esta bella ruta realiza el recorrido en compañía de familia y amigos, puedes traer mascota. Disfruta en un ambiente agradable y familiar, 
    sal de la Ciudad al campo a ejercitarte respirando aire puro. Practica senderismo de forma segura y con responsabilidad respetando todos los protocolos 
    sanitarios. Podrás también hacer reservación para acampar un día antes de forma opcional. 
      </p>
      <div>
        <a-button style="margin-top: 16px">
        <router-link to="/event-details">Mas informacion...</router-link>
        </a-button>
      </div>
    </a-card>
  </div>
  <div class="event-card" style="background:#70b7f9; padding: 30px;">
    <a-card title="Nombre del Evento">
      <p class="p-event-desc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <div>
        <a-button style="margin-top: 16px">Mas informacion...</a-button>
      </div>
    </a-card>
    <a-card :bordered="false" style="width: 100%; padding: 10px">
      <template #cover>
        <img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />
      </template>
      <a-card-meta class="img-title" title="Image title"></a-card-meta>
    </a-card>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
});
</script>
<style>
.event-card{
  display: flex;
}
.img-title{
  text-align: center;
}
#event-cards-title{
  margin: 25px 0;
  text-align: center;
  font-size: 25px;
  font-weight: bold;
}
.p-event-desc{
  overflow: hidden;
  max-height: 100px;
}
</style>