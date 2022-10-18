<script setup>
import { RouterView } from 'vue-router'
</script>

<template>

  <div class="d-flex flex-row  h-100 p-0 m-0">
    <div class="d-flex flex-column p-0 m-0" id="sidebar">
      <RouterView name="sidebar" />
    </div>

    <div class="d-flex flex-column flex-fill p-0 m-0">
      <RouterView name="navbar"/>
      <RouterView  />
    </div>
  </div>


</template>

<script>
// import NavView from "./components/Nav.vue"
// import Sidebar from "./components/Sidebar.vue"
// import {test} from './scripts/fbapp'

// test()

export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  display: flex;
  flex-flow: column;
  height: 100vh;
}

:root {
  --main-dark-green: #547B58;
  --main-green: #779341;
  --main-grey: #C6C5B9;
  --main-white: #FDFDFF;
  --main-dark: #393D3F;

  --main-dark-green-rgb: 84, 123, 88;
  --main-green-rgb: 119, 147, 65;
  --main-grey-rgb: 198, 197, 185;
  --main-white-rgb: 253, 253, 255;
  --main-dark-rgb: 57, 61, 63;

}


* {
  font-family: 'Poppins';
}


#footer {
  height: 30vh;
  background-color: var(--main-grey);
}

.grow {
  transition: 300ms;
}

.grow:hover {
  transform: scale(1.1);
}

a,
a:hover,
a:visited,
a:active {
  color: inherit;
  text-decoration: none;
}

#sidebar {
  max-width: fit-content;
}
</style>
