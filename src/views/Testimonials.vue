<template>
  <div class="home">
    <!-- Testimonial Section -->
    <section id="testimonials" class="testimonials py-5">
      <div class="container">
        <!-- Top Separator -->
        <hr class="testimonial-separator" />
        <h2 class="text-center mb-4">What My Clients Say</h2>
        <div class="row">
          <div class="col-md-4 mb-4" v-for="(testimonial, index) in testimonials" :key="index">
            <div class="card testimonial-card shadow-sm p-4 text-center">
              <div class="card-body">
                <p class="card-text">"{{ testimonial.feedback }}"</p>
                <h5 class="card-title">{{ testimonial.name }}</h5>
                <p class="text-muted">{{ testimonial.role }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Bottom Separator -->
        <hr class="testimonial-separator" />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Testimonials",
  data() {
    return {
      testimonials: [
        {
          name: "Michael",
          role: "CEO",
          feedback: "Manasses is an exceptional developer who brought my website vision to life. Highly recommend!",
        },
        {
          name: "Joyce",
          role: "Marketing Manager",
          feedback: "His attention to detail and commitment to delivering top-quality work is unmatched. A pleasure to work with!",
        },
        {
          name: "Peter",
          role: "Founder",
          feedback: "The Web application he built for us exceeded expectations. He's truly talented and passionate about his work.",
        },
      ],
    };
  },
};
</script>

<style scoped>
/* Testimonial Section */
.testimonials {
  background: #000; /* Black Background */
  color: #fff; /* White Text */
}

/* Heading */
h2 {
  color: #0d6efd; 
}

/* Testimonial Card */
.testimonial-card {
  background: #000; /* Black Background */
  color: #fff; /* White Text */
  border: none; /* No Borders */
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

/* Hover Effect */
.testimonial-card:hover {
  transform: translateY(-5px);
  box-shadow: 0px 10px 20px rgba(13, 110, 253, 0.3); /* Blue Glow */
}

/* Separator */
.testimonial-separator {
  border: none;
  height: 2px;
  background: rgba(255, 255, 255, 0.3); /* White separator with opacity */
  margin: 30px auto;
  width: 50%; /* Centered */
}
</style>
