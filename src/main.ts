import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
const app = createApp(App)
import { useStore } from 'vuex'
import {useRoute} from 'vue-router'
import store from './store'
import methods from 'methods-remons'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import Empty from '@/components/empty.vue'
app.component('Empty',Empty)
app.config.globalProperties.$utils = methods
app.config.globalProperties.$store = useStore()
app.config.globalProperties.$route = useRoute()
app.use(store).use(router).use(Antd).mount('#app')
