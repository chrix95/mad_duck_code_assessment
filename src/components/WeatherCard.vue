<template>
  <div class="weather-card text-center">
    <img :src="deleteIcon" alt="icon" class="close cursor-pointer" @click.prevent="removeCity()" @mouseenter="toggleHover()" @mouseleave="toggleHover()">
    <h3 class="card-title text-primary m-0">{{ city.address && $globalFunc.capitalizeFirstLetter(city.address) }}</h3>
    <p class="sub-card-title text-grey f14 m-0">{{ city.resolvedAddress }}</p>
    <p class="temperature text-primary">
      {{ city.currentConditions && city.currentConditions.temp }}<sup>o</sup>C
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
  components: {},
  computed: {
    deleteIcon() {
      if (this.hover) {
        return require(`@/assets/img/icons/close-red.png`)
      }
      return require(`@/assets/img/icons/close.png`)
    }
  },
  data() {
    return {
      hover: false,
    };
  },
  methods: {
    viewMoreInfo() {
      this.$router.push({
        name: "TemperatureInfo",
        params: {
          city: (this.city.address).toLowerCase(),
          id: this.city.id,
        },
      });
    },
    removeCity() {
      if (confirm("Are you sure you want to remove this city?")) {
        this.$store.dispatch("removeCity", this.city.id);
      }
    },
    toggleHover() {
      this.hover = !this.hover;
    },
  },
};
</script>
<style scoped>
</style>