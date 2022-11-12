<template>
  <div class="container-fluid py-3 px-5">
    <p class="pp-head text-start">Chats</p>
    <div class="flex-row d-flex justify-content-center">
      <div class="border-0 text-center">
        <img class="p-3 mx-auto illustration" src="../../assets/Chat_Empty.svg" alt="Empty Dashboard" />
        <p class="pp-subhead my-3 mx-auto" id="ill-subhead">
          Search for agents and start a chat with one that suits you!
        </p>
        <!-- <button class="btn btn-success mx-auto">Find Agents</button> -->
        <button type="button" class="mx-auto btn btn-primary rounded-pill btn-lg pp-button" onclick="window.location='search'">
          Find Agents
        </button>
      </div>
    </div>
  </div>
</template>
