import { createApp } from 'vue/dist/vue.runtime.esm-bundler.js'
import App from './App.vue'
import router from './router.js'
import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'

createApp(App)
    .use(bootstrap)
    .use(router)    
    .mount('#app')