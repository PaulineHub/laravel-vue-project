import './bootstrap';

import { createApp } from "vue";
import AccueilVue from "./components/AccueilVue.vue";
import ContactFormVue from "./components/ContactFormVue.vue";

createApp({
    components: {
        AccueilVue,
        ContactFormVue,
    },
}).mount("#app");
