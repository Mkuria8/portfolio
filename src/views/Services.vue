<template>
  <!-- Services Section -->
  <section id="services" class="services py-5">
    <div class="container">
      <!-- Top Separator -->
      <hr class="service-separator" />

      <h2 class="text-center mb-4 text-primary fw-bold">My Services</h2>

      <div class="row">
        <div class="col-md-6 mb-4" v-for="(service, index) in services" :key="index">
          <div class="service-card text-center shadow-sm p-4">
            <div class="service-icon mb-3">
              <i :class="service.icon"></i>
            </div>
            <h5 class="card-title">{{ service.title }}</h5>
            <p class="card-text">{{ service.description }}</p>
          </div>
        </div>
      </div>

      <!-- Bottom Separator -->
      <hr class="service-separator" />
    </div>
  </section>
</template>

<script>
export default {
  name: "Services",
  data() {
    return {
      services: [
        {
          title: "Web Development",
          description: "I build responsive and high-performance websites using Vue.js and React.",
          icon: "bi bi-code-slash",
        },
        {
          title: "Backend Development",
          description: "I develop secure and scalable backend systems with Django, Laravel, and Node.js.",
          icon: "bi bi-server",
        },
        {
          title: "SEO Optimization",
          description: "I improve website visibility with SEO strategies to rank higher on search engines.",
          icon: "bi bi-graph-up",
        },
        {
          title: "E-Commerce Solutions",
          description: "I develop custom e-commerce platforms with payment integration and product management.",
          icon: "bi bi-cart",
        },
      ],
    };
  },
};
</script>

<style scoped>
/* Services Section */
.services {
  background: #000; /* Black Background */
  color: #fff; /* White Text */
}

/* Service Card Styling */
.service-card {
  background: transparent; /* No Background */
  color: #fff; /* White Text */
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

/* Hover Effect */
.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0px 10px 20px rgba(13, 110, 253, 0.3); /* Blue Glow */
}

/* Icon Styling */
.service-icon i {
  font-size: 3rem;
  color: #0d6efd; /* Bootstrap Blue */
}

/* Separator */
.service-separator {
  border: none;
  height: 2px;
  background: linear-gradient(to right, transparent, rgba(13, 110, 253, 0.5), transparent);
  margin: 40px auto;
  width: 50%; /* Centered */
}

/* Typography */
.card-title {
  font-weight: 600;
  font-size: 1.3rem;
}

.card-text {
  font-size: 1rem;
  opacity: 0.85;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .card-title {
    font-size: 1.2rem;
  }

  .card-text {
    font-size: 1rem;
  }
}
</style>
