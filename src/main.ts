import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
const app = createApp(App)
import { useStore } from 'vuex'
import store from './store'
import methods from 'methods-remons'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
app.config.globalProperties.$utils = methods
app.config.globalProperties.$store = useStore()
app.use(store).use(router).use(Antd).mount('#app')
