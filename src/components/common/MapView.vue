<template>
  <div class="scrollable">
    <p class="pp-head text-start  mx-5 me-md-0 ms-md-5 mt-3 mb-0">Dashboard</p>
    <div class="row mx-0 px-0 mx-5 me-md-0 ms-md-5">
      <div class="col-12 col-md-7 col-lg-8 p-0 m-0">
        <div id="googleMap" style="height: 500px" class="conotainer-fluid rounded-3 border border-dark"></div>

      </div>
      <div class="col-12 col-md-5 col-lg-4 mt-3 mt-md-0 p-0 px-0 px-md-3 m-0 max-h-100">

        <div class="d-none d-md-block">
          <p class="pp-text opacity-75 mb-3 text-start">Available agents</p>
          <AgentCard v-for="index in 4" :key="index" />
        </div>

      </div>
    </div>
    <div class="d-flex me-5">
      <p class="pp-head text-start ms-5 mt-3 mb-0 pp-green">Dashboard</p>
      <p class="opacity-50 pp-text ms-auto mt-auto grow pointer"><font-awesome-icon icon="fa-solid fa-plus" /> Add to favourites</p>
    </div>

    <div class="row">
      <div class="col">
        statistics
      </div>
      <div class="col">
        chart
      </div>
      <div class="col">
        filters
      </div>
    </div>
    <div class="d-block d-md-none col-12 mx-5 mt-3">
      <p class="pp-text opacity-75 mb-3 text-start">Available agents</p>
      <AgentCard v-for="index in 4" :key="index" />
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import { features } from "../../assets/labels.json";
import { AreaLabel } from "../../scripts/label";
import { Loader } from "@googlemaps/js-api-loader";
import towns from "../../scripts/towns.json";
import * as colours from "../../scripts/colours.json";
import AgentCard from './AgentCard.vue'

export default {
  name: "mapview",
  data() {
    return {
      options: {
        center: { lat: 1.3521, lng: 103.8198 },
        zoom: 12,
        mapId: "2ea4a3a31dcf523",
      },

      loaderSettings: {
        apiKey: "AIzaSyAafbfhfA2m_VY2JnslznFw9pXvgdpwlMY",
        version: "weekly",
      },
      loader: null,
      labels: {},
      activeStyle: {
        strokeWeight: 1,
        fillOpacity: 0.1,
        zIndex: 0,
      },
      inactiveStyle: {
        strokeWeight: 0,
        fillOpacity: 0.2,
      },
      overrideStyle: {
        fillOpacity: 0.4,
        strokeWeight: 2,
      },
    };
  },
  mounted() {
    this.loader = new Loader(this.loaderSettings);
    this.initMap()
  },
  methods: {
    async initMap() {
      this.loader.load().then((google) => {
        var townNames = new Set(towns);
        var labels = this.labels;
        var activeStyle = this.activeStyle
        var inactiveStyle = this.inactiveStyle
        var overrideStyle = this.overrideStyle
        var src = "https://project1-367104.as.r.appspot.com/getgeojson";
        var map = new google.maps.Map(
          document.getElementById("googleMap"),
          this.options
        );
        map.data.loadGeoJson(src);
        map.data.setStyle(function (feature) {
          var name = feature.getProperty("PLN_AREA_N");
          if (townNames.has(name)) {
            activeStyle["fillColor"] = colours[name];
            return activeStyle;
          } else return inactiveStyle;
        });

        map.data.addListener("mouseover", function (event) {
          var name = event.feature.getProperty("PLN_AREA_N");
          if (townNames.has(name)) {
            map.data.overrideStyle(event.feature, overrideStyle);
            labels[name].forceDraw();
          }
        });
        map.data.addListener("mouseout", function (event) {
          map.data.revertStyle();
          var name = event.feature.getProperty("PLN_AREA_N");
          if (townNames.has(name)) labels[name].draw();
        });

        features.forEach((data) => {
          var text = data["properties"]["PLN_AREA_N"];
          if (townNames.has(text)) {
            var latlong = data["geometry"]["coordinates"];
            var label = AreaLabel(
              {
                text: text,
                position: new google.maps.LatLng(latlong[1], latlong[0]),
                map: map,
                fontSize: 1,
                fontColor: "white",
                strokeColor: "green",
                strokeWeight: 7,
                maxZoom: 18,
                minZoom: 12,
              },
              google
            );
            labels[text] = label;
          }
        });
        console.log(labels);
        map.data.addListener("click", function (event) {
          // in the geojson feature that was clicked, get the "place" and "mag" attributes
          let area = event.feature.getProperty("PLN_AREA_N");
          console.log(area);
        });
      });
    },
  },
  components: {
    AgentCard
  }
};
</script>

<style>
.scrollable {
  overflow-x: hidden;
  /* overflow-y:hidden; */
}

.max-h-100 {
  max-height: 450px;
}
</style>
