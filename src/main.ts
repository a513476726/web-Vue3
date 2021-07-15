import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { Alert2 } from "../src/views/commonents/demo/index";

createApp(App).use(store).use(router).use(Alert2).mount("#app");
