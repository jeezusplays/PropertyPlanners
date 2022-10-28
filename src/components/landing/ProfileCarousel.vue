<template>
  <div class="container-fluid bg-dark p-5 profile-carousel">
    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
          aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
          aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
          aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner mb-4">
        <div class="carousel-item p-5 grow active text-light text-center" data-bs-interval="3000">
          <a href="https://www.linkedin.com/in/samuel-chung-339688154/" target="_blank" style="text-decoration: none">
            <img src="../../assets/sam.jpg" class="prof-img rounded-circle" alt="">
            <h5 class="mt-3 mb-0">Samuel Chung</h5>
            <p class="opacity-50">Property Agent</p>
            <p class="mx-auto prof-desc opacity-75">PropertyPlanners has helped me to meet more seekers and form strong
              relationships with them!</p>
          </a>
        </div>
        <div class="carousel-item p-5 grow text-light text-center" data-bs-interval="3000">
          <a href="https://www.linkedin.com/in/joey-tan-zuyi" target="_blank" style="text-decoration: none">

            <img src="../../assets/joey.jpg" class="prof-img rounded-circle" alt="">
            <h5 class="mt-3 mb-0">Joey Tan</h5>
            <p class="opacity-50">Property Seeker</p>
            <p class="mx-auto prof-desc opacity-75">PropertyPlanners is a comprehensive and easy-to-use website to learn
              about the current property market. It has helped me to make a right decision in choosing a home.</p>

          </a>
        </div>
        <div class="carousel-item p-5 grow text-light text-center" data-bs-interval="3000">
          <a href="https://www.linkedin.com/in/liowhongxiang/" target="_blank" style="text-decoration: none">

            <img src="../../assets/hx.jpg" class="prof-img rounded-circle" alt="">
            <h5 class="mt-3 mb-0">Liow Hong Xiang</h5>
            <p class="opacity-50">Property Agent</p>
            <p class="mx-auto prof-desc opacity-75">Thanks to PropertyPlanners, I was able to understand my competitors
              and provide my clients with the best properties and the best prices!</p>

          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.profile-carousel {
  background-image: linear-gradient(0deg,
      rgba(0, 0, 0, 0.9),
      rgba(0, 0, 0, 0.9)),
    url("../../assets/HDB_banner.jpg");

}

.prof-img {
  width: 120px;
  height: 120px;
  object-fit: cover;
  border: 5px solid rgba(255, 255, 255, 0.4);
}

.prof-desc {
  max-width: 800px;
}

.carousel-indicators button {
  width: 12px !important;
  height: 12px !important;
  border-radius: 50%;
}
</style>
