<template>
  <div class="row justify-content-start mt-2 mb-1">
    <div class="col-lg-12">
      <router-link to="/">
        <img src="@/assets/img/icons/bi_arrow-left-short.svg" alt="back icon" class="img-fluid mx-auto mb-1 back-image-icon">
      </router-link>
    </div>
    <div class="col-lg-6">
      <Top-Card :info="topParams" />
    </div>
  </div>
  <div class="row justify-content-start">
    <div class="col-lg-12">
      <Bottom-Card :days="city.days"/>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import TopCard from "@/components/Temperature/TopCard.vue";
import BottomCard from "@/components/Temperature/BottomCard.vue";
import WeatherHelper from "@/functions/actions/WeatherRequest";
export default {
  name: "TemperaturView",
  computed: {
    ...mapState(["loading", "cities"]),
    city() {
      return this.cities.find(city => city.id === this.id);
    },
    topParams() {
      const { address, resolvedAddress, latitude, longitude, currentConditions: { feelslike, humidity, pressure, wind_speed, winddir, uvindex, temp, icon } } = this.city;
      return {
        query: address,
        name: resolvedAddress,
        lat: latitude,
        lon: longitude,
        feelslike,
        humidity,
        pressure,
        wind_speed,
        wind_dir: winddir,
        uv_index: uvindex,
        temperature: temp,
        weather_icons: icon,
      };
    },
  },
  props: {
    id: {
      type: [String],
      required: true,
    },
  },
  components: { TopCard, BottomCard },
  mounted() {
    if (this.city) {
      this.getNext3DaysTemperature();
    }
  },
  data() {
    return {}
  },
  methods: {
    async getNext3DaysTemperature() {
      if (this.city) {
        const [ startDate, endDate ] = [this.$globalFunc.getNextNDate(1), this.$globalFunc.getNextNDate(3)];
        const urlParams = this.$globalFunc.getStaticURLParameters(true);
        const response = await WeatherHelper.getNext3DaysTemperature({ address: this.city.address, startDate, endDate, id: this.id, urlParams });
        if (response.status) {
          // 
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
    }
  },
};
</script>

<style scoped>
</style>
