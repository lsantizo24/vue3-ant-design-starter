<template>
    <div id="mailing-list">
        <h1>Join Our Mailing List!</h1>
        <a-form
            layout="inline"
            :model="formState"
            @finish="handleFinish"
            @finishFailed="handleFinishFailed"
        >
            <a-row id="row-mailing" type="flex" :gutter="24">
                <a-col class="col-mailing-aux" :span="8" :xs="{ order: 4 }" :sm="{ order: 4 }" :md="{ order: 4 }" :lg="{ order: 1 }">
                </a-col>
                <a-col class="col-mailing" :span="4" :xs="{ order: 2 }" :sm="{ order: 2 }" :md="{ order: 1 }" :lg="{ order: 2 }">
                    <a-form-item>
                        <a-input v-model:value="formState.name" placeholder="Name">
                            <template #prefix><UserOutlined style="color: rgba(0, 0, 0, 0.25)" /></template>
                        </a-input>
                    </a-form-item>
                </a-col>
                <a-col class="col-mailing" :span="4" :xs="{ order: 3 }" :sm="{ order: 3 }" :md="{ order: 2 }" :lg="{ order: 3 }">
                    <a-form-item>
                        <a-input v-model:value="formState.mail" type="email" placeholder="Mail">
                            <template #prefix><MailOutlined style="color: rgba(0, 0, 0, 0.25)" /></template>
                        </a-input>
                    </a-form-item>
                </a-col>
                <a-col :span="1" :xs="{ order: 4 }" :sm="{ order: 4 }" :md="{ order: 3 }" :lg="{ order: 4 }">
                    <a-form-item>
                        <a-button
                            type="primary"
                            html-type="submit"
                            :disabled="formState.name === '' || formState.mail === ''"
                        >
                            Join!
                        </a-button>
                    </a-form-item>
                </a-col>
            </a-row>
        </a-form>
    </div>
</template>
<script lang="ts">
import { UserOutlined, MailOutlined } from '@ant-design/icons-vue';
import { defineComponent, reactive } from 'vue';
import type { UnwrapRef } from 'vue';
import { FormProps } from 'ant-design-vue';

interface FormState {
  name: string;
  mail: string;
}
export default defineComponent({
  components: {
    UserOutlined,
    MailOutlined,
  },
  setup() {
    const formState:UnwrapRef<FormState> = reactive({
      name: '',
      mail: '',
    });
    const handleFinish: FormProps['onFinish'] = values => {
      console.log(values, formState);
    };
    const handleFinishFailed: FormProps['onFinishFailed'] = errors => {
      console.log(errors);
    };
    return {
      formState,
      handleFinish,
      handleFinishFailed,
    };
  },
});
</script>
<style>
#mailing-list{
    padding: 50px 0;
    text-align: center;
    background-color: #d46b08;
}

#mailing-list h1{
    color: white;
    font-size: 30px;
    font-weight: bold;
}

#row-mailing{
    width: 100%;
}

.ant-col.col-mailing{
    width: 100%;
    padding: 0;
    min-width: 200px;
}

.ant-col.col-mailing-aux{
    min-width: 300px;
}
</style>