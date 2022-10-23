<template>
  <div
    class="d-none d-sm-flex h-100 flex-column flex-shrink-0 p-3 text-white bg-dark"
    style="width: 280px"
    id="sidebar"
  >
    <a
      href="/"
      class="d-flex align-items-center mb-3 mb-md-0 mx-auto text-white text-decoration-none"
    >
      <span class="fs-4 py-2">PropertyPlanners</span>
    </a>
    <ul class="navbar-nav nav nav-pills flex-column mb-auto">
      <li class="nav-item w-100 text-start">
        <a
          href="#"
          class="nav-link grow text-colour-hover p-3"
          aria-current="page"
        >
          <font-awesome-icon icon="fa-solid fa-house" class="me-3" size="md" />
          <text>Dashboard</text>
        </a>
      </li>
      <li class="nav-item w-100 text-start">
        <div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <div class="accordion-header">
              <button
                class="accordion-button collapsed grow text-colour-hover p-3 w-100"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <font-awesome-icon
                  icon="fa-solid fa-chart-pie"
                  class="me-3"
                  size="md"
                />
                <text>Statistic</text>
              </button>
            </div>
            <div
              id="collapseOne"
              class="accordion-collapse collapse"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body p-0">
                <a
                  href="#"
                  class="nav-link grow text-colour-hover ms-4"
                  aria-current="page"
                >
                  <font-awesome-icon
                    icon="fa-solid fa-map"
                    class="me-3"
                    size="md"
                  />
                  <text>By Region</text>
                </a>
                <a
                  href="#"
                  class="nav-link grow text-colour-hover ms-4"
                  aria-current="page"
                >
                  <font-awesome-icon
                    icon="fa-solid fa-chart-column"
                    class="me-3"
                    size="md"
                  />
                  <text>General</text>
                </a>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li class="nav-item w-100 text-start">
        <a
          href="#"
          class="nav-link grow text-colour-hover p-3"
          aria-current="page"
        >
          <font-awesome-icon
            icon="fa-solid fa-comment"
            class="me-3"
            size="md"
          />
          <text>Chats</text>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
};
</script>

<style>
.accordion {
  --bs-accordion-color: white !important;
  --bs-accordion-bg: initial !important;
  --bs-accordion-border-color: initial !important;
  --bs-accordion-border-width: initial !important;
  --bs-accordion-border-radius: initial !important;
}
.accordion-item:last-of-type {
  border-bottom-right-radius: initial !important;
  border-bottom-left-radius: initial !important;
}
.accordion-item:first-of-type {
  border-top-left-radius: initial !important;
  border-top-right-radius: initial !important;
}
.accordion-item {
  color: white !important;
  background-color: initial !important;
  border: initial !important;
}

.accordion-item:first-of-type .accordion-button {
  border-top-left-radius: initial !important;
  border-top-right-radius: initial !important;
}

.accordion-item:last-of-type .accordion-button.collapsed {
  border-bottom-right-radius: initial !important;
  border-bottom-left-radius: initial !important;
}
.accordion-item:first-of-type .accordion-button {
  border-top-left-radius: initial !important;
  border-top-right-radius: initial !important;
}

.accordion-item:last-of-type .accordion-collapse {
  border-bottom-right-radius: initial !important;
  border-bottom-left-radius: initial !important;
}

.accordion-button:not(.collapsed) {
  color: white;
  background-color: initial !important;
  box-shadow: initial !important;
}

.nav-pills {
  --bs-nav-pills-border-radius: initial !important;
  --bs-nav-pills-link-active-color: initial !important;
  --bs-nav-pills-link-active-bg: initial !important;
}

.accordion-button {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  padding: var(--bs-accordion-btn-padding-y) var(--bs-accordion-btn-padding-x);
  font-size: 1rem;
  color: white;
  text-align: left;
  background-color: var(--bs-accordion-btn-bg);
  border: 0;
  border-radius: 0;
  overflow-anchor: none;
  transition: initial;
}
.accordion-button:focus {
  z-index: 3;
  border-color: initial;
  outline: 0;
  box-shadow: initial;
}
.accordion-button:not(.collapsed)::after {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
  transform: rotate(180deg);
}
.accordion-button::after {
  flex-shrink: 0;
  width: var(--bs-accordion-btn-icon-width);
  height: var(--bs-accordion-btn-icon-width);
  margin-left: auto;
  content: "";
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-size: var(--bs-accordion-btn-icon-width);
  transition: var(--bs-accordion-btn-icon-transition);
  transform: rotate(0deg);
}

.nav {
  --bs-nav-link-color: initial;
  --bs-nav-link-hover-color: initial;
  --bs-nav-link-disabled-color: #6c757d;
}

#sidebar {
  max-width: fit-content;
  /* position: absolute; */
  transition: 300ms;
}

.sliderbar {
  height: 100%;
  -webkit-animation: side-out 5s linear forwards;
        animation: side-out 5s linear forwards;
}

@keyframes slide-in {
  from {
    left: -280px;
  }
  to {
    left: 0;
  }
}
@-webkit-keyframes slide-in {
  from {
    left: -280px;
  }
  to {
    left: 0;
  }
}

@keyframes side-out {
  from {
    left: 0;
  }
  to {
    left: -280px;
  }
}
@-webkit-keyframes side-out {
  from {
    left: 0;
  }
  to {
    left: -280px;
  }
}
</style>
