import { createApp } from 'vue'
import App from './App.vue'

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
import routes from './routes';

import {createRouter,createWebHashHistory} from 'vue-router';

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
  })
  
createApp(App).use(router).mount('#app')
