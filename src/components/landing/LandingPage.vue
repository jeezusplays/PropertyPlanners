<template>
  <!-- Banner -->
  <div class="scroll"  data-bs-spy="scroll" data-bs-target="#navbar" data-bs-smooth-scroll="true" tabindex="0">
    <section>
      <Banner/>
    </section>
    

    <!-- About Us -->
    <section id="about-us-container">
      <AboutUs/>
    </section>
    

    <!-- API Component -->
    <section id="api-info">
      <ApiInfo/>
    </section>

    <!-- Profile Carousel -->
    <section id="testimonials">
      <ProfileCarousel/>
    </section>

    <!-- Footer -->
    <Footer/>
  </div>
</template>

<script>
import Footer from "../Footer.vue";
import ApiInfo from "./ApiInfo.vue";
import ProfileCarousel from "./ProfileCarousel.vue";
import AboutUs from "./AboutUs.vue";
import Banner from "./Banner.vue";
import GovData from "../../scripts/data";

export default {
  name: "Home",
  components: {
    Footer,
    ApiInfo,
    ProfileCarousel,
    AboutUs,
    Banner
  },
  data() {
    return {
      years: [2017, 2022],
      url: "https://data.gov.sg/api/action/datastore_search",
      resource_id: "f1765b54-a209-4718-8d38-a39237f502b3",
      observer: null,
    };
  },
  created(){

  },
  beforeUnmount(){
    this.observer.disconnect()
  },
  mounted(){
    console.log(this.$el)
    this.observer = new IntersectionObserver(this.onElementObserved,{
      root: document,
      threshold: 0.9
    })
    document.querySelectorAll('section[id]').forEach((section)=>{
      this.observer.observe(section)
    })
  },
  methods: {
    testData() {
      var gd = new GovData(this.url, this.resource_id);
      gd.getData({ years: this.years, town: "punggol", limit: 500 });
    },
    onElementObserved(entries){
      entries.forEach(({target, isIntersecting})=>{
        const id = target.getAttribute('id')
        if(isIntersecting){
          document.querySelector(`nav li a[href="#${id}"]`)
                  .parentElement.classList.add('active')
        }else{
          document.querySelector(`nav li a[href="#${id}"]`)
                  .parentElement.classList.remove('active')
        }
      })
    }
  },
};
</script>

<style>
green {
  color: var(--main-green);
}

.scroll {
  overflow: auto;
}

::-webkit-scrollbar {
  width: 0px;
  background: transparent;
  /* make scrollbar transparent */
}
</style>
