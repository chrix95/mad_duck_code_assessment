<template>
  <div class="weather-card text-center">
    <h3 class="card-title text-primary m-0">{{ city.location && city.location.name }}</h3>
    <p class="sub-card-title text-grey f14 m-0">{{ city.location && city.location.country }}</p>
    <p class="temperature text-primary">
      {{ city.current && city.current.temperature}}<sup>o</sup>C
    </p>
    <button type="button" class="btn btn-primary" @click.prevent="viewMoreInfo()">View City</button>
  </div>
</template>
<script>
export default {
  name: "WeatherCard",
  props: {
    city: {
      type: [Object],
      required: true,
    },
  },
  components: { },
  methods: {
    viewMoreInfo() {
      this.$router.push({
        name: "TemperatureInfo",
        params: {
          city: (this.city.location.name).toLowerCase(),
          id: this.city.id,
        },
      });
    },
  },
};
</script>
<style scoped>
</style>