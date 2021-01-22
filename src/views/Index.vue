<template>
  <div class="wrapper">
    <Navbar></Navbar>
    <main class="index">
      <div class="intro vh-100">
        <div class="mask"></div>
        <div class="container position-relative h-100">
          <div class="slogan d-flex flex-column align-items-center w-100 px-6">
            <strong class="h2 text-white text-center">Experience is the mother of wisdom</strong>
            <p class="text-gray text-center fs-5 mt-4">
              COMMUNICATIONS, COMPUTER VISION, VIDEO & IMAGE PROCESSING
            </p>
            <button class="btn btn-lg btn-white fs-6 px-10 mt-12">JOIN US</button>
          </div>
        </div>
      </div>

      <div class="describe mt-13">
        <div class="container">
          <div class="d-flex flex-column align-items-center w-100">
            <p class="fs-5 lh-lg px-4 px-md-0">
              Based in the heart of Silicon Valley and San Diego, Zeku USA performs cutting-edge
              research in smartphone technologies, including but not limited to communications,
              computer vision, and video and image processing. With a staff comprised of talented
              scientists and engineers, Zeku USA delivers designs, algorithms and products that
              provide a positive impact on end users' daily interactions with technology, whether it
              be with smart devices, communication networks, or services in the cloud.
            </p>
            <button class="btn btn-lg btn-outline-black border-2 fs-6 px-10 mt-8">
              LEARN MORE
            </button>
          </div>
        </div>
      </div>

      <div class="hiring mt-13">
        <div class="container">
          <div class="hiring-banner"></div>
          <div class="d-flex flex-column align-items-center w-100 mt-13">
            <p class="fs-5 lh-lg px-4 px-md-0">
              We're expanding AGAIN, and looking to hire a full-time blog assistant as soon as
              possible. We're looking for someone with killer Photoshop skills. Join us at The Next
              Web! Become part of a diverse, global team working alongside the biggest brands in
              tech. See all available positions
            </p>
            <button class="btn btn-lg btn-outline-black border-2 fs-6 px-10 mt-8">JOIN US</button>
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
  name: 'Index',
  components: {
    Navbar,
    Footer
  },

  data() {
    return {};
  }
};
</script>
