<template>
  <div class="contianer-fluid bg-dark p-5 profile-carousel">
    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
          aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
          aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
          aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner mb-4">
        <div class="carousel-item p-5 grow active text-light text-center">
          <a href="https://www.linkedin.com/in/samuel-chung-339688154/" target="_blank" style="text-decoration: none">

            <img src="../../assets/sam.jpg" class="prof-img rounded-circle" alt="">
            <h5 class="mt-3 mb-0">Samuel Chung</h5>
            <p class="opacity-50">Project manager</p>
            <p class="mx-auto prof-desc opacity-75">Some quick example text to build on the card title and make up the
              bulk of the card's content.Some quick example text to build on the card title and make up the
              bulk of the card's content.</p>
            
          </a>
        </div>
        <div class="carousel-item p-5 grow text-light text-center">
          <a href="https://www.linkedin.com/in/samuel-chung-339688154/" target="_blank" style="text-decoration: none">

            <img src="../../assets/sam.jpg" class="prof-img rounded-circle" alt="">
            <h5 class="mt-3 mb-0">Samuel Chung</h5>
            <p class="opacity-50">Project manager</p>
            <p class="mx-auto prof-desc opacity-75">Some quick example text to build on the card title and make up the
              bulk of the card's content.Some quick example text to build on the card title and make up the
              bulk of the card's content.</p>
            
          </a>
        </div>
        <div class="carousel-item p-5 grow text-light text-center">
          <a href="https://www.linkedin.com/in/samuel-chung-339688154/" target="_blank" style="text-decoration: none">

            <img src="../../assets/sam.jpg" class="prof-img rounded-circle" alt="">
            <h5 class="mt-3 mb-0">Samuel Chung</h5>
            <p class="opacity-50">Project manager</p>
            <p class="mx-auto prof-desc opacity-75">Some quick example text to build on the card title and make up the
              bulk of the card's content.Some quick example text to build on the card title and make up the
              bulk of the card's content.</p>
            
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

.carousel-item {}

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
