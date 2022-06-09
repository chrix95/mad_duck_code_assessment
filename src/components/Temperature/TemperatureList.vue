<template>
  <p class="sub-card-title text-primary f16 fw-bold m-0">{{ day.datetime && $globalFunc.convertDateTimetoHuman(day.datetime) }}</p>
  <div class="temperature-group mt_5 gap-3">
    <!-- <Temperature-List-Box v-for="(day) in 24" :key="num" :temp="num"/> -->
  </div>
</template>
<script>
import TemperatureListBox from "@/components/Temperature/TemperatureListBox.vue";
export default {
  name: "TemperatureList",
  components: {
    TemperatureListBox,
  },
  props: {
    day: {
      type: [Object],
      required: true,
    },
  },
};
</script>
<style scoped>
</style>