<template>
  <div class="temperture-group-item">
    <p class="sub-card-title text-primary f14 fw-normal m-0 text-center mb_5">
      {{ getNum }}h
    </p>
    <img
      :src="getIcon"
      alt="icon"
      class="img-fluid d-flex mx-auto mb_5"
    />
    <p class="sub-card-title text-primary fw-bold f12 text-center m-0 mb_5">
      {{ getRandomTemp }}<sup>o</sup>C
    </p>
  </div>
</template>
<script>
export default {
  name: "TemperatureListBox",
  props: {
    item: {
      type: [Object],
      required: true,
    },
  },
  computed: {
    getNum() {
      return this.item.datetime.substr(0, 2) > 0 && this.item.datetime.substr(0, 2) < "10"
        ? `${this.item.datetime.substr(1, 1)}`
        : this.item.datetime.substr(0, 2);
    },
    getRandomTemp() {
      return this.item.temp;
    },
    getIcon() {
      return this.item.icon && require(`@/assets/img/icons/${this.item.icon}.png`);
    },
  },
};
</script>
<style scoped>
</style>