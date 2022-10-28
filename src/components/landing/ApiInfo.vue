<template>
  <div id="api-info" class="container-fluid py-5 p-md-5">
    <div class="row mx-5">
      <h1 class="t1">Features</h1>
      <div v-for="api in APIs" :key="api.id" class="col-12 col-md-6 col-lg-3 p-3">
        <div class="card shadow grow p-3 border-0 rounded-4">
          <div class="card-body">
            <font-awesome-icon :icon="api.Api_icon" class="pp-icon" size="2x" />
            <h5 class="card-title my-3 fs-3">{{ api.Api_name }}</h5>
            <p class="card-text">
              {{ api.Api_desc }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "API_info",
  data() {
    return {
      APIs: [
        {
          Api_name: "Analytics",
          Api_desc: "Description",
          Api_icon: "fa-solid fa-chart-pie",
        },
        {
          Api_name: "Map View",
          Api_desc: "Description",
          Api_icon: "fa-solid fa-map",
        },
        {
          Api_name: "name1",
          Api_desc: "Description",
          Api_icon: "fa-solid fa-user",
        },
        {
          Api_name: "name1",
          Api_desc: "Description",
          Api_icon: "fa-solid fa-user",
        },
      ],
    };
  },
  //   mounted() {
  //     this.APIs = data.APIs;
  //   },
};
</script>

<style>
.pp-icon {
  color: var(--main-dark-green);
}
</style>
