<template>
  <div id="he-plugin-simple"></div>
</template>


<script>
export default {
name: "Weather",
  created() {
    window.WIDGET = {
      "CONFIG": {
        "modules": "01234",
        "background": "1",
        "tmpColor": "FFFFFF",
        "tmpSize": "16",
        "cityColor": "FFFFFF",
        "citySize": "16",
        "aqiColor": "FFFFFF",
        "aqiSize": "16",
        "weatherIconSize": "24",
        "alertIconSize": "18",
        "padding": "10px 10px 10px 10px",
        "shadow": "0",
        "language": "auto",
        "borderRadius": "10",
        "fixed": "false",
        "vertical": "top",
        "horizontal": "left",
        "key": "2f51e3944fec4271910fb31bee511437"
      }
    };
    (function (d) {
      const c = d.createElement('link');
      c.rel = 'stylesheet'
      // c.href = '../static/css/he-simple.css'
      c.href = 'https://widget.qweather.net/simple/static/css/he-simple.css?v=1.4.0'
      const s = d.createElement('script');
      // s.src = "../static/js/he-simple.js"
      s.src = 'https://widget.qweather.net/simple/static/js/he-simple.js?v=1.4.0'
      const sn = d.getElementsByTagName('script')[0];
      sn.parentNode.insertBefore(c, sn)
      sn.parentNode.insertBefore(s, sn)
    })(document)
  }
}
</script>

<style scoped>

</style>
