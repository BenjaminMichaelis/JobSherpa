/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from "./App.vue";

// Composables
import { createApp } from "vue";

// Plugins
import { registerPlugins } from "@/plugins";

// Store
import store from "./store";

// Router
import router from "./router";

const app = createApp(App).use(router);

registerPlugins(app);

app.use(store);

app.mount("#app");
