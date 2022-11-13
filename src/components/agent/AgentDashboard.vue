<template>
  <EmptyDashboard v-if="!hasComponents"/>
  <div class="album py-5" v-else>
    <div class="container">
      <div class = "text-start mb-3">
        <h2>Welcome {{ name }}!</h2>
        <small><i>Your current profile summary:</i></small>
      </div>

      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-3">
        <div class = "col">
          <div class = "card shadow-sm bg-light">
            <h5 class="card-header">Profile views</h5>
            <img
            class="card-img-top p-5"
            src="../../assets/profile_placeholder.png"
            alt="Profile Picture"
            />
            <h3 class = "card-text py-3"> {{ clicked }} views </h3>
          </div>
        </div>
        <div class = "col">
          <div class = "card shadow-sm bg-light">
            <h5 class="card-header">Plan Subscription</h5>
            <img
            class="card-img-top p-5"
            src="../../assets/price_tag.png"
            alt="Plan"
            />
            <h3 class = "card-text py-3"> {{ planDaysLeft }} days left </h3>
          </div>
        </div>

        <div class = "col">
          <div class = "card shadow-sm bg-light">
            <h5 class="card-header">Chats</h5>
            <img
            class="card-img-top p-5"
            src="../../assets/chat.png"
            alt="Chat"
            />
            <h3 class = "card-text py-3"> {{ chat }} ongoing chats</h3>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import EmptyDashboard from "../common/EmptyDashboard.vue"

export default{
  name:"AgentDashboard",
  data(){
    return{
      name: "",
      clicked: 0,
      planDaysLeft: 30,
      chat: 0,
      hasComponents: localStorage.hasComponents
    }
  },
  mounted(){
    // Query for visits/clicks
    if(localStorage.planDaysLeft===undefined){
      this.planDaysLeft = 0
    }
    else{
      this.planDaysLeft = localStorage.planDaysLeft
    }
    if(localStorage.clicked===undefined){
      this.clicked = 0
    }
    else{
      this.clicked = localStorage.clicked
    }
    if(localStorage.chats===undefined){
      this.chat = 0
    }
    else{
      this.clicked = localStorage.clicked
    }
    
    this.name = localStorage.aboutme

  },
  components:{
    EmptyDashboard
  }
}

</script>
<style>

.card:hover{
  transform: scale(1.05);
  box-shadow: 0 10px 20px rgba(0,0,0,.12), 0 4px 8px rgba(0,0,0,.06);
}
</style>

