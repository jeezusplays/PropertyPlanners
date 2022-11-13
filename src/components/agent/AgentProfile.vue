<script setup>
import { RouterLink } from "vue-router";
</script>
<template>
  <EmptyProfile v-if="!hasProfile" />
  <div class="container-fluid px-5 py-3" v-else>
    <div class="row pt-3">
      <h1 class="text-start">My Profile</h1>
    </div>
    <hr />
    <div class="row p-3">
      <div class="col-12 col-lg-2 d-flex pb-4 px-0 pe-md-3 justify-content-start">
        <div class = "d-inline-block position-relative">
          <img
          :src="profile.profilepic"
          class="border border-dark img-fluid pp-pp"
          id = "profile_picture"
          alt = "Add your profile picture here!"
        />
          <div class = "position-absolute" style = "top: 0px; right: 0px">
            <span class="position-absolute badge badge-dark" id="OpenImgUpload" style = "color:black; top: 0px; right: 0px;">
              <label for ='imgupload'>
                <input type = "file" id = "imgupload" style="display:none;" accept = "image/x-png,image/jpg,image/jpeg"/>
                <font-awesome-icon class="m-auto" icon="fa fa-pen" size="xl"/>
              </label>
            </span>
          </div>
        </div>

      </div>
      <div class="col-12 col-lg-7 justify-content-start">
        <div class="row">
          <div class="container p-0 me-auto text-start">
            <p class="pp-head">{{name}}</p>
            <p>Registration No: <b>{{registrationNo}}</b></p>
            <p>Registration Validity: <b>{{registrationStartDate}} ~ {{registrationEndDate}}</b></p>
            <p>Company Name: <b>{{estateAgentName}}</b></p>
            <p>Licence No: <b>{{licenceNo}}</b></p>
          </div>
        </div>

      </div>
      <div class="d-flex flex-row p-0 col-12 col-lg-3 justify-content-end">
        <button
        class="px-3 btn me-auto me-lg-0 ms-lg-auto pp-button rounded-pill"
      
        v-if="!isAgent">
          <RouterLink :to="'chat'">Chat now</RouterLink>
        </button>
      </div>
    </div>
    
    <hr class="d-lg-none">

    <div class="row py-3">
      <h2 class="d-flex justify-content-start">Records</h2>
    </div>

    <section>
      <div class="row">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button
              class="nav-link active"
              id="home-tab"
              data-bs-toggle="tab"
              data-bs-target="#home-tab-pane"
              type="button"
              role="tab"
              aria-controls="home-tab-pane"
              aria-selected="true"
            >
              HDB Resale Records
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="profile-tab"
              data-bs-toggle="tab"
              data-bs-target="#profile-tab-pane"
              type="button"
              role="tab"
              aria-controls="profile-tab-pane"
              aria-selected="false"
            >
              HDB Rental Records
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="contact-tab"
              data-bs-toggle="tab"
              data-bs-target="#contact-tab-pane"
              type="button"
              role="tab"
              aria-controls="contact-tab-pane"
              aria-selected="false"
            >
              Private Rental Records
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="disabled-tab"
              data-bs-toggle="tab"
              data-bs-target="#disabled-tab-pane"
              type="button"
              role="tab"
              aria-controls="disabled-tab-pane"
              aria-selected="false"
            >
              Private Sales Records
            </button>
          </li>
        </ul>

        <div class="tab-content" id="myTabContent">
          <div
            class="tab-pane fade show active"
            id="home-tab-pane"
            role="tabpanel"
            aria-labelledby="home-tab"
            tabindex="0"
          >
            <br />
            <div class="table-responsive">
              <table
                id="example"
                class="table table-borderless table-hover table-striped"
                style="width: 100%"
              >
                <thead>
                  <tr>
                    <th>Month/Year</th>
                    <th>Town</th>
                    <th>Client</th>
                  </tr>
                </thead>
                <tbody style="text-align: left">
                  <template v-for="sale in sales" :key = sale._id>   
                    <tr v-if="sale.town != '-' && sale.transaction_type == 'RESALE' && sale.property_type == 'HDB'">
                      <td> {{ sale.transaction_date }} </td>
                      <td> {{ sale.town }} </td>
                      <td> {{ sale.represented }} </td>
                    </tr> 
                  </template> 
                </tbody>
              </table>
            </div>
          </div>

          <div
            class="tab-pane fade"
            id="profile-tab-pane"
            role="tabpanel"
            aria-labelledby="profile-tab"
            tabindex="0"
          >
            <br />
            <div class="table-responsive">
              <table
                id="example2"
                class="table table-borderless table-hover table-striped"
                style="width: 100%"
              >
                <thead>
                  <tr>
                    <th>Month/Year</th>
                    <th>Town</th>
                    <th>Client</th>
                    <th>Rental Type</th>
                  </tr>
                </thead>
                <tbody style="text-align: left">
                  <template v-for="sale in sales" :key = sale._id>   
                    <tr v-if="sale.town != '-' && sale.transaction_type == 'WHOLE RENTAL' && sale.property_type == 'HDB'">
                      <td> {{ sale.transaction_date }} </td>
                      <td> {{ sale.town }} </td>
                      <td> {{ sale.represented }} </td>
                      <td> {{ sale.transaction_type }} </td>
                    </tr> 
                  </template> 
                </tbody>
              </table>
            </div>
          </div>

          <div
            class="tab-pane fade"
            id="contact-tab-pane"
            role="tabpanel"
            aria-labelledby="contact-tab"
            tabindex="0"
          >
            <br />
            <div class="table-responsive">
              <table
                id="example3"
                class="table table-borderless table-hover table-striped"
                style="width: 100%"
              >
                <thead>
                  <tr>
                    <th>Month/Year</th>
                    <th>District</th>
                    <th>General Location</th>
                    <th>Client</th>
                    <th>Property</th>
                    <th>Rental Type</th>
                  </tr>
                </thead>
                <tbody style="text-align: left">
                  <template v-for="sale in sales" :key = sale._id>   
                    <tr v-if="sale.town == '-' && sale.transaction_type == 'WHOLE RENTAL' && sale.property_type != 'HDB'">
                      <td> {{ sale.transaction_date }} </td>
                      <td> {{ sale.district }} </td>
                      <td> {{ sale.general_location }} </td>
                      <td> {{ sale.represented }} </td>
                      <td> {{ sale.property_type }} </td>
                      <td> {{ sale.transaction_type }} </td>
                    </tr> 
                  </template> 
                </tbody>
              </table>
            </div>
          </div>

          <div
            class="tab-pane fade"
            id="disabled-tab-pane"
            role="tabpanel"
            aria-labelledby="disabled-tab"
            tabindex="0"
          >
            <br />
            <div class="table-responsive">
              <table
                id="example4"
                class="table table-borderless table-hover table-striped"
                style="width: 100%"
              >
                <thead>
                  <tr>
                    <th>Month/Year</th>
                    <th>District</th>
                    <th>General Location</th>
                    <th>Client</th>
                    <th>Property</th>
                    <th>Sale Type</th>
                  </tr>
                </thead>

                <tbody style="text-align: left">
                  <template v-for="sale in sales" :key = sale._id>   
                    <tr v-if="sale.town == '-' && sale.transaction_type != 'WHOLE RENTAL' && sale.property_type != 'HDB'">
                      <td> {{ sale.transaction_date }} </td>
                      <td> {{ sale.district }} </td>
                      <td> {{ sale.general_location }} </td>
                      <td> {{ sale.represented }} </td>
                      <td> {{ sale.property_type }} </td>
                      <td> {{ sale.transaction_type }} </td>
                    </tr> 
                  </template> 
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="row pt-3">
      <h4 class="text-start"><b>Notes:</b></h4>
    </div>
    <div class="row">
      <ol class="text-start px-5">
        <li>
          The Public Register shows records of HDB flat resale transactions
          closed by the above salesperson. Only records of transactions
          completed within the last 24 months (from date of access) are shown.
        </li>
        <li>
          Records older than 24 months (from date of access) are available at
          data.gov.sg. Records are available only for the period starting from 1
          January 2017.
        </li>
        <li>Records are updated on the 15th of every month.</li>
        <li>
          Records are provided by HDB pursuant to Section 65 of the Estate
          Agents Act (Cap. 95A).
        </li>
      </ol>
    </div>
  </div>

</template>

<script>
import EmptyProfile from "./EmptyProfile.vue";
import { AgentData } from '../../scripts/agentdata';
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";
import { uploadProfilePic } from "../../scripts/fbstorage";
import { doc, getDoc } from "firebase/firestore";
import { spinnerOn,spinnerOff } from "../../scripts/spinner";
import { fsdb } from "@/scripts/fb";

export default {
  name: "AgentDashboard",
  data() {
    return {
      isAgent: localStorage.isAgent,
      hasProfile: localStorage.agentStatus,
      name: '',
      registrationNo: localStorage.registrationNo, 
      registrationStartDate: '',
      registrationEndDate: '',
      estateAgentName: '',
      licenceNo: '',
      sales: {},
      profile: {
        profilepic: localStorage['profilepic'] ? localStorage['profilepic'] : require('../../assets/luffy_face.png')
      },
    };
  },

  methods: {
    resetAgentData() {
      this.registrationNo = ''
      this.hasProfile = false
    },
    async getAgentData() {

      spinnerOn()
      var dataGetter = new AgentData(this.registrationNo)
      var sales = await dataGetter.getSales()
      var profile = await dataGetter.getProfile()

      this.sales = sales
      this.profile = profile
      this.profile['profilepic'] = localStorage['profilepic'] ? localStorage['profilepic'] : require('../../assets/luffy_face.png')

      this.registrationEndDate = this.profile.registration_end_date
      this.registrationStartDate = this.profile.registration_start_date
      this.estateAgentName = this.profile.estate_agent_name
      this.licenceNo = this.profile.estate_agent_license_no

      $(document).ready(function () {
          $('#example').DataTable();
      });
      $(document).ready(function () {
          $('#example2').DataTable();
      });
      $(document).ready(function () {
          $('#example3').DataTable();
      });
      $(document).ready(function () {
          $('#example4').DataTable();
      });
      spinnerOff()
    },
    async getUserData(){
      spinnerOn()
      const docRef = doc(fsdb, "users", localStorage['uid']);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        var data = docSnap.data()
        var profilepic = data.profilepic
        var regnum = data.registration_no?data.registration_no:''

        if (regnum) this.hasProfile = true, this.isAgent = true

        localStorage['profilepic'] = profilepic
        this.profile['profilepic'] = localStorage['profilepic'] ? localStorage['profilepic'] : require('../../assets/luffy_face.png')
        this.registrationNo = regnum
        spinnerOff()
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }

      return docSnap
    }
  },

  components: {
    EmptyProfile, //Idk if this is needed
  },

  async mounted(){

    await this.getUserData()
    this.getAgentData(this)
    var that = this;
    $("#imgupload").change(async function () {
      console.log(this);
      spinnerOn();
      await uploadProfilePic(
        $(this).prop("files")[0],
        localStorage["uid"],
        that
      );
    });
  }
};


</script>
