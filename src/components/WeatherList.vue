<template>
  <div class="d-flex flex-wrap justify-content-center align-content-around gap-3 weather-list">
    <Weather-Card v-for="num in 5" :key="num"/>
  </div>
</template>
<script>
import WeatherCard from "@/components/WeatherCard.vue";
export default {
  name: "WeatherList",
  components: { WeatherCard },
};
</script>
<style scoped>
</style>