import * as Vue from 'vue'
import App from './App.vue'

// Vue.createApp(App).mount('#app')

import router from './router'

Vue
.createApp(App)
.use(router)
.mount('#app')
