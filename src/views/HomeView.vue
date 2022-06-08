<template>
  <div class="row justify-content-center mt-5">
    <div class="col-lg-8">
      <h3 class="f24 fw-bold text-white">Add Cities</h3>
      <p class="f18 fw-normal text-white mt-1">Add 5 cities whose temperature you want to track.</p>
      <form action="" class="weather-form mt-5" @submit.prevent="handleSubmit()">
        <div class="form-group">
          <img src="@/assets/img/icons/icon-plus.svg" alt="add icon" class="buttons add-icon">
          <input type="text" class="form-control" placeholder="Add a city..." v-model="city" />
          <button class="btn add-city buttons cursor-pointer">
            Add
          </button>
        </div>
      </form>
    </div>
    <div class="col-lg-10">
      <Weather-List />
    </div>
  </div>
</template>

<script>
import WeatherList from "@/components/WeatherList.vue";
export default {
  name: "HomeView",
  components: { WeatherList },
  data() {
    return {
      city: "",
    };
  },
  methods: {
    handleSubmit() {
      console.log("submit");
    }
  },
};
</script>

<style scoped>
</style>
