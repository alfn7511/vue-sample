<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
  // Import Font Awesome Icons Set
  $fa-font-path: "~font-awesome/fonts/";
  @import "~font-awesome/css/font-awesome.min.css";
  // Import Simple Line Icons Set
  $simple-line-font-path: "~simple-line-icons/fonts/";
  @import "~simple-line-icons/css/simple-line-icons.css";

  @import "~vue-multiselect/dist/vue-multiselect.min.css";

  @import "~leaflet/dist/leaflet.css";

  @import "~highcharts/css/highcharts";


  // Import Main styles for this application
  @import "./scss/style";
</style>
