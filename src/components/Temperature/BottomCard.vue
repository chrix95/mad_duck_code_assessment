<template>
  <div class="weather-card mb-3">
    <div class="row justify-content-between align-items-start">
      <Temperature-List v-for="num in 3" :key="num" />
    </div>
  </div>
</template>
<script>
import TemperatureList from "@/components/Temperature/TemperatureList.vue";
export default {
  name: "BottomCard",
  components: { TemperatureList },
};
</script>
<style scoped>
</style>