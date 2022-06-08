<template>
  <div class="weather-card">
    <div class="row justify-content-between align-items-start">
      <div class="col-lg-4">
        <h3 class="card-title text-primary m-0">Novi Sad</h3>
        <p class="sub-card-title text-grey f14 m-0 mt-1">Vojvodina, Serbia</p>
        <p class="sub-card-title text-grey f14 m-0 mt_5">
          45.2396° N, 19.8227° E
        </p>
      </div>
      <div class="col-lg-4">
        <img
          src="https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0024_thunderstorms.png"
          alt="weather icon"
          class="img-fluid d-flex mx-auto"
        />
        <p class="temperature text-primary text-center">22<sup>o</sup>C</p>
      </div>
      <div class="col-lg-4">
        <p class="sub-card-title text-grey f14 m-0">
          <span>Feels like</span> 20<sup>o</sup>C
        </p>
        <p class="sub-card-title text-grey f14 m-0 mt_5">
          <span>Humidity</span> 41%
        </p>
        <p class="sub-card-title text-grey f14 m-0 mt_5">
          <span>Pressure</span> 1005 mbar
        </p>
        <p class="sub-card-title text-grey f14 m-0 mt_5">
          <span>Wind</span> 3.1 m/s SE
        </p>
        <p class="sub-card-title text-grey f14 m-0 mt_5">
          <span>UV index</span> Low
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
</style>