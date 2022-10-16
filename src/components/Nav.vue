<script setup>
import { RouterLink } from 'vue-router'

</script>

<template>
  <link href="https://fonts.googleapis.com/css?family=Poppins" rel="stylesheet" />
  <nav class="navbar sticky-top navbar-expand-md px-4 py-3 border-bottom">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Property Planners</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div class="offcanvas-header">
          <a class="navbar-brand" href="#">Property Planners</a>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end ms-auto mb-2 mb-lg-0">
            <li class="nav-item ms-auto">
              <RouterLink class="nav-link pp px-4 active" to="/" aria-current="page">
                Home
              </RouterLink>
            </li>
            <li class="nav-item ms-auto">
              <RouterLink class="nav-link pp px-4" to="/about"> <span>Link</span> </RouterLink>
            </li>
            <li class="nav-item ms-auto dropdown">
              <a class="nav-link pp px-4" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item p-3 text-center" href="#">Action</a></li>
                <li><a class="dropdown-item p-3 text-center" href="#">Another action</a></li>
                <li><a class="dropdown-item p-3 text-center" href="#">Something else here</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavView",
};
</script>

<style>
.nav-item .nav-link.pp {
  color: var(--main-dark);
  font-weight: 700;

}

.nav-item .nav-link.pp::after {
  content: "";
  width: 0px;
  height: 2px;
  display: block;
  background: var(--main-green);
  transition: 300ms;
}

.nav-item .nav-link.pp:hover {
  display: inline-block;
  color: var(--main-green);
}

.nav-item .nav-link.pp:hover::after {
  width: 100%;
}

.navbar-brand {
  font-family: "Poppins";
  font-size: 26px;
  color: var(--main-green) !important;
  font-weight: 900;
  transition: 300ms;
}

.navbar-brand:hover {
  color: var(--main-dark) !important;
}

.navbar {
  background-color: var(--main-white);
}

.dropdown-menu.show {
  padding: 0px;
  position: absolute;
  right: 0;
  left: initial !important;
}

.dropdown-menu[data-bs-popper] {
  left: initial;
}

.navbar-collapse.collapse.show ul {
  margin-top: 1rem;
}

.dropdown-item {
  transition: 300ms;
}

.dropdown-item:hover {
  background-color: var(--main-grey);
}
</style>
