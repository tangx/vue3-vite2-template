import { createApp } from 'vue'
import App from './App.vue'

// 引入 vue-router
import router from './router/index'

// 注入环境变量
// 只需要执行， 因此不需要赋值任何变量。 直接 import 导入即可
import './apis/appconfig'

const app = createApp(App)

app.use(router)
app.mount('#app')

