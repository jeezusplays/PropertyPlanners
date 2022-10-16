<script setup>
import {RouterView } from 'vue-router'
</script>

<template>
  <NavView/>
  <RouterView />
</template>

<script>
import NavView from "./components/Nav.vue"
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

  --main-dark-green-rgb : 84, 123, 88;
  --main-green-rgb : 119, 147, 65;
  --main-grey-rgb : 198, 197, 185;
  --main-white-rgb : 253, 253, 255;
  --main-dark-rgb : 57, 61, 63;

}

#footer {
  height: 30vh;
  background-color: var(--main-grey);
}

.grow{
  transition: 300ms;
}
.grow:hover{
  transform: scale(1.1);
}

a, a:hover, a:visited, a:active {
  color: inherit;
  text-decoration: none;
}
</style>
