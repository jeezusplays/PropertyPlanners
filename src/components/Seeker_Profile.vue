<template>
  <div class="container-fluid py-3 px-5">
    <p class="pp-head text-start me-auto">My Profile</p>
    <div class="row">
      <div class="col-12 col-md-5 col-lg-4 py-3 py-md-0 mb-3">
        <div class="profile-side rounded-4 p-4">
          <div class="profile-head">
            <img
              class="profile-pic rounded-4 mb-3"
              src="../assets/HDB_banner.jpg"
            />
            <p class="pp-subhead text-center m-0">{{profile.name}}</p>
            <p class="pp-text text-center text-break">{{profile.email}}</p>
          </div>

          <div class="profile-body mt-5">
            <p class="pp-text text-start">
              <b>About me:</b>
              {{profile.aboutme}}
            </p>
          </div>
        </div>
        <p class="text-end mt-2 me-2">Edit profile</p>
      </div>
      <div class="col-12 col-md-7 col-lg-8 py-3 py-md-0 mb-3">
        <div class="profile-side rounded-4 py-4 px-5">
          <p class="pp-head text- me-auto">Preferences</p>
          <template v-for="preference in preferences" :key="preference.id">
            <div class="row pref-row text-start rounded-3 p-3 mt-3">
              <span class="pp-subhead">{{ preference.name }}</span>
              <span class="pp-text">{{ preference.value }}</span>
            </div>
          </template>
        </div>
        <p class="text-end mt-2 me-2">Edit preferences</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Chat",
  data() {
    return {
      preferences: [
        {
          name: "Region",
          value: "value",
        },
        {
          name: "Region",
          value: "value",
        },
        {
          name: "Region",
          value: "value",
        },
        {
          name: "Region",
          value: "value",
        },
        {
          name: "Region",
          value: "value",
        },
      ],
      profile:{
        name: "John Doe",
        email: "Johndoe@gmail.com",
        aboutme: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum gravida dolor sit amet condimentum."
      }
    };
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
  background-color: rgba(var(--main-green-rgb), 0.5);
}
.profile-pic {
  width: 100%;
  max-height: 400px;
  object-fit: cover;
}
</style>
