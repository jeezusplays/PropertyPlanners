<template>
  <section class="py-2 container">
    <div class="row py-lg-5">
      <div class="col-lg-6 col-md-8 mx-auto">
        <div class="input-group rounded py-2">
          <input
            type="search"
            class="form-control outline-secondary"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="search-addon"
            v-model="searchValue"
            @keyup.enter="filterSearch()"
          />
          <button
            class="btn btn-success border outline-secondary"
            type="button"
            @click="filterSearch()"
          >
            Search
          </button>
        </div>

        <div class="dropdown float-start">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Sort By:
          </button>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" @click="sortBy('salesperson_name')"
                >Alphabetical</a
              >
            </li>
            <li>
              <a class="dropdown-item" @click="sortBy('estate_agent_name')"
                >Company Name</a
              >
            </li>
            <li>
              <a class="dropdown-item" @click="sortBy('years')"
                >Experience (Years)</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <div class="album py-5 bg-light">
    <div class="container">
      <div
        class="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-3"
      >
        <AgentCard :agents="agents" />
      </div>
    </div>
  </div>
</template>

<script>
import AgentCard from "./SearchAgentCard.vue";
import { collection, query, where, getDocs } from "firebase/firestore";
import { fsdb } from "@/scripts/fb";

export default {
  name: "Search",
  data() {
    return {
      agents: [],
      allAgents: [],
      searchValue: "",
    };
  },
  components: {
    AgentCard,
  },
  async mounted() {
    const q = query(
      collection(fsdb, "users"),
      where("registration_no", "!=", ""),
      where("hasPlans", "==", true)
    );

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      var data = doc.data();
      data["uid"] = doc.id;
      this.allAgents.push(data);
      this.agents.push(data);
    });
  },
  methods: {
    filterSearch() {
      this.agents = [];
      this.allAgents.forEach((agent) => {
        var added = false;
        for (const key in agent) {
          if (Object.hasOwnProperty.call(agent, key)) {
            const element = agent[key];
            if (!['uid','email','profilepic'].includes(key) && !added && typeof element == "string") {
              if (
                element.toLowerCase().includes(this.searchValue.toLowerCase())
              ) {
                this.agents.push(agent);
                console.log(key);
                console.log(agent);
                added = true;
              }
            }
          }
        }
      });
    },
    sortBy(key) {
      var c1 = (a, b) => {
        if (a.salesperson_name < b.salesperson_name) {
          return -1;
        }
        if (a.salesperson_name > b.salesperson_name) {
          return 1;
        }
        return 0;
      };
      var c2 = (a, b) => {
        if (a.estate_agent_name < b.estate_agent_name) {
          return -1;
        }
        if (a.estate_agent_name > b.estate_agent_name) {
          return 1;
        }
        return 0;
      };
      //years
      var c3 = (a, b) => {
        if (this.year(a) < this.year(b)) {
          return -1;
        }
        if (this.year(a) > this.year(b)) {
          return 1;
        }
        return 0;
      };
      switch (key) {
        case "salesperson_name":
          this.agents.sort(c1);
          break;
        case "estate_agent_name":
          this.agents.sort(c2);
          break;
        case "years":
          this.agents.sort(c3).reverse();
          break;

        default:
          this.agents.sort(c1);
      }
    },
    year(agent) {
      var end_date = agent.registration_end_date.split("-");
      var end = Number(end_date[0]);
      var start_date = agent.registration_start_date.split("-");
      var start = Number(start_date[0]);
      var years = end - start == 0 ? 1 : end - start;
      return years;
    },
  },
};
</script>
