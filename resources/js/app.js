import './bootstrap';

import { createApp } from "vue";
import HelloVue from "./components/HelloVue.vue";
import CounterVue from "./components/CounterVue.vue";

createApp({
    components: {
        HelloVue,
        CounterVue,
    },
}).mount("#app");
