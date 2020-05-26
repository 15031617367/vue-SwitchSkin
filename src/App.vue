<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import '../static/echarts_essos'
import "../static/echarts_dark"
export default {
  name: 'App'
}
</script>

<style>
*{
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}
html,
body,
#app{
  height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
