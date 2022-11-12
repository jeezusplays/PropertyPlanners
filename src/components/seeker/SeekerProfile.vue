

<template>
  <div class="container-fluid py-3 px-5">
    <p class="pp-head text-start me-auto">My Profile</p>
    <div class="row">
      <div class="col-12 col-md-5 col-lg-4 py-3 py-md-0 mb-3">
        <div class="profile-side rounded-4 p-4">
          <div class="profile-head">
            <div class="position-relative">
              <img class="profile-pic rounded-3 mb-3" src="../../assets/HDB_banner.jpg" />
              <div class="position-absolute" style="top: 0px; right: 0px"
                >
                <span class="position-absolute badge badge-dark" id="OpenImgUpload"
                  style="color:black; top: 0px; right: 0px;" @click="upload();">
                  <label for='imgupload'>
                    <input type="file" id="imgupload" style="display:none;" accept=".png, .jpg, .jpeg" />
                    <font-awesome-icon class="m-auto" icon="fa fa-pen" size="xl"
                    @click="upload()" />
                  </label>
                </span>
              </div>
            </div>

            <p class="pp-subhead text-center m-0">{{ profile.name }}</p>
            <p class="pp-text text-center text-break">{{ profile.email }}</p>
          </div>

          <div class="profile-body mt-5">
            <p class="pp-text text-start">
              <b>About me:</b>
              <br>
              <text class="opacity-75">{{ profile.aboutme }}</text>
            </p>
          </div>
        </div>
        <p class="text-end mt-2 me-2 pointer">Edit profile</p>
      </div>
      <div class="col-12 col-md-7 col-lg-8 py-3 py-md-0 mb-3">
        <div class="profile-side rounded-4 py-4 px-5">
          <p class="pp-head">Property Preferences</p>
          <template v-if="!isEditing">
            <div v-for="preference in preferences" :key="preference.id"
              class="row pref-row text-start rounded-3 p-3 mt-3">
              <span class="pp-subhead text-light">{{ preference.name }}</span>
              <span class="pp-text text-light opacity-75">{{ preference.value }}</span>
            </div>
          </template>
          <template v-if="isEditing">
            <div v-for="preference in preferences" :key="preference.id"
              class="row pref-row text-start rounded-3 p-3 mt-3">
              <span class="pp-subhead text-light">{{ preference.name }}</span>
              <input type="text" class="form-control" v-model="preference.value">
            </div>
          </template>
        </div>
        <p class="text-end mt-2 me-2 pointer" v-if="!isEditing" @click="isEditing=true">Edit preferences</p>
        <p class="text-end mt-2 me-2 pointer" v-if="isEditing" @click="isEditing=false">Save preferences</p>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import {uploadProfilePic} from "../../scripts/fbstorage"

export default {
  name: "Chat",
  data() {
    return {
      preferences: [
        {
          name: "Region",
          value: "Toa Payoh",
        },
        {
          name: "Property Type",
          value: "4 room HDB",
        },
        {
          name: "Budget",
          value: "$550,000 to $700,000",
        },
        {
          name: "Non-Negotiables",
          value: "1 Guest Toilet, North South Facing",
        },
        {
          name: "Good to haves",
          value: "Single loading unit",
        },
      ],
      profile: {
        name: "John Doe",
        email: "Johndoe@gmail.com",
        aboutme: "Write a short introduction so agents can understand you better!"
      },
      isEditing: false
    };
  },
  mounted(){
    $("#imgupload").change(function(){
      uploadProfilePic($(this).prop('files')[0],localStorage['uid'])
    })
  },
  methods:{
    upload(){
      $('#imgupload').trigger('click');
    }
  }
};
</script>

<style>
.profile-side {
  min-height: 70vh;
  height: 100%;
  background-color: rgba(var(--main-grey-rgb), 0.2);
}

.pref-row {
  background-color: rgba(var(--main-green-rgb), 1);
}

.profile-pic {
  width: 100%;
  max-height: 400px;
  object-fit: cover;
}
</style>
