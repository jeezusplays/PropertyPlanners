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
                <AgentCard v-if="agents.length == 0"/>
                <div v-else>
                    test
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AgentCard from "./AgentCard.vue"

export default {
    name: "Search",
    data() {
        return {
            agents: []
        };
    },
    components: {
        AgentCard
    }
};
</script>