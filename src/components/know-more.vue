<template>
    <div id="div-know-more">
        <h1>¿Quieres saber más? contactanos!</h1>
        <div>
            <a-button id="btn-send-mail" style="margin-top: 16px">Send mail</a-button>
            <label><PhoneOutlined />Llamanos 666-666-66-66</label>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { PhoneOutlined } from '@ant-design/icons-vue';
export default defineComponent({
    components: {
        PhoneOutlined
    }
});
</script>
<style>
#div-know-more{
    text-align: center;
    padding: 25px 0;
}

.ant-btn#btn-send-mail{
    margin: 0 10px;
}
</style>