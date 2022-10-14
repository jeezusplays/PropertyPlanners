<script setup>
import {RouterView } from 'vue-router'
</script>

<template>
  <NavView/>
  <RouterView />
</template>

<script>
import NavView from "./views/Nav.vue"
// import {test} from './scripts/fbapp'

// test()

export default {
  name: 'App',
  components: {
    NavView
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

:root {
  --main-dark-green : #547B58;
  --main-green : #779341;
  --main-grey : #C6C5B9;
  --main-white : #FDFDFF;
  --main-dark : #393D3F;

}

</style>
