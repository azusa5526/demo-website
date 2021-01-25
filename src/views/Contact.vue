<template>
  <div class="wrapper">
    <Navbar></Navbar>
    <main class="contact">
      <div class="top-banner">
        <div class="mask"></div>
        <div class="container position-relative h-100">
          <div class="slogan d-flex flex-column align-items-center w-100 px-6">
            <strong class="h2 text-white text-center">Contact</strong>
          </div>
        </div>
      </div>

      <div class="message mt-11 mt-lg-12">
        <div class="container-md">
          <div class="row mb-11">
            <div class="col-12 col-lg-10 offset-lg-1">
              <form class="mb-12" action="https://formspree.io/f/xaylvaoo" method="POST">
                <fieldset>
                  <legend class="mb-8 fw-light">Leave a Message</legend>
                  <div class="mb-5">
                    <label for="name" class="form-label fs-5 fw-light">Name</label>
                    <input type="text" name="name" class="form-control" id="name" />
                  </div>

                  <div class="mb-11">
                    <label for="exampleInputEmail1" class="form-label fs-5 fw-light"
                      >Email address</label
                    >
                    <input
                      type="email"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      name="reply to"
                    />
                    <div id="emailHelp" class="form-text">
                      We'll never share your email with anyone else.
                    </div>
                  </div>

                  <div class="mb-5">
                    <label for="subject" class="form-label fs-5 fw-light">Subject</label>
                    <input type="text" name="subject" class="form-control" id="subject" />
                  </div>

                  <div class="mb-8">
                    <label for="message" class="form-label fs-5 fw-light">Message</label>
                    <textarea type="text" name="message" class="form-control" id="message" />
                  </div>

                  <button type="submit" class="btn btn-lg btn-outline-dark border-2 fs-6 px-6">
                    SUBMIT
                  </button>
                </fieldset>
              </form>
              <hr />
            </div>
          </div>

          <div class="row">
            <div class="col-12 col-lg-10 offset-lg-1 d-flex flex-column align-items-center mb-8">
              <p class="fs-5">ZEKU USA</p>
              <p class="text-center fw-light">
                2479 E Bayshore Road, Suite 188<br />Palo Alto, CA 94303
              </p>
            </div>

            <div class="col-12 col-lg-10 offset-lg-1">
              <iframe
                frameborder="0"
                style="border: 0"
                class="bg-primary w-100"
                height="450px"
                :src="map"
              >
              </iframe>
            </div>
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
  name: 'Contact',
  components: {
    Navbar,
    Footer
  },

  data() {
    return {
      map: `https://www.google.com/maps/embed/v1/place?key=${process.env.VUE_APP_GCP_API_KEY}&q=新威力新竹耳機專賣店`,
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  },

  methods: {}
};
</script>
