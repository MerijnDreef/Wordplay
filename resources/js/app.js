require('./bootstrap');

import { createApp } from 'vue';
// import App from './layouts/app.vue';
// import router from './routeS.js';
import indexVue from './components/indexVue.vue';
import loginVue from './components/loginVue.vue';
import registerVue from './components/registerVue.vue';

createApp({
    components: {
        indexVue,
        loginVue,
        registerVue,
    }
}).mount('#app');

// .use(router)