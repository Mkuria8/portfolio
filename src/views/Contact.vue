<template>
  <!-- Contact Form Section -->
  <div class="home">
    <section id="contact" class="contact py-5">
      <div class="container">
        <!-- Top Separator -->
        <hr class="contact-separator" />

        <h2 class="text-center mb-4">Contact Me</h2>

        <div class="row justify-content-center">
          <div class="col-md-8">
            <form @submit.prevent="handleSubmit" class="p-4 rounded shadow">
              <div class="mb-3">
                <label for="name" class="form-label">Your Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  v-model="form.name"
                  required
                  placeholder="Enter your full name"
                />
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">Your Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  v-model="form.email"
                  required
                  placeholder="Enter your email address"
                />
              </div>
              <div class="mb-3">
                <label for="message" class="form-label">Your Message</label>
                <textarea
                  class="form-control"
                  id="message"
                  v-model="form.message"
                  rows="4"
                  required
                  placeholder="Write your message here"
                ></textarea>
              </div>
              <button type="submit" class="btn btn-primary btn-lg w-100" :disabled="loading">
                <span v-if="loading">Sending...</span>
                <span v-else>Send Message</span>
              </button>
            </form>
          </div>
        </div>

        <!-- Bottom Separator -->
        <hr class="contact-separator" />
      </div>
    </section>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "Contact",
  setup() {
    const form = ref({
      name: "",
      email: "",
      message: "",
    });
    const loading = ref(false);

    const handleSubmit = async () => {
      loading.value = true;
      try {
        const response = await fetch("https://formsubmit.co/b8408dab3d3b542d03d0a6f604dac261", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(form.value).toString(),
        });

        if (response.ok) {
          alert("✅ Message sent successfully!");
          form.value = { name: "", email: "", message: "" };
        } else {
          alert(" Something went wrong. Try again later.");
        }
      } catch (error) {
        console.error("Error:", error);
        alert(" Failed to send the message. Please try again.");
      }
      loading.value = false;
    };

    return { form, handleSubmit, loading };
  },
};
</script>

<style scoped>
/* Contact Section */
.contact {
  background-color: #000; /* Black Background */
  color: #fff; /* White Text */
  padding: 60px 0;
}

/* Headings */
h2 {
  color: #0d6efd; /* Blue */
  font-size: 2rem;
  font-weight: bold;
}

/* Form Styling */
form {
  background-color: rgba(14, 3, 3, 0.05); /* Slightly transparent black */
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 10px 30px rgba(13, 110, 253, 0.3); /* Blue glow effect */
}

/* Labels */
.form-label {
  font-weight: bold;
  color: #fff; /* White Labels */
}

/* Inputs */
.form-control {
  background-color: #222; /* Dark Input Background */
  color: #fff; /* White Text */
  border: 1px solid #0d6efd; /* Blue Border */
  border-radius: 8px;
  padding: 12px;
}

.form-control::placeholder {
  color: #ccc;
}

.form-control:focus {
  border-color: #0d6efd;
  box-shadow: 0 0 10px rgba(13, 110, 253, 0.5);
}

/* Button */
.btn-primary {
  background-color: #0d6efd;
  border-color: #0d6efd;
  font-weight: bold;
  padding: 12px;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  background-color: #0056b3;
  border-color: #0056b3;
}

/* Separator */
.contact-separator {
  border: none;
  height: 2px;
  background: rgba(255, 255, 255, 0.3);
  margin: 30px auto;
  width: 50%;
}
</style>
