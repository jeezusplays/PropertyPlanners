<template>
  <div class="container-fluid py-3 px-5">
    <div class="row">
      <div class="col-12 col-md-5 col-lg-4 py-3 py-md-0 mb-3">
        <div class="profile-side rounded-4 p-4">
          <div class="profile-head">
            <div class="position-relative">
              <img
                class="profile-pic rounded-3 mb-3"
                :src="seeker.profilepic"
              />
            </div>

            <p class="pp-subhead text-center m-0">{{ seeker.name }}</p>
            <p class="pp-text text-center text-break">{{ seeker.email }}</p>
          </div>

          <div class="profile-body mt-5">
            <p class="pp-text text-start">
              <b>About me:</b>
              <br />
              <text class="opacity-75">{{
                seeker.aboutme
              }}</text>
            </p>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-7 col-lg-8 py-3 py-md-0 mb-3">
        <div class="profile-side rounded-4 py-4 px-5">
          <p class="pp-head">Property Preferences</p>
          <div
            v-for="preference in seeker.preferences"
            :key="preference.id"
            class="row pref-row text-start rounded-3 p-3 mt-3"
          >
            <span class="pp-subhead text-light">{{ preference.name }}</span>
            <span class="pp-text text-light opacity-75">{{
              preference.value
            }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { spinnerOn, spinnerOff } from "../../scripts/spinner";
import { doc, getDoc } from "firebase/firestore";
import { fsdb } from "@/scripts/fb";

export default {
  name: "Chat",
  props: ["seerkeruid"],
  data() {
    return {
      seeker: {},
    };
  },
  methods: {
    reload() {
      this.$router.go();
    },
    async getProfile() {
      spinnerOn();
      const docRef = doc(fsdb, "users", this.seerkeruid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        var data = docSnap.data();
        this.seeker = data

        console.log(this.seeker);

        spinnerOff();
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    },
  },
  mounted() {
    this.getProfile();
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
