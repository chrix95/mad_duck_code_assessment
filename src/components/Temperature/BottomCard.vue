<template>
  <div class="weather-card lower-padding mb-3">
    <div class="row justify-content-between align-items-start">
      <div class="col-lg-12" v-for="(day, index) in days" :key="index">
        <Temperature-List :day="day" />
      </div>
    </div>
  </div>
</template>
<script>
import TemperatureList from "@/components/Temperature/TemperatureList.vue";
export default {
  name: "BottomCard",
  components: { TemperatureList },
  props: {
    days: {
      type: [Array],
      required: true,
    },
  },
};
</script>
<style scoped>
</style>