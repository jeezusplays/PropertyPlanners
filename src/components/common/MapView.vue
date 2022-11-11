<template>
  <div class="scrollable">
    <p class="pp-head text-start mx-5 me-md-0 ms-md-5 mt-3 mb-0">Dashboard</p>
    <div class="row mx-0 px-0 mx-5 me-md-0 ms-md-5">
      <div class="col-12 col-md-7 col-lg-8 p-0 m-0">
        <div
          id="googleMap"
          style="height: 500px"
          class="conotainer-fluid rounded-3 border border-dark"
        ></div>
      </div>
      <div
        class="col-12 col-md-5 col-lg-4 mt-3 mt-md-0 p-0 px-0 px-md-3 m-0 max-h-100"
      >
        <div class="d-none d-md-block">
          <p class="pp-text opacity-75 mb-3 text-start">Available agents</p>
          <AgentCard v-for="index in 4" :key="index" />
        </div>
      </div>
    </div>
    <div class="d-flex me-5">
      <p class="pp-head text-start ms-5 mt-3 mb-0 pp-green">
        {{ townname }} Information
      </p>
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
            <p class="card-text" id="median_price"></p>
            <p id="placeholder1">
              <i>Click on a region (town) to display information!</i>
            </p>
          </div>
        </div>
        <!-- Stats 2 -->
        <div class="card m-2 py-3">
          <div class="card-body">
            <h5 class="card-title">Price per sqm</h5>
            <p class="card-text" id="ppsqm"></p>
            <p id="placeholder2">
              <i>Click on a region (town) to display information!</i>
            </p>
          </div>
        </div>
        <!-- Stats 3 -->
        <div class="card m-2 py-3">
          <div class="card-body">
            <h5 class="card-title">% in Price Difference</h5>
            <h6 class="card-subtitle mb-2 text-muted">
              (Compared to last year)
            </h6>
            <p class="card-text" id="price_comparison"></p>
            <p id="placeholder3">
              <i>Click on a region (town) to display information!</i>
            </p>
          </div>
        </div>
      </div>

      <div class="col-12 col-md-7 order-1 order-md-2">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button
              class="nav-link active"
              id="distribution-tab"
              data-bs-toggle="tab"
              data-bs-target="#distribution"
              type="button"
              role="tab"
              aria-controls="distribution"
              aria-selected="true"
            >
              Distribution of Flat Types Sold
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="price_barChart-tab"
              data-bs-toggle="tab"
              data-bs-target="#price_barChart"
              type="button"
              role="tab"
              aria-controls="price_barChart"
              aria-selected="false"
            >
              Mean Price by Flat Type
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="mean_price_year-tab"
              data-bs-toggle="tab"
              data-bs-target="#mean_price_year"
              type="button"
              role="tab"
              aria-controls="mean_price_year"
              aria-selected="false"
            >
              Historical Mean Price
            </button>
          </li>
        </ul>
        <div class="tab-content" id="myTabContent">
          <div
            class="tab-pane fade show active p-3"
            id="distribution"
            role="tabpanel"
            aria-labelledby="distribution-tab"
          >
            <canvas id="room_dist_pieChart" style="max-height: 300px"></canvas>
            <p id="placeholder4">
                <i>Click on a region (town) to display information!</i>
            </p>
          </div>
          <div
            class="tab-pane fade p-3"
            id="price_barChart"
            role="tabpanel"
            aria-labelledby="price_barChart-tab"
          >
            <canvas id="barChartFlatType" style="max-height: 300px"></canvas>
            <p id="placeholder5">
                <i>Click on a region (town) to display information!</i>
            </p>
          </div>
          <div
            class="tab-pane fade p-3"
            id="mean_price_year"
            role="tabpanel"
            aria-labelledby="mean_price_year-tab"
          >
          <canvas id="barChartPriceYear" style="max-height: 300px"></canvas>
          <p id="placeholder6">
              <i>Click on a region (town) to display information!</i>
          </p>
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
/* global Chart */

import { features } from "../../assets/labels.json";
import { AreaLabel } from "../../scripts/label";
import { Loader } from "@googlemaps/js-api-loader";
import towns from "../../scripts/towns.json";
import * as colours from "../../scripts/colours.json";
import AgentCard from "./AgentCard.vue";
import $ from "jquery";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

export default {
  name: "mapview",
  data() {
    return {
      townname: "",
      counter: 0,
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
    this.initMap();
  },
  methods: {
    async initMap() {
      this.loader.load().then((google) => {
        var townNames = new Set(towns);
        var labels = this.labels;
        var activeStyle = this.activeStyle;
        var inactiveStyle = this.inactiveStyle;
        var overrideStyle = this.overrideStyle;
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

        map.data.addListener("click", (event) => {
          // in the geojson feature that was clicked, get the "place" and "mag" attributes
          let area = event.feature.getProperty("PLN_AREA_N");
          console.log("Area selected: ", area);

          area = area.toLowerCase()
            .split(' ')
            .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
            .join(' ');

          this.townname = area;

          // Here begins the statistics API
          var data = {
            resource_id: "f1765b54-a209-4718-8d38-a39237f502b3", // the resource id
            limit: 150000, // Set 150000 results
            q: area,
          };

          $.ajax({
            url: "https://data.gov.sg/api/action/datastore_search",
            data: data,
            success: function (data) {},
          }).then((data) => {
            // console.log(data.result.records);
            var picture = "";
            var overall_average = 0;
            var sqm = 0;
            var yearList = [];
            var yearDict = {};
            var room_list = [];
            var room_dict = {};

            for (var x = 0; x < data.result.records.length; x++) {
              var current_record = data.result.records[x];
              overall_average += Number(current_record.resale_price);
              sqm +=
                Number(current_record.resale_price) /
                Number(current_record.floor_area_sqm);

              // Append resale prices by year
              if (!yearList.includes(current_record.month.slice(0, 4))) {
                yearList.push(current_record.month.slice(0, 4));
                yearDict[current_record.month.slice(0, 4)] = [
                  Number(current_record.resale_price),
                  1,
                ];
              } else {
                yearDict[current_record.month.slice(0, 4)][0] += Number(
                  current_record.resale_price
                );
                yearDict[current_record.month.slice(0, 4)][1] += 1;
              }

              // Append volume of transacted resale room type
              if (!room_list.includes(current_record.flat_type)) {
                room_list.push(current_record.flat_type);
                room_dict[current_record.flat_type] = [
                  1,
                  Number(current_record.resale_price),
                ];
              } else {
                room_dict[current_record.flat_type][0] += 1;
                room_dict[current_record.flat_type][1] +=
                  Number(current_record.resale_price);
              }
            }
            // Output statistics data summary
            overall_average = (
              overall_average / data.result.records.length
            ).toFixed(0);
            sqm = (sqm / data.result.records.length).toFixed(0);

            var current_year = new Date().getFullYear();
            var previous_year = current_year - 1;
            var image = "";
            var current_year_average_price =
              yearDict[current_year][0] / yearDict[current_year][1];
            var previous_year_average_price =
              yearDict[previous_year][0] / yearDict[previous_year][1];
            var percentage_difference =
              ((current_year_average_price - previous_year_average_price) /
                current_year_average_price) *
              100;
            // Calculate HDB Resale price averages for current year + previous year
            if (percentage_difference < 0) {
              image = "<img id = 'decrease_resale_price' width = 25px>";
              picture = "decrease_resale_price";
            } else {
              image = "<img id = 'increase_resale_price' width = 25px>";
              picture = "increase_resale_price";
            }
            var price_diff =
              percentage_difference.toFixed(1) + "%" + image + "<br>";

            document.getElementById("median_price").innerText =
              "$" + overall_average;
            document.getElementById("ppsqm").innerText = "$" + sqm;
            document.getElementById("price_comparison").innerHTML = price_diff;
            if (this.counter == 0){
              for (let x = 1; x < 7; x++){
              let name = "placeholder" + x;
              document.getElementById(name).remove();
            }
            }

            if (picture == "decrease_resale_price") {
              document.getElementById(
                picture
              ).src = require("../../assets/green_triangle_down.png");
            } else if (picture == "increase_resale_price") {
              document.getElementById(
                picture
              ).src = require("../../assets/red_triangle_up.png");
            } else if (picture == "increase_resale_quantity") {
              document.getElementById(
                picture
              ).src = require("../../assets/green_triangle_up.png");
            } else if (picture == "decrease_resale_quantity") {
              document.getElementById(
                picture
              ).src = require("../../assets/red_triangle_down.png");
            }

            this.resaleRoomTypeDistributionChart(room_dict);
            this.resaleYearChart(yearDict);
            this.resaleRoomTypePriceChart(room_dict);
            this.counter += 1;
            console.log(room_dict);
          });
        });
      });
    },

    resaleRoomTypeDistributionChart(room_dict) {
      var room_dict_sorted = {...room_dict};
      for (const key in room_dict) {
        room_dict_sorted[key] = Number(room_dict[key][0]);
      };
      console.log("test",room_dict_sorted);


      if (this.counter == 0){
      var ctx = document.getElementById("room_dist_pieChart").getContext("2d");
      var data = {
        labels: Object.keys(room_dict_sorted),
        datasets: [
          {
            label: "Flat Type",
            data: Object.values(room_dict_sorted),
            backgroundColor: [
              "#F47A1F",
              "#9552EA",
              "#F54F52",
              "#7AC142",
              "#ffb63a",
              "#007CC3",
              "#00529B",
            ],
            hoverBorderColor: ["#000000"],
          },
        ],
      };

      var options = {
        plugins: {
          labels: {
            position: "outside",
          },
          legend: {
            position: "right",
          },
          tooltips: {
            enabled: true,
          },
        },
      };

      
      var myRoomDistChart = new Chart(ctx, {
        type: "doughnut",
        data: data,
        options: options,
      });
      
      console.log(myRoomDistChart);
      }

      else {
        $('#room_dist_pieChart').remove();
        $('#distribution').append('<canvas id="room_dist_pieChart" style="max-height: 300px"></canvas>');

        var ctx = document.getElementById("room_dist_pieChart").getContext("2d");
        var data = {
          labels: Object.keys(room_dict_sorted),
          datasets: [
            {
              label: "Flat Type",
              data: Object.values(room_dict_sorted),
              backgroundColor: [
                "#F47A1F",
                "#9552EA",
                "#F54F52",
                "#7AC142",
                "#ffb63a",
                "#007CC3",
                "#00529B",
              ],
              hoverBorderColor: ["#000000"],
            },
          ],
        };

        var options = {
          plugins: {
            labels: {
              position: "outside",
            },
            legend: {
              position: "right",
            },
            tooltips: {
              enabled: true,
            },
          },
        };

        
        var myRoomDistChart = new Chart(ctx, {
          type: "doughnut",
          data: data,
          options: options,
        });
        
        console.log(myRoomDistChart);
      }    
    },

    resaleRoomTypePriceChart(room_dict){
      var year_dict_new = {...room_dict};
      for (const key in room_dict) {
          year_dict_new[key] = Number((room_dict[key][1]/room_dict[key][0]).toFixed(0));
      };

      if (this.counter == 0){
        var ctx2 = document.getElementById("barChartFlatType").getContext("2d");
        var data2 = {
            labels: Object.keys(year_dict_new),
            datasets: [{
                label: "Mean Price",
                data:  Object.values(year_dict_new),
                backgroundColor: ["#4D8C57", "#4D8C57", "#78A161", "#78A161", "#A3B56B", "#A3B56B", "#CDCA74", "#CDCA74", "#F8DE7E", "#F8DE7E"],
                hoverBorderColor: ["#000000"],
            }]
        };
        var options = {
            indexAxis: 'y',
            legend: {display: false},
            scales: {
            x: {
                grid: {
                display: false
                }
            },
            y: {
                grid: {
                display: false
                }
            }
            },
            plugins: {
            legend: {
                display: false,
            }
            }
        }
        var barChartFlat = new Chart(ctx2, {
            type: 'bar',
            data: data2,
            options: options,
        }); 
      }
      else {
        $('#barChartFlatType').remove();
        $('#price_barChart').append('<canvas id="barChartFlatType" style="max-height: 300px"></canvas>');
        var ctx2 = document.getElementById("barChartFlatType").getContext("2d");
        var data2 = {
            labels: Object.keys(year_dict_new),
            datasets: [{
                label: "Mean Price",
                data:  Object.values(year_dict_new),
                backgroundColor: ["#4D8C57", "#4D8C57", "#78A161", "#78A161", "#A3B56B", "#A3B56B", "#CDCA74", "#CDCA74", "#F8DE7E", "#F8DE7E"],
                hoverBorderColor: ["#000000"],
            }]
        };
        var options = {
            indexAxis: 'y',
            legend: {display: false},
            scales: {
            x: {
                grid: {
                display: false
                }
            },
            y: {
                grid: {
                display: false
                }
            }
            },
            plugins: {
            legend: {
                display: false,
            }
            }
        }
        var barChartFlat = new Chart(ctx2, {
            type: 'bar',
            data: data2,
            options: options,
        }); 
      }
      console.log (barChartFlat);
    },

    resaleYearChart(yearDict){
      var year_dict_new = {}
      for (const key in yearDict) {
          year_dict_new[key] = Number((yearDict[key][0]/yearDict[key][1]).toFixed(0));
      };

      if (this.counter == 0){
        var ctx3 = document.getElementById("barChartPriceYear").getContext("2d");
        var data3 = {
            labels: Object.keys(year_dict_new),
            datasets: [{
                label: "Mean price",
                data:  Object.values(year_dict_new),
                backgroundColor: ["#4D8C57", "#4D8C57", "#78A161", "#78A161", "#A3B56B", "#A3B56B", "#CDCA74", "#CDCA74", "#F8DE7E", "#F8DE7E"],
                hoverBorderColor: ["#000000"],
            }]
        };
        var options = {
            legend: {display: false},
            scales: {
            x: {
                grid: {
                display: false
                }
            },
            y: {
                grid: {
                display: false
                }
            }
            },
            plugins: {
            legend: {
                display: false,
            }
            }
        }
        var barChart = new Chart(ctx3, {
            type: 'bar',
            data: data3,
            options: options,
        }); 
      }
      else {
        $('#barChartPriceYear').remove();
        $('#mean_price_year').append('<canvas id="barChartPriceYear" style="max-height: 300px"></canvas>');
        var ctx3 = document.getElementById("barChartPriceYear").getContext("2d");
        var data3 = {
            labels: Object.keys(year_dict_new),
            datasets: [{
                label: "Mean Price",
                data:  Object.values(year_dict_new),
                backgroundColor: ["#4D8C57", "#4D8C57", "#78A161", "#78A161", "#A3B56B", "#A3B56B", "#CDCA74", "#CDCA74", "#F8DE7E", "#F8DE7E"],
                hoverBorderColor: ["#000000"],
            }]
        };
        var options = {
            legend: {display: false},
            scales: {
            x: {
                grid: {
                display: false
                }
            },
            y: {
                grid: {
                display: false
                }
            }
            },
            plugins: {
            legend: {
                display: false,
            }
            }
        }
        var barChart = new Chart(ctx3, {
            type: 'bar',
            data: data3,
            options: options,
        }); 
      }
      console.log (barChart);
    }

  },
  components: {
    AgentCard,
  },
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
