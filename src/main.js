import { createApp, h } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import axios from "axios";
import router from "./router";
import store from "./store";
import globalFunc from "@/functions/globalFunc";
import Notifications from '@kyvg/vue3-notification';
import InitiateProfileRequest from "./functions/actions/DashboardRequest";

const app = createApp({
  async created() {
    const token = sessionStorage.getItem("token");
    const activePhoneNumber = sessionStorage.getItem("activePhoneNumber");
    const transactionDetails = sessionStorage.getItem("transactionDetails")
    if (token) {
      const response = await InitiateProfileRequest.getProfileInfo();
      if (response.status) {
        this.$store.dispatch("reloadUserData", {...response.data, token});
      } else {
        this.$store.dispatch("logout", response.data);
      }
    }
    if (activePhoneNumber) {
      const phoneNumber = JSON.parse(activePhoneNumber);
      this.$store.dispatch("setUserPhoneNumber", phoneNumber);
    }
    if (transactionDetails) {
      const transactionPayload = JSON.parse(transactionDetails)
      this.$store.dispatch("setTransactionDetails", transactionPayload)
    }
    axios.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response.status === 401) {
          this.$store.dispatch("logout");
        }
        return Promise.reject(error);
      }
    );
  },
  render: () => h(App),
});

app.use(router);

app.use(store);

app.use(Notifications);

app.config.globalProperties.$window = window;

app.config.globalProperties.$globalFunc = globalFunc;

app.mount("#app");
