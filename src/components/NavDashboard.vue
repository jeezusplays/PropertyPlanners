<script setup>
//  import { RouterLink } from "vue-router";
</script>

<template>
  <link
    href="https://fonts.googleapis.com/css?family=Poppins"
    rel="stylesheet"
  />
  <nav class="navbar sticky-top navbar-expand-md px-4 py-3">
    <div class="container-fluid">
      <button
        class="navbar-toggler d-block d-sm-none"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar"

      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <button
        class="navbar-toggler d-none d-sm-block"
        type="button"
        v-on:click="toggleSidebar('sidebar')"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

    </div>
  </nav>
</template>

<script>

var toggleSidebar = (myDIV)=>{
  var element = document.getElementById(myDIV);
  element.classList.toggle('d-sm-flex');
}

export default {
  name: "NavDashboardView",
  data() {
    return {
      links: [
        {
          to: "/login",
          value: "Login",
          isDropdown: false,
          dropdown: [],
        },
        {
          to: "/",
          value: "Home",
          isDropdown: false,
          dropdown: [],
        },
        {
          to: "/seeker/dashboard",
          value: "Dashboard",
          isDropdown: false,
          dropdown: [],
        },
        {
          to: "/",
          value: "Dropdown",
          isDropdown: true,
          dropdown: [
            {
              to: "/Action",
              value: "Action",
            },
            {
              to: "/",
              value: "Another action",
            },
            {
              to: "/",
              value: "Something else here",
            },
          ],
        },
      ],
    };
  },
  methods:{
    toggleSidebar
  }
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
  --bs-navbar-toggler-focus-width: 0rem;
  background-color: rgba(var(--main-grey-rgb),0.2);
}

.navbar-toggler {
  border: 0px solid white;
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
