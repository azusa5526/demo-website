<template>
  <header class="header">
    <nav class="navbar navbar-expand-md navbar-light fixed-top bg-transparent">
      <div class="container-fluid">
        <h1 class="mb-0 ms-1 ms-md-4 py-2 py-sm-3 py-md-4">
          <router-link class="navbar-brand p-0 m-0" to="/">demo-website</router-link>
        </h1>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse d-md-flex justify-content-end" id="navbarNav">
          <ul class="navbar-nav me-1 me-md-4">
            <li class="nav-item px-md-3 px-xl-4">
              <a class="nav-link text-white" aria-current="page" href="#">HOME</a>
            </li>
            <li class="nav-item px-md-3 px-xl-4">
              <a class="nav-link text-white" href="#">ABOUT</a>
            </li>
            <li class="nav-item px-md-3 px-xl-4">
              <a class="nav-link text-white" href="#">CONTACT</a>
            </li>
            <li class="nav-item px-md-3 px-xl-4">
              <a class="nav-link text-white" href="#">JOIN US</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Navbar',
  components: {},
  data() {
    return {};
  }
};
</script>
