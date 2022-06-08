<template>
  <p class="sub-card-title text-primary f16 fw-bold m-0">Thursday, Apr 07</p>
  <div class="temperature-group mt_5 gap-3">
    <Temperature-List-Box v-for="num in 24" :key="num" />
  </div>
</template>
<script>
import TemperatureListBox from "@/components/Temperature/TemperatureListBox.vue";
export default {
  name: "TemperatureList",
  components: {
    TemperatureListBox,
  },
};
</script>
<style scoped>
</style>