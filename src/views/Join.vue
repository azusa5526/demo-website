<template>
  <div class="wrapper">
    <Navbar></Navbar>
    <main class="join">
      <div class="top-banner">
        <div class="mask"></div>
        <div class="container position-relative h-100">
          <div class="slogan d-flex flex-column align-items-center w-100 px-6">
            <strong class="h2 text-white text-center">Join</strong>
          </div>
        </div>
      </div>

      <div class="describe mt-11 mt-lg-12">
        <div class="container">
          <div class="d-flex flex-column align-items-center w-100">
            <p class="fs-5 fw-light lh-lg px-4 px-md-0">
              Based in the heart of Silicon Valley and San Diego, Zeku USA performs cutting-edge
              research in smartphone technologies, including but not limited to communications,
              computer vision, and video and image processing. With a staff comprised of talented
              scientists and engineers, Zeku USA delivers designs, algorithms and products that
              provide a positive impact on end users' daily interactions with technology, whether it
              be with smart devices, communication networks, or services in the cloud.
            </p>
          </div>
        </div>
      </div>
    </main>

    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default {
  name: 'Join',
  components: {
    Navbar,
    Footer
  },

  data() {
    return {};
  }
};
</script>
