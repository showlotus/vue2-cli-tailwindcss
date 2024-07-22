<template>
  <div id="app" class="flex flex-col justify-center items-center">
    <img alt="Vue logo" src="./assets/logo.png" class="w-60" />
    <div class="bg-green-500 font-bold text-white p-4 rounded w-40">123</div>
    <HelloWorld v-if="0" msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
