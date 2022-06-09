<template>
  <div class="weather-card lower-padding">
    <div class="row justify-content-between align-items-start">
      <div class="col-12 col-md-4 col-lg-4 mb-1">
        <div class="left-card mb-2">
          <h3 class="card-title text-primary m-0">{{ info.name }}</h3>
          <p class="sub-card-title text-grey f14 m-0 mt-1">{{ info.query && $globalFunc.capitalizeFirstLetter(info.query) }}</p>
          <p class="sub-card-title text-grey f14 m-0 mt_5">
            {{ info.lat }}° N, {{ info.lon }}° E
          </p>
        </div>
      </div>
      <div class="col-6 col-md-4 col-lg-4">
        <div class="center-card mb-1">
          <img
            :src="info.weather_icons[0]"
            alt="weather icon"
            class="img-fluid d-flex"
          />
          <p class="temperature text-primary">{{ info.temperature }}<sup>o</sup>C</p>
        </div>
      </div>
      <div class="col-6 col-md-4 col-lg-4">
        <div class="right-card mb-1">
          <p class="sub-card-title text-grey f14 m-0">
            <span>Feels like</span> {{ info.feelslike }}<sup>o</sup>C
          </p>
          <p class="sub-card-title text-grey f14 m-0 mt_5">
            <span>Humidity</span> {{ info.humidity }}%
          </p>
          <p class="sub-card-title text-grey f14 m-0 mt_5">
            <span>Pressure</span> {{ info.pressure }} mbar
          </p>
          <p class="sub-card-title text-grey f14 m-0 mt_5">
            <span>Wind</span> {{ info.windspeed }} m/s {{ info.wind_dir }}
          </p>
          <p class="sub-card-title text-grey f14 m-0 mt_5">
            <span>UV index</span> {{ info.uv_index }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "TopCard",
  props: {
    info: {
      type: [Object],
      required: true,
    },
  },
};
</script>
<style scoped>
</style>