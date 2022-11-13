<template>
  <EmptyDashboard v-if="!hasComponents" />
  <div class="album py-5" v-else>
    <div class="container">
      <div class="text-start mb-3">
        <h2>Welcome {{ name }}!</h2>
        <small><i>Your current profile summary:</i></small>
      </div>

      <div class="row g-3 justify-content-around" > 
        <!--  row-cols-1 row-cols-lg-3 row-cols-xl-5  -->

        <div class="col-12 col-lg-4" v-if="type == 'agent'">
          <div class="card mb-3 my-auto"  style="max-height: 130px">
            <div class="row g-0 my-2">
              <div class="col-4">
                <img class="img-fluid my-3 " src="../../assets/profile_placeholder.png" alt="Profile Picture" />
              </div>
              <div class="col-8">
                <div class="card-body">
                  <h5 class="card-title">Profile Views</h5>
                  <p class="card-text py-3">
                    {{ clicked }} views
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-12 col-lg-4" v-if="type == 'agent'">
          <div class="card mb-3"  style="max-height: 130px">
            <div class="row g-0 my-2">
              <div class="col-4">
                <img class="img-fluid my-4" src="../../assets/price_tag.png" alt="Plan" />
              </div>
              <div class="col-8">
                <div class="card-body">
                  <h5 class="card-title">Plan Subscription</h5>
                  <p class="card-text py-2">
                    {{ planDaysLeft }} days left

                    <template v-if="planDaysLeft <= 10">
                      <br>
                      Purchase Plan <RouterLink :to="'payment'"><u>here</u></RouterLink>
                    </template>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-12 col-lg-4" v-if="type == 'agent'">
          <div class="card mb-3" style="max-height: 130px">
            <div class="row g-0 my-2">
              <div class="col-4">
                <img class="img-fluid my-4" src="../../assets/chat.png" alt="Chat" />
              </div>
              <div class="col-8">
                <div class="card-body">
                  <h5 class="card-title">Chats</h5>
                  <p class="card-text py-2">
                    {{ chat }} ongoing chats

                    <template v-if="chat <= 0">
                      <br>
                      Start Chat <RouterLink :to="'chat'"><u>here</u></RouterLink>
                    </template>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EmptyDashboard from "../common/EmptyDashboard.vue"

export default {
  name: "AgentDashboard",
  data() {
    return {
      name: "",
      type: localStorage.type,
      clicked: 0,
      planDaysLeft: 30,
      chat: 0,
      hasComponents: localStorage.hasComponents
    }
  },
  mounted() {
    // Query for visits/clicks
    if (localStorage.planDaysLeft === undefined) {
      this.planDaysLeft = 0
    }
    else {
      this.planDaysLeft = localStorage.planDaysLeft
    }
    if (localStorage.clicked === undefined) {
      this.clicked = 0
    }
    else {
      this.clicked = localStorage.clicked
    }
    if (localStorage.chats === undefined) {
      this.chat = 0
    }
    else {
      this.clicked = localStorage.clicked
    }

    this.name = localStorage.aboutme

  },
  components: {
    EmptyDashboard
  }
}

</script>
<style>
.card:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 20px rgba(0, 0, 0, .12), 0 4px 8px rgba(0, 0, 0, .06);
}
</style>

