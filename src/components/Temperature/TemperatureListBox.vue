<template>
  <div class="temperture-group-item">
    <p class="sub-card-title text-primary f14 fw-normal m-0 text-center mb_5">
      {{ getNum }}h
    </p>
    <img
      src="https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0024_thunderstorms.png"
      alt="weather icon"
      class="img-fluid d-flex mx-auto mb_5"
    />
    <p class="sub-card-title text-primary fw-bold f14 text-center">
      {{ getRandomTemp }}<sup>o</sup>C
    </p>
  </div>
</template>
<script>
export default {
  name: "TemperatureListBox",
  props: {
    num: {
      type: [Number, String],
      required: true,
    },
  },
  computed: {
    getNum() {
      return this.num - 1 < 1 ? `0${this.num - 1}` : this.num - 1;
    },
    getRandomTemp() {
      return Math.floor(Math.random() * (30 - 20) + 20);
    },
  },
};
</script>
<style scoped>
</style>