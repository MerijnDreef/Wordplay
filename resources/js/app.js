require('./bootstrap');

import { createApp } from 'vue';
import indexVue from '../components/indexVue.vue';

createApp({
    components: {
        indexVue,
    }
}).mount('#app');