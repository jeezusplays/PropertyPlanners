<template>
    <section class="py-2 container">
        <div class="row py-lg-5">
            <div class="col-lg-6 col-md-8 mx-auto">
                <div class="input-group rounded py-2">
                    <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search"
                        aria-describedby="search-addon" />
                    <button class="btn btn-success border rounded pill" type="button">
                        Search
                    </button>
                </div>

                <div class="dropdown float-start">
                    <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        Sort By:
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Alphabetical</a></li>
                        <li><a class="dropdown-item" href="#">Company Name</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </div>
            </div>

        </div>
    </section>

    <div class="album py-5 bg-light">
        <div class="container">

            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
                <div class="col" v-for="agent in agents" :key="agent.id">
                    <div class="card shadow-sm">
                        <svg class="bd-placeholder-img card-img-top" width="100%" height="225"
                            xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail"
                            preserveAspectRatio="xMidYMid slice" focusable="false">
                            <title>Placeholder</title>
                            <rect width="100%" height="100%" fill="#55595c" />
                        </svg>

                        <div class="card-body">
                            <h5 class="card-title">{{agent.name}}</h5>
                            <p class="card-text">
                                <i>{{agent.location}}</i> Featured Agent <br>
                                {{agent.company}} <br>
                                Something Else
                            </p>
                            <div class="d-flex justify-content-around align-items-center">
                                <div class="btn-group w-100">
                                    <button type="button" class="btn btn-lg btn-outline-success">View</button>
                                    <button type="button" class="btn btn-lg btn-outline-secondary">Chat</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Search",
    data() {
        return {
            agents: [
                {
                    name: "Agent Name",
                    location: "Location",
                    company: "Company"
                },
                {
                    name: "Agent Name",
                    location: "Location",
                    company: "Company"
                },
                {
                    name: "Agent Name",
                    location: "Location",
                    company: "Company"
                },
                {
                    name: "Agent Name",
                    location: "Location",
                    company: "Company"
                },
                {
                    name: "Agent Name",
                    location: "Location",
                    company: "Company"
                },
                {
                    name: "Agent Name",
                    location: "Location",
                    company: "Company"
                },
                {
                    name: "Agent Name",
                    location: "Location",
                    company: "Company"
                },
                {
                    name: "Agent Name",
                    location: "Location",
                    company: "Company"
                },
            ]
        };
    },
};
</script>