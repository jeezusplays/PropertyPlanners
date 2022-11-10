<template>
    <div class="container-fluid">

        <div class="row">
            <div class="col-12">
                <!--Insert Nav Bar-->    
            </div>
        </div>

        <div class="row">
            <h2>Payment</h2>

            <div class="col-12">
                <!--Insert Sidebar-->
            </div>

            <div class="col-12 col-lg-6"> 
                <div class="card">
                    <div class="card-body">
                    <h3>Pay with card</h3>
                    <h4>Credit Card Information</h4>

                    <p class="card-text">
                        <div class="form-outline mb-4">
                            <div class="form-outline">
                            <label class="form-label" for="card-number">Card Number</label>
                            <input type="text" id="card-number" maxlength="19" class="form-control form-control-md"
                            v-model="cardNumber" placeholder="1234 0000 0000 0000" pattern="[0-9\s]" inputmode="numeric"/>
                            </div>
                        </div>
                        <div class="row mb-4">
                            <div class="col-8">
                                <label class="form-label" for="expiry">Expiration</label>
                                <input type="text" id="expiry" class="form-control form-control-md"
                                v-model="expiryDate" placeholder="MM / YYYY"/>
                            </div>

                            <div class="col-4">
                                <div class="form-outline">
                                <label class="form-label" for="cvv">CVV</label>
                                <input type="text" id="cvv" class="form-control form-control-md"
                                v-model="cvv" placeholder="CVV"/>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-12">
                                <label class="form-label" for="cardholder-name">Name</label>
                                <input type="text" id="cardholder-name" class="form-control form-control-md"
                                v-model="cardName" placeholder="Name on Card"/>
                            </div>
                        </div>

                        <div class="row pt-3">
                            <div class="col-12">
                                <p>
                                    <input type="checkbox" v-model="isSelected">
                                    Save this information for future purchases
                                </p>
                            </div>
                        </div>
                    </p>
                </div>
            </div>

            <div class="col-12 col-lg-6 right">
                <div class="card border-0">
                    <div class="card-body">
                        
                        <p class="card-text">
                            <div class="row d-flex align-items-center mb-5">
                                <div class="col-4 ps-5"><img src="../assets/virtual_currency.svg" alt="Currency" class="img-thumb"></div>
                                <div class="col-8">
                                    <h3>
                                        <span class="text-success">$50</span>
                                        Online Currency
                                    </h3>
                                </div>
                            </div><hr>

                            <div class="row d-flex align-items-center">
                                <div class="col-6 text-center">Subtotal</div>
                                <div class="col-6 text-center">$50.00</div>
                            </div><hr>

                            <div class="row py-3 d-flex align-items-center">
                                <div class="col-6 text-center">Total</div>
                                <h4 class="col-6 text-center">$50.00</h4>
                            </div>
                        </p>
                    </div>

                    <div class="row text-center d-flex align-items-center">
                        <div class="col-6">
                            <a href="" class="text-decoration-none text-success">Back to cart</a>
                        </div>
                        <h4 class="col-6">
                            <button class="btn btn-success btn-md">
                                Place Order
                                <span class="fas fa-arrow-right ps-2"></span></div>
                            </button>
                        </h4>
                    </div>
                    
                    </div>
                </div>
            </div>

        </div>

    </div>

</template>

<script>
export default {
  name: "PaymentPage",
  data() {
    return {
        cardNumber : null,
        cardName : null,
        expiryDate : null,
        cvv : null,
        isSelected : false,
        }
    },
    head: {
        link: [
        { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.0.7/css/all.css'}
        ]
    }
};
</script>

<style>
    .btn.btn-success:hover .fas {
    transform: translateX(20px);
    transition: transform 1.0s ease
    }

    .btn.btn-success{
        width: 70%;
    }

    img {
        width: 100px;
        height: 100px;
    }

    .right {
        background-color: rgb(241, 241, 241);
    }

    .right .card {
        background-color: rgb(241, 241, 241);
    }

    input[type=text] {
        width: 80%;
        transition: width 0.7s ease-in-out;
        box-sizing: border-box;
    }

    input[type=text]:focus {
        width: 100%;
        background-color: rgb(241, 241, 241)
    }
</style>