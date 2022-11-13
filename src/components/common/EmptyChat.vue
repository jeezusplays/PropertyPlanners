<template>
  <div class="container-fluid py-3 px-5">
    <p class="pp-head text-start">Chats</p>
    <div class="flex-row d-flex justify-content-center">
      <div class="border-0 text-center">
        <img class="p-3 mx-auto illustration" src="../../assets/Chat_Empty.svg" alt="Empty Dashboard" />
        <p class="pp-subhead my-3 mx-auto" v-if="!isAgent" id="ill-subhead">
          Search for agents and start a chat with one that suits you!
        </p>
        <p class="pp-subhead my-3 mx-auto" v-if="isAgent" id="ill-subhead">
          Purchase a plan and let property seekers search for you!
        </p>
        <!-- <button class="btn btn-success mx-auto">Find Agents</button> -->
        <button type="button" v-if='!isAgent' class="mx-auto btn btn-primary rounded-pill btn-lg pp-button"
          onclick="window.location='search'">
          Find Agents
        </button>
        <button type="button" v-if='isAgent' class="mx-auto btn btn-primary rounded-pill btn-lg pp-button"
          onclick="window.location='payment'">
          Purchase
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default{
  data(){
    return {
      isAgent: localStorage['type'] == 'agent' ? true:false

    }
  }
}
</script>
