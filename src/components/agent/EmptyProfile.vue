<template>
  <div class="container-fluid py-3 px-5">
    <p class="pp-head text-start">My Profile</p>
    <div class="flex-row d-flex justify-content-center">
      <div class="border-0 text-center">
        <img
          class="p-3 mx-auto illustration"
          src="../../assets/GetVerified.svg"
          alt="Empty Dashboard"
        />
        <p class="pp-subhead my-3 mx-auto" id="ill-subhead">
          Get verified and have your property agent data automatically imported
        </p>
        <!-- <button class="btn btn-success mx-auto">Find Agents</button> -->
        <button
          type="button"
          class="mx-auto btn btn-primary rounded-pill btn-lg pp-button"
          v-on:click="test()"
        >
          Verify
        </button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
    name: 'EmptyAgentProfile',
    methods:{
        test(){
            console.log(this.$route)
        }
    }
}

</script>
