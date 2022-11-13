<template>
  <div class="container-fluid py-3 px-5">
    <p class="pp-head text-start me-auto">My Profile</p>
    <div class="row">
      <div class="col-12 col-md-5 col-lg-4 py-3 py-md-0 mb-3">
        <div class="profile-side rounded-4 p-4">
          <div class="profile-head">
            <div class="position-relative">
              <img
                class="profile-pic rounded-3 mb-3"
                :src="profile.profilepic"
              />
              <div class="position-absolute" style="top: 0px; right: 0px">
                <span
                  class="position-absolute badge badge-dark"
                  id="OpenImgUpload"
                  style="color: black; top: 0px; right: 0px"
                >
                  <label for="imgupload">
                    <input
                      type="file"
                      id="imgupload"
                      style="display: none"
                      accept=".png, .jpg, .jpeg"
                    />
                    <font-awesome-icon
                      class="m-auto"
                      icon="fa fa-pen"
                      size="xl"
                    />
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
              <br />
              <text class="opacity-75" v-if="!isEditingProfile">{{
                profile.aboutme
              }}</text>
              <textarea
                class="form-control"
                rows="10"
                v-if="isEditingProfile"
                v-model="profile.aboutme"
              ></textarea>
            </p>
          </div>
        </div>
        <p
          class="text-end mt-2 me-2 pointer"
          v-if="!isEditingProfile"
          @click="isEditingProfile = true"
        >
          Edit profile
        </p>
        <p
          class="text-end mt-2 me-2 pointer"
          v-if="isEditingProfile"
          @click="
            updateProfile();
            isEditingProfile = false;
          "
        >
          Save profile
        </p>
      </div>
      <div class="col-12 col-md-7 col-lg-8 py-3 py-md-0 mb-3">
        <div class="profile-side rounded-4 py-4 px-5">
          <p class="pp-head">Property Preferences</p>
          <template v-if="!isEditingPreference">
            <div
              v-for="preference in preferences"
              :key="preference.id"
              class="row pref-row text-start rounded-3 p-3 mt-3"
            >
              <span class="pp-subhead text-light">{{ preference.name }}</span>
              <span class="pp-text text-light opacity-75">{{
                preference.value
              }}</span>
            </div>
          </template>
          <template v-if="isEditingPreference">
            <div
              v-for="preference in preferences"
              :key="preference.id"
              class="row pref-row text-start rounded-3 p-3 mt-3"
            >
              <span class="pp-subhead text-light">{{ preference.name }}</span>
              <input
                type="text"
                class="form-control"
                v-model="preference.value"
              />
            </div>
          </template>
        </div>
        <p
          class="text-end mt-2 me-2 pointer"
          v-if="!isEditingPreference"
          @click="isEditingPreference = true"
        >
          Edit preferences
        </p>
        <p
          class="text-end mt-2 me-2 pointer"
          v-if="isEditingPreference"
          @click="
            updateProfile();
            isEditingPreference = false;
          "
        >
          Save preferences
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import { uploadProfilePic } from "../../scripts/fbstorage";
import { spinnerOn,spinnerOff } from "../../scripts/spinner";
import { doc, updateDoc, getDoc } from "firebase/firestore";
import { fsdb } from "@/scripts/fb";

export default {
  name: "Chat",
  data() {
    return {
      preferences: localStorage["preferences"]
        ? JSON.parse(localStorage["preferences"])
        : [
            {
              name: "Region",
              value: "",
            },
            {
              name: "Property Type",
              value: "",
            },
            {
              name: "Budget",
              value: "",
            },
            {
              name: "Non-Negotiables",
              value: "",
            },
            {
              name: "Good to haves",
              value: "",
            },
          ],
      profile: {
        profilepic: localStorage["profilepic"]
          ? localStorage["profilepic"]
          : require("../../assets/ace.jpg"),
        name: localStorage["name"] ? localStorage["name"] : "John Doe",
        email: localStorage["email"]
          ? localStorage["email"]
          : "Johndoe@gmail.com",
        aboutme: localStorage["aboutme"]
          ? localStorage["aboutme"]
          : "Write a short introduction so agents can understand you better!",
      },
      isEditingPreference: false,
      isEditingProfile: false,
    };
  },
  methods: {
    reload() {
      this.$router.go();
    },
    async updateProfile() {
      const userRef = doc(fsdb, "users", localStorage["uid"]);

      await updateDoc(userRef, {
        aboutme: this.profile.aboutme,
        preferences: this.preferences,
      });

      localStorage["aboutme"] = this.profile.aboutme;
      localStorage["preferences"] = JSON.stringify(this.preferences);
    },
    async getProfile() {
      spinnerOn()
      const docRef = doc(fsdb, "users", localStorage['uid']);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        var data = docSnap.data()
        var preferences = data.preferences
        var aboutme = data.aboutme
        var name = data.name
        var email = data.email
        var profilepic = data.profilepic

        this.preferences = preferences ? preferences :this.preferences
        localStorage["preferences"] = preferences ? JSON.stringify(preferences) : localStorage['preferences']
        this.profile.aboutme = aboutme ? aboutme :this.profile.aboutme
        this.profile.name = name ? name :this.profile.name
        this.profile.email = email ? email :this.profile.email
        this.profile.profilepic = profilepic ? profilepic :this.profile.profilepic
        console.log(localStorage["preferences"]);
        spinnerOff()
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    },
  },
  mounted() {
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
    this.getProfile()
  },
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
