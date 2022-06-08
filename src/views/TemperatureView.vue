<template>
  <div class="row justify-content-start mt-3 mb-1">
    <div class="col-lg-6">
      <Top-Card :info="topParams" />
    </div>
  </div>
  <div class="row justify-content-start">
    <div class="col-lg-12">
      <Bottom-Card />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import TopCard from "@/components/Temperature/TopCard.vue";
import BottomCard from "@/components/Temperature/BottomCard.vue";
export default {
  name: "TemperaturView",
  computed: {
    ...mapState(["loading", "cities"]),
    city() {
      return this.cities.find(city => city.id === this.id);
    },
    topParams() {
      const { request: { query }, location: { name, lat, lon }, current: { feelslike, humidity, pressure, wind_speed, wind_dir, uv_index, temperature, weather_icons } } = this.city;
      return {
        query,
        name,
        lat,
        lon,
        feelslike,
        humidity,
        pressure,
        wind_speed,
        wind_dir,
        uv_index,
        temperature,
        weather_icons,
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
  mounted() {},
  data() {},
  methods: {},
};
</script>

<style scoped>
</style>
