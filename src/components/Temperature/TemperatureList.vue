<template>
  <div class="temperture-groups">
    <p class="sub-card-title text-primary f16 fw-bold m-0">{{ day.datetime && $globalFunc.convertDateTimetoHuman(day.datetime) }}</p>
    <div class="temperature-group mt_5 mb-1 gap-2">
      <Temperature-List-Box v-for="(day, index) in getHours" :key="index" :item="day"/>
    </div>
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
  computed: {
    getHours() {
      return this.day && this.day.hours;
    },
  }
};
</script>
<style scoped>
</style>