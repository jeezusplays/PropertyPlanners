<template>
    <div class="container-fluid py-4 p-md-5">
        <div class="container">
            <div class="container mb-5">
                <h1 class="t1">About Us</h1>
                <h5>Founded in 2022, PropertyPlanners has only goal - make information about property simple.</h5>
            </div>
            <div class="row">
                <div class="col-lg-6">
                    <img id="about-us-img" src="../../assets/singapore.jpg" alt="">
                </div>
                <div class="col-lg-6 px-4 mt-3 mt-sm-2 mt-lg-0 py-2 text-start">
                    
                    <h2 class="t2">Service you deserve, Data you can trust.</h2>
                    <p class="mb-4">We understand that a choosing home is a big decision, which is why you need PropertyPlanners. Make an informed decision with our data for absolutely free!</p>
                    
                    <div class="row my-3">
                        <div class="col-3 col-xl-2">
                            <div class="icon-button mx-auto rounded-circle d-flex align-middle shadow text-center">
                            <font-awesome-icon class="m-auto" icon="fa-solid fa-1" size="xl" />
                        </div>
                        </div>
                        <div class="col">
                            <h3 class="t3">Mission</h3>
                            <p>To reinvent how people find properties.</p>
                        </div>
                    </div>
                    <div class="row my-3">
                        <div class="col-3 col-xl-2">
                            <div class="icon-button mx-auto rounded-circle d-flex align-middle shadow text-center">
                            <font-awesome-icon class="m-auto" icon="fa-solid fa-2" size="xl"/>
                        </div>
                        </div>
                        <div class="col">
                            <h3 class="t3">Values</h3>
                            <p>Transparent, Adaptable, Simplicity</p>
                        </div>
                    </div>
                    <div class="row my-3">
                        <div class="col-3 col-xl-2">
                            <div class="icon-button mx-auto rounded-circle d-flex align-middle shadow text-center">
                            <font-awesome-icon class="m-auto" icon="fa-solid fa-3" size="xl" />
                        </div>
                        </div>
                        <div class="col">
                            <h3 class="t3">Goal</h3>
                            <p>Easy, simple property data for everyone! </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>
<style>
#about-us-container {
    background-color: rgba(var(--main-green-rgb), 0.2);
}

#about-us-img {
    width: 100%;
    min-height: 400px;
    max-height: 600px;

    object-fit: cover;
}
.icon-button{
    width: 72px;
    height: 72px;
    background-color: white;
}
h1, h2,h3,h4,h5,h6{
    font-family: "Roboto", sans-serif;
}

.t1{
    font-size: 32px;
    font-weight: 700;

}
.t2{
    font-weight: 600;
    font-size: 26px;
}
.t3{
    font-weight: 550;
    font-size: 18px;
}
</style>