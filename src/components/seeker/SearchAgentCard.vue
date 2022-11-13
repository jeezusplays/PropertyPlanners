<template>
    <div class="col" v-for="agent in agents" :key="agent.id">
        <div class="card shadow-sm">
            <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg"
                role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#55595c" />
            </svg>

            <div class="card-body">
                <h5 class="card-title">{{ agent.name }}</h5>
                <p class="card-text">
                    <i>{{ agent.location }}</i> Featured Agent <br>
                    {{ agent.company }} <br>
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
</template>

<script>
export default {
    name: "AgentCard",
    data() {
        return {
            agents: [
                {
                    name: "Agent Name",
                    location: "Location",
                    company: "Company",
                    // TODO: add image
                },
                {
                    name: "Agent Name",
                    location: "Location",
                    company: "Company",
                    // TODO: add image
                },
                {
                    name: "Agent Name",
                    location: "Location",
                    company: "Company",
                    // TODO: add image
                },
                {
                    name: "Agent Name",
                    location: "Location",
                    company: "Company",
                },
                {
                    name: "Agent Name",
                    location: "Location",
                    company: "Company",
                    // TODO: add image
                },
                {
                    name: "Agent Name",
                    location: "Location",
                    company: "Company",
                    // TODO: add image
                },
                {
                    name: "Agent Name",
                    location: "Location",
                    company: "Company",
                    // TODO: add image
                },
                {
                    name: "Agent Name",
                    location: "Location",
                    company: "Company",
                    // TODO: add image
                },
            ]
        };
    },
};
</script>