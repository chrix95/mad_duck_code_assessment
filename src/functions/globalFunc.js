export default {
  capitalizeFirstLetter(string) {
    return string ? string.charAt(0).toUpperCase() + string.slice(1) : "";
  },
  onlyNumber(e) {
    if (e.keyCode < 48 || e.keyCode > 57) {
      e.preventDefault();
    }
  },
  generateUuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  },
  getStaticURLParameters(withHours = false) {
    const params = {
      key: process.env.VUE_APP_WEATHER_API_KEY,
      unitGroup: "metric",
      contentType: "json",
    };
    if (withHours) {
      params.include = "current,hours"
    } else {
      params.include = "current"
    }
    return params;
  },
  getNextNDate(num = 0) {
    var nowDate = new Date();
    return `${nowDate.getFullYear()}-${nowDate.getMonth() + 1}-${nowDate.getDate() + num}`;
  },
  convertDateTimetoHuman (date) {
    let dateTime = new Date(date);
    let dateHuman = dateTime.toLocaleString('en-US', {
      month: 'long', // short or long
      day: 'numeric',
      year: 'numeric'
    });
    return dateHuman;
  },
};
