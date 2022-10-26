<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <RouterView />
</template>

<script>
export default {
  name: "App",
};
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
  --main-dark-green: #547b58;
  --main-green: #779341;
  --main-grey: #c6c5b9;
  --main-white: #fdfdff;
  --main-dark: #393d3f;

  --main-dark-green-rgb: 84, 123, 88;
  --main-green-rgb: 119, 147, 65;
  --main-grey-rgb: 198, 197, 185;
  --main-white-rgb: 253, 253, 255;
  --main-dark-rgb: 57, 61, 63;

  --accordion-icon: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'viewBox='0 0 16 16' fill='%23fff'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
}

* {
  font-family: "Poppins";
}

#footer {
  height: 30vh;
  background-color: var(--main-grey);
}

.grow {
  transition: 300ms !important;
}

.grow:hover {
  transform: scale(1.1);
}

.text-colour-hover {
  transition: 300ms !important;
}

.text-colour-hover:hover {
  color: var(--main-green) !important;
}

a,
a:hover,
a:visited,
a:active {
  color: inherit;
  text-decoration: none;
}

.pp-big-head {
  font-weight: 500;
  font-size: 2.5rem;
}

.pp-head {
  font-weight: 500;
  font-size: 2rem;
}

.pp-subhead {
  font-weight: 500;
  font-size: 1.5rem;
}

.pp-fat-text {
  font-weight: 500;
  font-size: 1rem;
}

.pp-text {
  font-size: 1rem;
}

.illustration {
  max-width: 400px;
  min-width: 150px;
  width: 50vw;
}

#ill-subhead{
  width: 50vw;
  min-width: 200px;
  max-width: 700px;
}

.pp-button {
  width: fit-content;
  color: white;
  background-color: var(--main-green);
  border-color: var(--main-green);
  transition: 300ms;
}

.pp-button:hover {

  /* color: var(--main-green); */
  background-color: white !important;
  border-color: var(--main-green) !important;
  color: var(--main-green) !important; 

}
</style>
