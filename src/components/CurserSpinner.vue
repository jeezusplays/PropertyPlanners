<template>
  <div class="position-absolute ms-3 d-none mt-3" role="status" id="spinner">
    <span class="spinner-grow spinner-grow-sm text-success "></span>
  </div>
</template>

<script>

export default {
  name: "cursorspinner",
  data(){
    return {
      spinner:null
    }
  },
  methods: {
    onMouseMove(e) {
      this.spinner.style.left = e.pageX + "px";
      this.spinner.style.top = e.pageY + "px";
    },
  },
  mounted() {
    this.spinner = document.getElementById("spinner");
    document.addEventListener("mousemove", this.onMouseMove);
  },
};
</script>
<style>
#spinner{
  z-index: 1056;
}
</style>