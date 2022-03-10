<template>
    <div id="form-contact">
        <a-form>
            <a-row :gutter="24">
                <a-col :span="12">
                    <a-form-item
                    :name="`Name`"
                    :label="`Nombre`"
                    :rules="[{ required: true, message: 'cant be null' }]"
                    >
                    <a-input placeholder="Nombre"></a-input>
                    </a-form-item>
                </a-col>
                <a-col :span="12">
                    <a-form-item
                    :name="`LastName`"
                    :label="`Apellido`"
                    :rules="[{ required: true, message: 'cant be null' }]"
                    >
                    <a-input placeholder="Apellido"></a-input>
                    </a-form-item>
                </a-col>
            </a-row>
            <a-row :gutter="24">
                <a-col :span="12">
                    <a-form-item
                    :name="`Phone`"
                    :label="`Telefono`"
                    :rules="[{ required: true, message: 'cant be null' }]"
                    >
                    <a-input placeholder="Telefono"></a-input>
                    </a-form-item>
                </a-col>
                <a-col :span="12">
                    <a-form-item
                    :name="`Email`"
                    :label="`Email`"
                    :rules="[{ required: true, message: 'cant be null' }]"
                    >
                    <a-input placeholder="Email"></a-input>
                    </a-form-item>
                </a-col>
            </a-row>
            <a-row :gutter="24">
                <a-col :span="24">
                    <a-form-item
                    :name="`Message`"
                    :label="`Mensaje`"
                    :rules="[{ required: true, message: 'cant be null' }]"
                    >
                    <a-textarea placeholder="Mensaje" :rows="4" />
                    </a-form-item>
                </a-col>
            </a-row>
            <a-row :gutter="24">
                <a-col :span="24">
                    <div id="form-item-send">
                        <a-button type="primary">
                            <template #icon>
                            <SendOutlined />
                            </template>
                            Enviar
                        </a-button>
                    </div>
                </a-col>
            </a-row>
        </a-form>
    </div>
</template>
<script lang="ts">
import { defineComponent, reactive, ref } from 'vue';
import { SendOutlined } from '@ant-design/icons-vue'
export default defineComponent({
    components:{
        SendOutlined
    }
});
</script>
<style>
#form-contact{
    padding: 25px 25px;
}
#form-item-send {
    text-align: center;
}
</style>
