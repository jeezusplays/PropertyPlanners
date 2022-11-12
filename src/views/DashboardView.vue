<script setup>
import { RouterView } from "vue-router";
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="d-flex flex-row h-100 p-0 m-0">
    <div class="d-flex flex-column p-0 m-0">
      <div class="collapse show collapse-horizontal h-100" id="sidebar">
        <div class="p-3 h-100 sidebar text-white bg-dark" style="width: fit-content">
          <div class="d-flex justify-content-center mb-3 align-self-center w-100 text-white text-decoration-none">
            <RouterLink :to="'/'" class="grow">
              <span class="pp-subhead py-2 mx-3 grow">PropertyPlanners</span>
            </RouterLink>
            <button class="btn-close btn-close-white ms-3 d-block d-md-none" type="button" data-bs-toggle="collapse"
              data-bs-target="#sidebar" aria-controls="sidebar" aria-expanded="true" aria-label="Close"></button>
          </div>
          <div class="d-flex mx-3 my-4 grow">
            <img src="../assets/sam.jpg" class="border-rounded rounded-circle border border-4" alt=""
              style="width: 56px; height: 56px; object-fit: cover" />
            <div class="text-start ms-3">
              <span class="pp-fat-text"> John Doe</span>
              <br />
              <span class="opacity-50"> johndoe@bigpp.com</span>
            </div>
          </div>
          <ul class="navbar-nav nav nav-pills flex-column mb-auto">
            <li class="nav-item w-100 text-start">
              <RouterLink :to="'/' + userType + '/dashboard'" class="nav-link grow text-colour-hover px-3 py-2"
                aria-current="page">
                <font-awesome-icon icon="fa-solid fa-house" class="me-3" size="md" />
                <text class="pp-fat-text">Dashboard</text>
              </RouterLink>
            </li>
            <li class="nav-item w-100 text-start">
              <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                  <div class="accordion-header">
                    <button class="accordion-button collapsed grow text-colour-hover p-3 py-2 w-100" type="button"
                      data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
                      aria-controls="collapseOne">
                      <font-awesome-icon icon="fa-solid fa-chart-pie" class="me-3" size="md" />
                      <text class="pp-fat-text">Statistic</text>
                    </button>
                  </div>
                  <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample">
                    <div class="accordion-body mb-2 pt-0">
                      <RouterLink :to="'/' + userType + '/region'" class="nav-link grow text-colour-hover py-1 ms-4"
                        aria-current="page">
                        <font-awesome-icon icon="fa-solid fa-map" class="me-3" size="sm" />
                        <text class="pp-fat-text">By Region</text>
                      </RouterLink>
                      <RouterLink :to="'/' + userType + '/general'" class="nav-link grow text-colour-hover py-1 ms-4"
                        aria-current="page">
                        <font-awesome-icon icon="fa-solid fa-chart-column" class="me-3" size="sm" />
                        <text class="pp-fat-text">General</text>
                      </RouterLink>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li class="nav-item w-100 text-start" v-if="isSeeker">
              <RouterLink :to="'/' + userType + '/search'" class="nav-link grow text-colour-hover px-3 py-2"
                aria-current="page">
                <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="me-3" size="md" />
                <text class="pp-fat-text">Find Agents</text>
              </RouterLink>
            </li>
            <li class="nav-item w-100 text-start">
              <RouterLink :to="'/' + userType + '/chat'" class="nav-link grow text-colour-hover px-3 py-2"
                aria-current="page">
                <font-awesome-icon icon="fa-solid fa-comment" class="me-3" size="md" />
                <text class="pp-fat-text">Chats</text>
              </RouterLink>
            </li>
            <li class="nav-item w-100 text-start" v-if="isSeeker">
              <RouterLink :to="'/' + userType + '/favourites'" class="nav-link grow text-colour-hover px-3 py-2"
                aria-current="page">
                <font-awesome-icon icon="fa-solid fa-star" class="me-3" size="md" />
                <text class="pp-fat-text">Favourites</text>
              </RouterLink>
            </li>
            <li class="nav-item w-100 text-start" v-if="isAgent">
              <RouterLink :to="'/' + userType + '/plans'" class="nav-link grow text-colour-hover px-3 py-2"
                aria-current="page">
                <font-awesome-icon icon="fa-solid fa-tag" class="me-3" size="md" />
                <text class="pp-fat-text">Plans</text>
              </RouterLink>
            </li>
            <li class="nav-item w-100 text-start">
              <RouterLink :to="'/' + userType + '/profile'" class="nav-link grow text-colour-hover px-3 py-2"
                aria-current="page">
                <font-awesome-icon icon="fa-solid fa-user" class="me-3" size="md" />
                <text class="pp-fat-text">Profile</text>
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="d-flex flex-column flex-fill p-0 m-0" id="main-view">
      <div id="main-component">
        <nav class="navbar sticky-top navbar-expand-md px-4 py-3">
          <div class="container-fluid">
            <button class="navbar-toggler d-block" type="button" data-bs-toggle="collapse" data-bs-target="#sidebar"
              aria-controls="sidebar" aria-expanded="true" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <ul class="navbar-nav justify-content-end ms-auto mb-2 mb-lg-0">
              <li class="nav-item ms-auto">
                <a class="nav-link pp p-0" @click="logout()">Logout</a>
              </li>
            </ul>
          </div>

        </nav>
        <RouterView />
      </div>
    </div>
  </div>
</template>

<script>
import { signOut } from "firebase/auth";
import { auth } from '../scripts/fbauth'

export default {
  name: "DashboardNav",
  data() {
    return {
      isSeeker: true,
      isAgent: false,
    };
  },
  mounted() {
    localStorage['type'] == "seeker" ? this.isSeeker == true : this.isSeeker == false
    localStorage['type'] == "seeker" ? this.isAgent == false : this.isAgent == true
  },
  computed: {
    userType() {
      if (localStorage['userType']) {
        return localStorage['userType']
      }
      return 'seeker'
    },
  },
  methods: {
    logout() {
      signOut(auth).then(() => {
        // Sign-out successful.
        localStorage.clear();
        this.$router.push({ path: `/home` })
      }).catch((error) => {
        console.log(error);
      });
    }
  }
};
</script>

<style>
#main-view {
  overflow-x: auto;
}

#main-component {
  min-width: 70vw;
  width: 100%;
}

.accordion {
  --bs-accordion-color: white !important;
  --bs-accordion-bg: initial !important;
  --bs-accordion-border-color: initial !important;
  --bs-accordion-border-width: initial !important;
  --bs-accordion-border-radius: initial !important;
}

.accordion-item:last-of-type {
  border-bottom-right-radius: initial !important;
  border-bottom-left-radius: initial !important;
}

.accordion-item:first-of-type {
  border-top-left-radius: initial !important;
  border-top-right-radius: initial !important;
}

.accordion-item {
  color: white !important;
  background-color: initial !important;
  border: initial !important;
}

.accordion-item:first-of-type .accordion-button {
  border-top-left-radius: initial !important;
  border-top-right-radius: initial !important;
}

.accordion-item:last-of-type .accordion-button.collapsed {
  border-bottom-right-radius: initial !important;
  border-bottom-left-radius: initial !important;
}

.accordion-item:first-of-type .accordion-button {
  border-top-left-radius: initial !important;
  border-top-right-radius: initial !important;
}

.accordion-item:last-of-type .accordion-collapse {
  border-bottom-right-radius: initial !important;
  border-bottom-left-radius: initial !important;
}

.accordion-button:not(.collapsed) {
  color: white;
  background-color: initial !important;
  box-shadow: initial !important;
}

.nav-pills {
  --bs-nav-pills-border-radius: initial !important;
  --bs-nav-pills-link-active-color: initial !important;
  --bs-nav-pills-link-active-bg: initial !important;
}

.accordion-button {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  padding: var(--bs-accordion-btn-padding-y) var(--bs-accordion-btn-padding-x);
  font-size: 1rem;
  color: white;
  text-align: left;
  background-color: var(--bs-accordion-btn-bg);
  border: 0;
  border-radius: 0;
  overflow-anchor: none;
  transition: initial;
}

.accordion-button:focus {
  z-index: 3;
  border-color: initial;
  outline: 0;
  box-shadow: initial;
}

.accordion-button:not(.collapsed)::after {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
  transform: rotate(180deg);
}

.accordion-button::after {
  flex-shrink: 0;
  width: var(--bs-accordion-btn-icon-width);
  height: var(--bs-accordion-btn-icon-width);
  margin-left: auto;
  content: "";
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-size: var(--bs-accordion-btn-icon-width);
  transition: var(--bs-accordion-btn-icon-transition);
  transform: rotate(0deg);
}

.nav {
  --bs-nav-link-color: initial;
  --bs-nav-link-hover-color: initial;
  --bs-nav-link-disabled-color: #6c757d;
}

.sidebar {
  max-width: fit-content;
  /* position: absolute; */
  transition: 300ms;
}

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

#sidebar {
  overflow-x: auto;
}
</style>
