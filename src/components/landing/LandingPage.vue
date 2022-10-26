<template>
  <!-- Banner -->
  <div class="scroll">
    <Banner/>

    <!-- API Component -->
    <ApiInfo/>

    <!-- About Us -->
    <AboutUs/>

    <!-- Profile Carousel -->
    <ProfileCarousel/>

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
    };
  },
  methods: {
    testData() {
      var gd = new GovData(this.url, this.resource_id);
      gd.getData({ years: this.years, town: "punggol", limit: 500 });
    },
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
  background: transparent; /* make scrollbar transparent */
}
</style>
