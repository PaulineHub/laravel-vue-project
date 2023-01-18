import './bootstrap';

import { createApp } from "vue";
import HelloVue from "./components/HelloVue.vue";
import ContactFormVue from "./components/ContactFormVue.vue";

createApp({
    components: {
        HelloVue,
        ContactFormVue,
    },
}).mount("#app");
