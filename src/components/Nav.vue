<script setup>
  import { RouterLink } from "vue-router";
</script>

<template>

  <nav class="navbar sticky-top navbar-expand-md px-4 py-3" id="navbar">
    <div class="container-fluid">
      <a class="navbar-brand" href="/home">PropertyPlanners</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div class="offcanvas-header">
          <a class="navbar-brand">PropertyPlanners</a>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end ms-auto mb-2 mb-lg-0">
            <!-- <li class="nav-item ms-auto"><RouterLink :to="'/home'" class="nav-link pp px-4">Home</RouterLink></li> -->
            <li class="nav-item ms-auto" v-if="this.currentPage != 'not_landing_page'">
              <a onclick="return false" href="#banner" class="nav-link pp px-4">Home</a>
            </li>
            <li class="nav-item ms-auto " v-if="this.currentPage != 'not_landing_page'">
              <a onclick="return false" href="#about-us-container" class="nav-link pp px-4 ">About Us</a>
            </li>
            <li class="nav-item ms-auto" v-if="this.currentPage != 'not_landing_page'">
              <a onclick="return false" href="#api-info" class="nav-link pp px-4 ">Features</a>
            </li>
            <li class="nav-item ms-auto" v-if="this.currentPage != 'not_landing_page'">
              <a onclick="return false" href="#testimonials" class="nav-link pp px-4 ">Testimonials</a>
            </li>
            <li class="nav-item ms-auto" v-if="this.currentPage == 'not_landing_page' && this.isSignup">
              <RouterLink :to="'/login'" class="nav-link pp px-4">Login</RouterLink>
            </li>
            <li class="nav-item ms-auto" v-if="this.currentPage == 'not_landing_page' && !this.isSignup">
              <RouterLink :to="'/signup'" class="nav-link pp px-4">Sign up</RouterLink>
            </li>
            <li class="nav-item ms-auto" v-if="this.currentPage != 'not_landing_page'">
              <RouterLink :to="'/login'" class="nav-link pp px-4">Login</RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>


<!-- Consider $emits? -->

<script>
export default {
  beforeCreate() {
    // Check if current page is login or signup
    if (window.location.pathname.split('/')[1] == "login" || window.location.pathname.split('/')[1] == "signup") {
      localStorage.currentPage = "not_landing_page";
      this.currentPage = "not_landing_page";
      }
    if (window.location.pathname.split('/')[1] == "signup"){
      this.isSignup = true;
    }
  },
  name: "Nav",
  data() {
    return {
      links: [
        {
          currentPage: '',
          isSignup: false,
          // to: "/home",
          // value: "Home",
          // isDropdown: false,
          // dropdown: [],
        },
        // {
        //   to: "/home",
        //   value: "Features",
        //   isDropdown: false,
        //   dropdown: [],
        // },
        // {
        //   to: "/home",
        //   value: "About Us",
        //   isDropdown: false,
        //   dropdown: [],
        // },
        // {
        //   to: "/home",
        //   value: "Testimonials",
        //   isDropdown: false,
        //   dropdown: [],
        // },

        // {
        //   to: "/seeker/dashboard",
        //   value: "Dashboard",
        //   isDropdown: false,
        //   dropdown: [],
        // },
        // {
        //   to: "/login",
        //   value: "Login",
        //   isDropdown: false,
        //   dropdown: [],
        // },
        // {
        //   to: "/",
        //   value: "Dropdown",
        //   isDropdown: true,
        //   dropdown: [
        //     {
        //       to: "/Action",
        //       value: "Action",
        //     },
        //     {
        //       to: "/",
        //       value: "Another action",
        //     },
        //     {
        //       to: "/",
        //       value: "Something else here",
        //     },
        //   ],
        // },
      ],
    };
  },
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

.nav-item.active .nav-link.pp {
  display: inline-block;
  color: var(--main-green);
}

.nav-item.active .nav-link.pp::after {
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
  background-color: #f4f3f1;

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
