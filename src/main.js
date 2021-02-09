import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
const app = createApp(App)
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import store from '@/store'
import methods from 'methods-r'
import ElementPlus from 'element-plus';
import { ElMessage } from 'element-plus'
import 'normalize.css/normalize.css'
import 'element-plus/lib/theme-chalk/index.css';
import '@/assets/css/html.css'
import Empty from '@/components/empty.vue'
import api from '@/api'
app.component('Empty', Empty)
app.config.globalProperties.$api = api
app.config.globalProperties.$img = 'https://remons.gitee.io/feq/summarize/website/assets/img/'
app.config.globalProperties.$utils = methods
app.config.globalProperties.$store = useStore()
app.config.globalProperties.$route = useRoute()
app.config.globalProperties.$message =ElMessage 
app.config.globalProperties.NODE_ENV = process.env.NODE_ENV
app.use(store).use(router).use(ElementPlus).mount('#app')
