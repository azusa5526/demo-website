<template>
  <header class="header">
    <nav
      class="navbar navbar-expand-md navbar-light fixed-top transition"
      :class="{ 'bg-trasparent': isTop, 'bg-white': !isTop }"
    >
      <div class="container-fluid">
        <div class="d-flex align-items-center">
          <h1 class="mb-0 ms-1 ms-md-4 py-2 py-sm-3 py-md-4">
            <router-link
              class="navbar-brand p-0 m-0 wow animate__animated animate__fadeInUp"
              data-wow-duration=".5s"
              to="/"
              >demo-website</router-link
            >
          </h1>

          <div
            class="dropdown ps-2 ps-md-4 wow animate__animated animate__fadeInUp"
            data-wow-duration=".5s"
          >
            <button
              class="btn btn-trasparent dropdown-toggle foucus-0"
              :class="{ 'text-white': isTop, 'text-dark': !isTop }"
              type="button"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {{ $t('GENERAL.LANG') }}
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li>
                <a class="dropdown-item" data-lang="tw" href="#" @click.prevent="setLang">中文</a>
              </li>
              <li>
                <a class="dropdown-item" data-lang="en" href="#" @click.prevent="setLang"
                  >English</a
                >
              </li>
            </ul>
          </div>
        </div>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="bi bi-list fs-4" :class="{ 'text-white': isTop, 'text-dark': !isTop }"></i>
        </button>

        <div
          class="collapse navbar-collapse d-md-flex justify-content-end pt-4 pt-md-0"
          id="navbarNav"
        >
          <ul
            class="navbar-nav me-1 me-md-4 wow animate__animated animate__fadeInUp"
            data-wow-duration=".5s"
          >
            <li class="nav-item px-md-2 px-xl-3">
              <router-link
                class="nav-link"
                :class="{ 'text-white': isTop, 'text-dark': !isTop }"
                to="/"
                >{{ $t('GENERAL.NAV_OPTIONS[0]') }}</router-link
              >
            </li>
            <li class="nav-item px-md-2 px-xl-3">
              <router-link
                class="nav-link"
                :class="{ 'text-white': isTop, 'text-dark': !isTop }"
                to="/about"
                >{{ $t('GENERAL.NAV_OPTIONS[1]') }}</router-link
              >
            </li>
            <li class="nav-item px-md-2 px-xl-3">
              <router-link
                class="nav-link"
                :class="{ 'text-white': isTop, 'text-dark': !isTop }"
                to="/contact"
                >{{ $t('GENERAL.NAV_OPTIONS[2]') }}</router-link
              >
            </li>
            <li class="nav-item px-md-2 px-xl-3">
              <router-link
                class="nav-link"
                :class="{ 'text-white': isTop, 'text-dark': !isTop }"
                to="/join"
                >{{ $t('GENERAL.NAV_OPTIONS[3]') }}</router-link
              >
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
    return {
      isTop: true
    };
  },

  methods: {
    handleScroll() {
      const st = window.scrollY;
      if (st < 5) {
        this.isTop = true;
      } else {
        this.isTop = false;
      }
    },

    setActiveLanguage(lang) {
      localStorage.setItem('language', lang);
    },
    setLang(evt) {
      const lang = evt.target.dataset.lang;
      this.setActiveLanguage(lang);
      return history.go(0);
    }
  },

  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },

  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  }
};
</script>
