export default {
  capitalizeFirstLetter(string) {
    return string ? string.charAt(0).toUpperCase() + string.slice(1) : "";
  },
  onlyNumber(e) {
    if (e.keyCode < 48 || e.keyCode > 57) {
      e.preventDefault();
    }
  },
  addApiKey(parameters) {
    return {
      access_key: process.env.VUE_APP_WEATHER_API_KEY,
      ...parameters,
    };
  },
};
