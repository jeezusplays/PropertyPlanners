<template lang="">
    <!-- Template Start -->
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
    <!-- Template End -->
</template>

<script>
export default {
    name: 'FavouriteTownStatistics'
}
</script>