<template>
  <!-- Banner -->
  <div class="banner container-fluid p-5 align-items-center">
    <div class="container h-100 p-5">
      <div class="ps-lg-5 row h-50">
        <div class="col-lg-12 mt-auto mb-auto mb-md-3 text-lg-start">
          <h1 class="title text-light">More Data <green>Less Hassle</green></h1>
        </div>
      </div>
      <div class="ps-lg-5 row h-50">
        <div class="col-lg-8 mb-auto text-lg-start">
          <p class="fs-5 lh-lg text-light mb-5">
            View comprehensive, interactive, and free statistical data with
            Property Planners
            <br />
            Powerful charts at your fingertips for <b>FREE</b>
          </p>
          <button
            type="button"
            id="signup_banner"
            class="btn btn-primary rounded-pill btn-lg"
          >
            Sign up
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- API Component -->
  <API_info />

  <!-- About Us -->
  <AboutUs />

  <!-- Profile Carousel -->
  <ProfileCarousel />

  <!-- Footer -->
  <Footer />
</template>

<script>
import Footer from "../components/Footer.vue";
import API_info from "../components/API_info.vue";
import ProfileCarousel from "../components/ProfileCarousel.vue";
import AboutUs from "../components/AboutUs.vue"

export default {
  name: "App",
  components: {
    Footer,
    API_info,
    ProfileCarousel,
    AboutUs
    
  },
};
</script>

<style>
@import url(https://fonts.googleapis.com/css?family=Lato:400,300,100,700,900);

.banner {
  background-image: linear-gradient(
      0deg,
      rgba(var(--main-dark-rgb), 0.7),
      rgba(var(--main-dark-rgb), 1)
    ),
    url("../assets/profile_carousel.jpg");
  /* object-fit: cover; */
  background-size:cover;
}

.title {
  font-family: "Lato";
  font-weight: 900;
  font-size: 4rem;
}

#signup_banner {
  width: 120px;
  background-color: var(--main-green);
  border-color: var(--main-green);
  transition: 300ms;
}

#signup_banner:hover {

  /* color: var(--main-green); */
  background-color: rgba(var(--main-green-rgb),0);

}

green{
  color: var(--main-green);
}

</style>
