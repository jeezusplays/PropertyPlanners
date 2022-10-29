<template>
    <div class="container-fluid py-4 p-md-5">
        <div class="container">
            <div class="container mb-5">
                <h1 class="t1">About Us</h1>
                <h5>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque
                    vitae autem.</h5>
            </div>
            <div class="row">
                <div class="col-lg-6">
                    <img id="about-us-img" src="../../assets/singapore.jpg" alt="">
                </div>
                <div class="col-lg-6 px-4 mt-3 mt-sm-2 mt-lg-0 py-2 text-start">
                    
                    <h2 class="t2">Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h2>
                    <p class="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    
                    <div class="row my-3">
                        <div class="col-3 col-xl-2">
                            <div class="icon-button mx-auto rounded-circle d-flex align-middle shadow text-center">
                            <font-awesome-icon class="m-auto" icon="fa-solid fa-building" size="xl" />
                        </div>
                        </div>
                        <div class="col">
                            <h3 class="t3">Ullamco laboris nisi ut aliquip consequat</h3>
                            <p>Magni facilis facilis repellendus cum excepturi quaerat praesentium libre trade</p>
                        </div>
                    </div>
                    <div class="row my-3">
                        <div class="col-3 col-xl-2">
                            <div class="icon-button mx-auto rounded-circle d-flex align-middle shadow text-center">
                            <font-awesome-icon class="m-auto" icon="fa-solid fa-building" size="xl"/>
                        </div>
                        </div>
                        <div class="col">
                            <h3 class="t3">Ullamco laboris nisi ut aliquip consequat</h3>
                            <p>Magni facilis facilis repellendus cum excepturi quaerat praesentium libre trade</p>
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