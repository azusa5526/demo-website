<template>
  <div class="wrapper">
    <loading :active.sync="isLoading" />
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
              <form class="mb-12" id="messageForm">
                <fieldset>
                  <legend class="mb-8 fw-light">Leave a Message</legend>
                  <div class="mb-5">
                    <label for="name" class="form-label fs-5 fw-light">Name</label>
                    <input type="text" class="form-control" id="name" v-model="name" />
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
                      v-model="email"
                    />
                    <div id="emailHelp" class="form-text">
                      We'll never share your email with anyone else.
                    </div>
                  </div>

                  <div class="mb-5">
                    <label for="subject" class="form-label fs-5 fw-light">Subject</label>
                    <input type="text" class="form-control" id="subject" v-model="subject" />
                  </div>

                  <div class="mb-8">
                    <label for="message" class="form-label fs-5 fw-light">Message</label>
                    <textarea type="text" class="form-control" id="message" v-model="message" />
                  </div>

                  <button
                    type="submit"
                    class="btn btn-lg btn-outline-dark border-2 fs-6 px-6"
                    @click.prevent="sendEmail()"
                  >
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

    <div
      class="modal fade"
      id="emailModal"
      tabindex="-1"
      aria-labelledby="emailModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h6 class="modal-title" id="emailModalLabel">
              <i class="bi bi-chat-left-text-fill ms-2 me-4"></i>{{ modalMessage }}
            </h6>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
        </div>
      </div>
    </div>

    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Email from '@/assets/js/smtp.js';
import Modal from 'bootstrap/js/dist/modal';

export default {
  name: 'Contact',
  components: {
    Navbar,
    Footer
  },

  data() {
    return {
      map: `https://www.google.com/maps/embed/v1/place?key=${process.env.VUE_APP_GCP_API_KEY}&q=新威力新竹耳機專賣店`,
      isLoading: false,
      name: '',
      email: '',
      subject: '',
      message: '',
      modalMessage: ''
    };
  },

  methods: {
    sendEmail() {
      this.isLoading = true;
      Email.send({
        SecureToken: '26a67c6e-d769-46af-8565-78acadf6cefd',
        To: 'azusa5526@gmail.com',
        From: this.email,
        Subject: `${this.name}: ${this.subject}`,
        Body: this.message
      })
        .then(() => {
          const emailModal = new Modal(document.getElementById('emailModal'));
          this.modalMessage = 'Send message successfully';
          this.isLoading = false;
          emailModal.show();
        })
        .catch((error) => {
          const emailModal = new Modal(document.getElementById('emailModal'));
          this.modalMessage = `Send message fail ${error}`;
          this.isLoading = false;
          emailModal.show();
        });
    }
  }
};
</script>
