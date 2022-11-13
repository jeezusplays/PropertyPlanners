<template>
  <div class="container bg-light d-md-flex align-items-center mt-5">
    <div class="row row-cols-1 row-cols-md-2">
      <div class="col shadow-sm p-md-5 p-md-5 p-4">
        <div class="h5 fw-bold mb-4">Monthly Plan</div>

        <div class="d-flex flex-column">
          <div
            class="d-flex align-items-center justify-content-between text mt-4 mb-4"
          >
            <span class="fw-semibold">Plan</span>
            <span class="fw-semibold">Quantity</span>
            <span class="fw-semibold">Price</span>
          </div>
          <div class="border-bottom"></div>
        </div>

        <div class="d-flex flex-column">
          <div
            class="d-flex align-items-center justify-content-between text mt-4 mb-4"
          >
            <span>{{ plan }}</span>
            <span
              ><input
                style="width: 20%"
                type="number"
                v-model="quantity"
                min="1"
            /></span>
            <span>${{ price }}</span>
          </div>
          <div class="border-bottom mb-4"></div>
          <div
            class="d-flex align-items-center justify-content-between text mb-4"
          >
            <span>Total</span>
            <span>${{ totalPrice }}</span>
          </div>
          <div class="border-bottom mb-4"></div>
          <div class="row">
            <div class="d-flex flex-column col-12 col-md-6 mb-4">
              <span>Order ID:</span>
              <span>{{ order }}</span>
            </div>
            <div class="d-flex flex-column col-12 col-md-6 mb-5">
              <span>Days Left:</span>
              <span>{{ daysleft }}</span>
              <span class="opacity-50"
                >({{ daysleft + 30 }} after purchase)</span
              >
            </div>
          </div>
        </div>
      </div>

      <div class="col shadow-sm">
        <div
          class="d-flex align-items-center justify-content-between p-md-5 p-4"
        >
          <span class="h5 fw-bold m-0">Payment</span>
        </div>
        <ul class="nav nav-tabs mb-3 px-md-4 px-2">
          <li class="nav-item">
            <a class="nav-link px-2 active" aria-current="page" href="#"
              >Credit Card</a
            >
          </li>
          <!-- <li class="nav-item"> <a class="nav-link px-2" href="#">Mobile Payment</a> </li>
                <li class="nav-item ms-auto"> <a class="nav-link px-2" href="#">+ More</a> </li> -->
        </ul>
        <!-- <div class="px-md-5 px-4 mb-4 d-flex align-items-center">
                <div class="btn btn-success me-4">
                    <span class="fas fa-plus"></span>
                </div>
                <div class="btn-group" role="group" aria-label="Basic radio toggle button group"> 
                    <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked> 
                    <label class="btn btn-outline-primary" for="btnradio1"><span class="pe-1">+</span>5949</label> 
                    <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off"> 
                    <label class="btn btn-outline-primary" for="btnradio2"><span class="lpe-1">+</span>3894</label> 
                </div>
            </div> -->
        <form action="">
          <div class="row">
            <div class="col-12">
              <div class="d-flex flex-column px-md-5 px-4 mb-4">
                <span>Credit Card</span>
                <div class="inputWithIcon">
                  <input
                    class="form-control"
                    type="text"
                    placeholder="5136 1845 5468 3894"
                  />
                  <!-- <span><font-awesome-icon icon="fa-solid fa-credit-card"></font-awesome-icon></span> -->

                  <span>
                    <img
                      src="https://www.freepnglogos.com/uploads/mastercard-png/mastercard-logo-logok-15.png"
                      alt=""
                      style="width: 30px"
                    />
                  </span>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="d-flex flex-column ps-md-5 px-md-0 px-4 mb-4">
                <span>Expiration Date</span>
                <div class="inputWithIcon">
                  <input type="text" class="form-control" placeholder="05/20" />
                  <span
                    ><font-awesome-icon
                      icon="fa-solid fa-calendar"
                    ></font-awesome-icon
                  ></span>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="d-flex flex-column pe-md-5 px-md-0 px-4 mb-4">
                <span>CVV</span>
                <div class="inputWithIcon">
                  <input
                    type="password"
                    class="form-control"
                    placeholder="123"
                  />
                  <span
                    ><font-awesome-icon
                      icon="fa-solid fa-lock"
                    ></font-awesome-icon
                  ></span>
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="d-flex flex-column px-md-5 px-4 mb-4">
                <span>Name</span>
                <div class="inputWithIcon">
                  <input
                    class="form-control text-uppercase"
                    type="text"
                    placeholder="Gold D. Roger"
                  />
                  <span
                    ><font-awesome-icon
                      icon="fa-solid fa-user"
                    ></font-awesome-icon
                  ></span>
                </div>
              </div>
            </div>
            <div class="col-12 px-md-5 px-4 mt-3 mb-3">
              <div
                @click="purchase(quantity * 30)"
                class="btn btn-primary w-100"
              >
                Pay ${{ totalPrice }}
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { fsdb } from "@/scripts/fb";
import { doc, updateDoc, increment } from "@firebase/firestore";

export default {
  name: "Payment",
  data() {
    return {
      plan: "Monthly Advertising Plan",
      quantity: 1,
      price: 100,
      order: null,
    };
  },
  computed: {
    totalPrice() {
      return (this.quantity * this.price).toFixed(2);
    },
    daysleft() {
      return this.quantity * 30;
    },
  },
  methods: {
    async purchase(days = this.daysleft) {
      var currentTime = new Date();
      currentTime.setDate(currentTime.getDate() + days);
      // Create a document reference

      const userRef = doc(fsdb, "users", localStorage["uid"]);

      // Atomically add a new region to the "regions" array field.
      await updateDoc(userRef, {
        hasPlans: true,
        daysLeft: increment(days),
        endDate: currentTime,
      });

      this.$router.push({ path: `dashboard` });
    },
  },
};
</script>

<style>
.inputWithIcon {
  position: relative;
}

.inputWithIcon span {
  position: absolute;
  right: 10px;
  bottom: 8px;
  color: #547b58;
  cursor: pointer;
  transition: 0.3s;
  font-size: 14px;
}
</style>
