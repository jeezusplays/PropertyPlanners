<template>
  <button v-on:click="initMap()">test url</button>
  <div
    id="googleMap"
    style="width: 100%; height: 500px"
    class="border border-dark"
  ></div>
</template>

<script>
import { features } from "../../assets/labels.json";
import { AreaLabel } from "../../scripts/label";
import { Loader } from "@googlemaps/js-api-loader";
import towns from "../../scripts/towns.json";
import * as colours from "../../scripts/colours.json";

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
      loader: null
    };
  },
  mounted(){
    this.loader = new Loader(this.loaderSettings)
  },
  methods: {
    async initMap() {
      this.loader.load().then((google)=>{
        var townNames = new Set(towns);
      var src = "https://project1-367104.as.r.appspot.com/getgeojson";
      var map = new google.maps.Map(
        document.getElementById("googleMap"),
        this.options
      );
      map.data.loadGeoJson(src);
      map.data.setStyle(function (feature) {
        var name = feature.getProperty("PLN_AREA_N");
        if (townNames.has(name)) {
          var color = colours[name];
          return {
            fillColor: color,
            strokeWeight: 1,
            fillOpacity: 0.1,
            zIndex: 0,
          };
        } else {
          return {
            strokeWeight: 0,
            fillOpacity: 0.2,
          };
        }
      });

      map.data.addListener("mouseover", function (event) {
        var name = event.feature.getProperty("PLN_AREA_N");
        if (townNames.has(name)) {
          map.data.overrideStyle(event.feature, {
            fillOpacity: 0.4,
            strokeWeight: 2,
          });
        }
      });
      map.data.addListener("mouseout", function () {
        map.data.revertStyle();
      });

      features.forEach((data) => {
        var text = data["properties"]["PLN_AREA_N"];
        console.log(towns);
        if (townNames.has(text)) {
          var latlong = data["geometry"]["coordinates"];
          var label = AreaLabel(
            {
              text: text,
              position: new google.maps.LatLng(latlong[1], latlong[0]),
              map: map,
              fontSize: 1,
              fontColor: "red",
              strokeColor: "red",
              strokeWeight: 1,
              maxZoom: 18,
              minZoom: 12,
            },
            google
          );
        }

        console.log(label);
      });
      console.log(features);
      map.data.addListener("click", function (event) {
        // in the geojson feature that was clicked, get the "place" and "mag" attributes
        let area = event.feature.getProperty("PLN_AREA_N");
        console.log(area);
      });
      })

    },
  },
};
</script>
