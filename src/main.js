import { createApp, h } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import axios from "axios";
import router from "./router";
import store from "./store";
import globalFunc from "@/functions/globalFunc";
import Notifications from '@kyvg/vue3-notification';

const app = createApp({
  async created() {
    const cities = localStorage.getItem("cities");
    if (cities) {
      this.$store.dispatch("reloadCities", JSON.parse(cities));
    }
  },
  render: () => h(App),
});

app.use(router);

app.use(store);

app.use(Notifications);

app.config.globalProperties.$globalFunc = globalFunc;

app.mount("#app");
