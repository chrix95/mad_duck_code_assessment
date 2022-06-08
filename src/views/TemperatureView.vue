<template>
  <div class="row justify-content-start mt-5">
    <div class="col-lg-6">
      <div class="weather-card mb-3">
        <div class="row justify-content-between align-items-start">
          <div class="col-lg-4">
            <h3 class="card-title text-primary m-0">Novi Sad</h3>
            <p class="sub-card-title text-grey f14 m-0 mt-1">Vojvodina, Serbia</p>
            <p class="sub-card-title text-grey f14 m-0 mt_5">45.2396° N, 19.8227° E</p>
          </div>
          <div class="col-lg-4">
            <img src="https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0024_thunderstorms.png" alt="weather icon" class="img-fluid d-flex mx-auto">
            <p class="temperature text-primary text-center">
              22<sup>o</sup>C
            </p>
          </div>
          <div class="col-lg-4">
            <p class="sub-card-title text-grey f14 m-0">
              <span>Feels like</span> 20<sup>o</sup>C
            </p>
            <p class="sub-card-title text-grey f14 m-0 mt_5">
              <span>Humidity</span> 41%
            </p>
            <p class="sub-card-title text-grey f14 m-0 mt_5">
              <span>Pressure</span> 1005 mbar
            </p>
            <p class="sub-card-title text-grey f14 m-0 mt_5">
              <span>Wind</span> 3.1 m/s SE
            </p>
            <p class="sub-card-title text-grey f14 m-0 mt_5">
              <span>UV index</span> Low
            </p>
          </div>
        </div>
      </div>
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
  mounted() {},
  data() {
    return {
      city: "",
    };
  },
  methods: {
    async handleSubmit() {
      if (this.city) {
        const payload = this.$globalFunc.addApiKey({ query: this.city });
        const response = await WeatherHelper.addCity(payload);
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
