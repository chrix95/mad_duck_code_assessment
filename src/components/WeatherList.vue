<template>
  <div class="d-flex flex-wrap justify-content-center align-content-around gap-4 weather-list">
    <Weather-Card v-for="city in cities" :key="city" :city="city" />
  </div>
</template>
<script>
import { mapState } from 'vuex';
import WeatherCard from "@/components/WeatherCard.vue";
export default {
  name: "WeatherList",
  components: { WeatherCard },
  computed: {
    ...mapState(["cities"]),
  },
};
</script>
<style scoped>
</style>