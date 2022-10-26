<template>
  <EmptyDashboard v-if="!hasComponents"/>
</template>

<script>
import EmptyDashboard from "./EmptyDashboard.vue"

export default{
  name:"AgentDashboard",
  data(){
    return{
      hasComponents: false
    }
  },
  components:{
    EmptyDashboard
  }
}

</script>

