import { createApp } from "vue";
import App from "./App.vue";
import router from "./Router.ts";

let app = createApp(App);
app.use(router);
app.mount("#app");
