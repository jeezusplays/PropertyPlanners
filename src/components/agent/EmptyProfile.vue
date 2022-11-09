<template>
  <div class="container-fluid py-3 px-5">
    <p class="pp-head text-start">My Profile</p>
    <div class="flex-row d-flex justify-content-center">
      <div class="border-0 text-center">
        <img class="p-3 mx-auto illustration" src="../../assets/GetVerified.svg" alt="Empty Dashboard" />
        <p class="pp-subhead my-3 mx-auto" id="ill-subhead">
          Get verified and have your property agent data automatically imported
        </p>
        <!-- <button class="btn btn-success mx-auto">Find Agents</button> -->
        <button type="button" class="mx-auto btn btn-primary rounded-pill btn-lg pp-button" v-on:click="getAgentData()">
          Verify
        </button>
        <!-- <template id = "ehe">
          <AgentProfile></AgentProfile>
        </template> -->
      </div>
    </div>
  </div>
</template>

<script>
import { AgentData } from '../../scripts/agentdata'
// import AgentProfile from "@/components/agent/AgentProfile.vue"

export default {
  name: 'EmptyAgentProfile',
  data() {
    return {
      agent_registration_no: '',
      // profile_status: true,
    }
  },
  methods: {
    test() {
      console.log(this.$route)
    },
    async getAgentData() {
      // this.agent_registration_no = prompt('What is your registration no?', 'R045184G')
      var dataGetter = new AgentData(this.agent_registration_no)
      var sales = await dataGetter.getSales()
      console.log(sales)
      var profile = await dataGetter.getProfile()
      console.log(profile)
      // document.getElementById("ehe").innerHTML = 
      // "<AgentProfile :registrationNoPassed='this.agent_registration_no'></AgentProfile>" + 
      // "<AgentProfile :hasProfilePassed='this.profile_status'></AgentProfile>"
    }
  },
  // components: {
  //   AgentProfile
  // },
}

</script>
