<template>
    <EmptyProfile v-if="!hasProfile"/>
  </template>
  
  <script>
  import EmptyProfile from "./EmptyProfile.vue"
  
  export default{
    name:"AgentDashboard",
    data(){
      return{
        hasProfile: false
      }
    },
    components:{
        EmptyProfile
    }
  }
  
  </script>
  
  