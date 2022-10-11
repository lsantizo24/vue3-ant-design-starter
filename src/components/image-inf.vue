<template>
  <div class="img">
    <a-image
      height="default"
      width="default"
      src="https://tahoejacks-vnhqjfv0atvxcid.netdna-ssl.com/wp-content/uploads/2015/08/Ridgeline-Express-Tahoe-hiking.jpg"
    />
  </div>
  <div class="abs">
    <span
      >Cuotas
      <router-link to="/event-details">Reservar Ahora</router-link>
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({});
</script>

<style>
.abs {
  position: absolute;
  background-color: lightblue;
  width: 300px;
  height: 120px;
  top: 600px;
  right: 0;
  border: 2px solid rgb(252, 252, 252);
  color: rgb(5, 0, 0);
  font-size: 25px;
}

.ant-image-preview-img-wrapper{
  padding: 4%;
}
</style>
