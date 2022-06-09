<template>
  <div class="row justify-content-center mt-3">
    <div class="col-lg-10">
      <h3 class="f24 fw-bold text-white">Add Cities</h3>
      <p class="f18 fw-normal text-white mt-1">Add 5 cities whose temperature you want to track.</p>
      <form action="" class="weather-form mt-5" @submit.prevent="handleSubmit()">
        <div class="form-group">
          <img src="@/assets/img/icons/icon-plus.svg" alt="add icon" class="buttons add-icon">
          <input type="text" class="form-control" placeholder="Add a city..." :disabled="getCityCount == 5" v-model="city" />
          <button class="btn add-city buttons cursor-pointer" :disabled="loading || getCityCount == 5">
            {{ !loading ? `Add` : `Please wait...` }}
          </button>
        </div>
      </form>
    </div>
    <div class="col-lg-12">
      <Weather-List />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';
import WeatherList from "@/components/WeatherList.vue";
import WeatherHelper from "@/functions/actions/WeatherRequest"
export default {
  name: "HomeView",
  computed: {
    ...mapState(["loading"]),
    ...mapGetters(["getCityCount"]),
  },
  components: { WeatherList },
  data() {
    return {
      city: "",
    };
  },
  methods: {
    async handleSubmit() {
      if (this.city) {
        const urlParams = this.$globalFunc.getStaticURLParameters(false);
        const response = await WeatherHelper.getCity(this.city, urlParams);
        if (response.status) {
          this.showAlert("Success", `${this.$globalFunc.capitalizeFirstLetter(this.city)} has been added.`, "success");
          this.city = "";
        } else {
          this.showAlert("Error", `${response.message}`, "error");
        }
      } else {
        this.showAlert("Validation Error", "Please enter a city name.", "warn");
      }
    },
    showAlert(title, text, type) {
      this.$notify({
        title,
        text,
        type: type ? type : "warn",
      });
    },
  },
};
</script>

<style scoped>
</style>
