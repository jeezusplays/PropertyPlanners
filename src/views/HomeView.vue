
<template>
  <!-- Banner -->
  <div class="banner container-fluid p-5 align-items-center">
    <div class="ps-lg-5 row h-50">
      <div class="col-lg-8 mt-auto mb-auto mb-md-3 text-lg-start">
        <h1 class="title text-light">More Data, Less Hassle</h1>
      </div>
    </div>
    <!-- <div class="row d-none d-lg-block h-50">

    </div> -->
    <div class="ps-lg-5 row h-50">
      <div class="col-lg-8 mb-auto text-lg-start">
        <p class="fs-5 lh-lg text-light mb-5">
          View comprehensive, interactive, and free statistical data with Property Planners
          <br>
          Powerful charts at your fingertips for <b>FREE</b>
        </p>
        <button type="button" id="signup_banner" class="btn btn-primary rounded-pill btn-lg">
          Sign up
        </button>
      </div>
    </div>
  </div>
  <!-- Footer -->
  <Footer/>
</template>

<script>
import Footer from "../components/Footer.vue"

export default {
  name: 'App',
  components: {
    Footer
  }
}
</script>

<style>
@import url(https://fonts.googleapis.com/css?family=Lato:400,300,100,700,900);

.banner {
  max-height: 800px;
  height: 70vh;
  background-image: linear-gradient(0deg, rgba(var(--main-dark-rgb), 0.7), rgba(var(--main-dark-rgb), 1)), url("../assets/HDB_banner.jpg");
  /* object-fit: cover; */
  background-size: contain;

}

.title{
  font-family: 'Lato';
  font-weight: 900;
  font-size: 4rem;
}

#signup_banner{
  width: 120px;
}

#footer{
  height: 30vh;
  background-color: var(--main-grey);
}
</style>
