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
      <p class="opacity-50 pp-text ms-auto mt-auto grow pointer">
        <font-awesome-icon icon="fa-solid fa-plus" /> Add to favourites
      </p>
    </div>

    <div class="row mx-3">
      <div class="col-12 col-md-3 order-2 order-md-1">
        <!-- Stats 1 -->
        <div class="card m-2 py-3">
          <div class="card-body">
            <h5 class="card-title">Mean Price of Flats</h5>
            <p class="card-text" id = "median_price"></p>
            <p id = "placeholder1"><i>Click on a region (town) to display information!</i></p>
          </div>
        </div>
        <!-- Stats 2 -->
        <div class="card m-2 py-3">
          <div class="card-body">
            <h5 class="card-title">Price per sqm</h5>
            <p class="card-text" id = "ppsqm"></p>
            <p id = "placeholder2"><i>Click on a region (town) to display information!</i></p>

          </div>
        </div>
        <!-- Stats 3 -->
        <div class="card m-2 py-3">
          <div class="card-body">
            <h5 class="card-title">% in Price Difference</h5>
            <h6 class="card-subtitle mb-2 text-muted">(Compared to last year)</h6>
            <p class="card-text" id = "price_comparison"></p>
            <p id = "placeholder3"><i>Click on a region (town) to display information!</i></p>
          </div>
        </div>
      </div>

      <div class="col-12 col-md-7 order-1 order-md-2">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Distribution of Flat Types Sold</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Mean Price by Flat Type</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Historical Mean Price</button>
          </li>
        </ul>
        <div class="tab-content" id="myTabContent">
          <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
            <canvas id="room_dist_pieChart" style = "max-height: 300px"></canvas>
          </div>
          <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
            2
          </div>
          <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
            3
          </div>
        </div>
        
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
import $ from 'jquery';


export default {
  name: "mapview",
  data() {
    return {
      townname: '',
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
        console.log("labels:", labels);
        map.data.addListener("click", function (event) {
          // in the geojson feature that was clicked, get the "place" and "mag" attributes
          let area = event.feature.getProperty("PLN_AREA_N");
          console.log("area selected: ",area);

          // this.townname = area;

          // Here begins the statistics API
          var data = {
            resource_id: 'f1765b54-a209-4718-8d38-a39237f502b3', // the resource id
            limit: 150000, // Set 150000 results
            q: area
          };

          $.ajax({
            url: 'https://data.gov.sg/api/action/datastore_search',
            data: data,
            success: function(data) {
              console.log(data.result.records)
              var overall_average = 0;
              var sqm = 0;
              var yearList = [];
              var yearDict = {};
              var room_list = [];
              var room_dict = {};

              for (var x = 0; x < data.result.records.length; x++)
              {
                var current_record = data.result.records[x];
                overall_average += Number(current_record.resale_price);
                sqm += Number(current_record.resale_price)/Number(current_record.floor_area_sqm);

                // Append resale prices by year
                if (!yearList.includes(current_record.month.slice(0,4))){
                    yearList.push(current_record.month.slice(0,4));
                    yearDict[current_record.month.slice(0,4)] = [Number(current_record.resale_price), 1];
                }
                else {
                    yearDict[current_record.month.slice(0,4)][0] += Number(current_record.resale_price);
                    yearDict[current_record.month.slice(0,4)][1] += 1;
                }

                // Append volume of transacted resale room type
                if (!room_list.includes(current_record.flat_type)){
                    room_list.push(current_record.flat_type);
                    room_dict[current_record.flat_type] = 1
                }
                else {
                    room_dict[current_record.flat_type] += 1;
                }
              }
              // Output statistics data summary
              var green_triangle_down = require("../../assets/green_triangle_down.png");
              var red_triangle_up = require("../../assets/red_triangle_up.png");
              var green_triangle_up = require("../../assets/green_triangle_up.png");
              var red_triangle_down = require("../../assets/red_triangle_down.png");
              var picture = "";

              overall_average = (overall_average/data.result.records.length).toFixed(0);
              sqm = (sqm/data.result.records.length).toFixed(0);
              document.getElementById("median_price").innerText = "$"+overall_average;
              document.getElementById("ppsqm").innerText = "$"+sqm;
              document.getElementById("price_comparison").innerHTML = computeYearOnYearAverageResalePrices();
              document.getElementById("placeholder1").innerHTML = "";
              document.getElementById("placeholder2").innerHTML = "";
              document.getElementById("placeholder3").innerHTML = "";

              if(picture == "decrease_resale_price"){
                document.getElementById(picture).src = green_triangle_down;
              }
              else if (picture == "increase_resale_price"){
                document.getElementById(picture).src = red_triangle_up;
              }
              else if (picture == "increase_resale_quantity"){
                document.getElementById(picture).src = green_triangle_up;
              }
              else if (picture == "decrease_resale_quantity"){
                document.getElementById(picture).src = red_triangle_down;
              }
              
              // Compute previous year + current year average resale prices in percentage
              function computeYearOnYearAverageResalePrices (){
              var current_year = new Date().getFullYear();
              var previous_year = current_year - 1;
              var image = "";
              
              var current_year_average_price = yearDict[current_year][0]/yearDict[current_year][1];
              var previous_year_average_price = yearDict[previous_year][0]/yearDict[previous_year][1];
              
              var percentage_difference = ((current_year_average_price - previous_year_average_price) / current_year_average_price) * 100
              
              // Calculate HDB Resale price averages for current year + previous year 

              if (percentage_difference < 0 )
              {
                  image = "<img id = 'decrease_resale_price' width = 25px>";
                  picture = "decrease_resale_price";
              }
              else
              {
                  image = "<img id = 'increase_resale_price' width = 25px>";
                  picture = "increase_resale_price";

              }

              return percentage_difference.toFixed(1) + "%" + image + "<br>";
              }

              // Charts 
              function resaleRoomTypeDistributionChart(){
                var ctx = document.getElementById('room_dist_pieChart').getContext('2d');
                var data = {
                labels: Object.keys(room_dict),
                datasets: [{
                    label: 'Resale Flat Type',
                    data: Object.values(room_dict),
                    backgroundColor: [
                    '#F47A1F',
                    '#9552EA',
                    '#F54F52',
                    '#7AC142',
                    '#ffb63a',
                    '#007CC3',
                    '#00529B',
                    ],
                    hoverBorderColor: ["#000000"],
                }]
                };

                var options = {
                plugins: {
                    labels: {
                    position: 'outside'
                    },
                    legend: {
                    position: 'right'
                    },
                    tooltips: {
                    enabled: true
                    },
                    datalabels: {
                    formatter: (value, ctx) => {
                    let sum = 0;
                    let dataArr = ctx.chart.data.datasets[0].data;
                    dataArr.map(data => {
                        sum += data;
                    });
                    let percentage = (value*100 / sum).toFixed(0)+"%";
                    return percentage;
                    },
                    color: '#00000',
                    align: 'center',
                    }
                }
                };

                var myChart = new Chart(
                ctx,
                {
                    type: 'doughnut',
                    data: data,
                    options: options,
                    plugins: [ChartDataLabels]
                }
                );
                console.log(myChart);
              }
              resaleRoomTypeDistributionChart();

            }
          })


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
