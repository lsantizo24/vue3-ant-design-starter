import { createApp } from 'vue';
import { Button } from 'ant-design-vue';
import App from '@/App.vue';
import router from './router'
import { setupAntd } from './ant-design-vue';

const app = createApp(App);
setupAntd(app);
app.use(Button);
app.use(router);
app.mount('#app');
