<template>
  <!-- Home.vue -->
  <div class="home">
    <!-- Hero Section -->
    <section class="hero position-relative overflow-hidden">
      <!-- Background gradient overlay -->
      <div class="hero-bg"></div>
      
      <div class="container py-5">
        <div class="row align-items-center py-5">
          <!-- Left Content -->
          <div class="col-md-6 animate__animated animate__fadeInLeft">
            <h2 class="display-4 fw-bold text-white mb-3">
              Hi, I'm <span class="text-primary">Manasses Kuria</span>
              <span>{{ typedText }}</span><span class="cursor">|</span>
            </h2>
            <p class="lead text-light mb-3">
              A passionate Software Engineer building innovative web solutions
            </p>
            <!-- Typing effect applied directly to heading text -->
            <div class="d-flex gap-3">
              <a 
                href="#contact" 
                class="btn btn-primary btn-lg shadow-sm"
                @mouseover="hoverContact = true"
                @mouseleave="hoverContact = false"
                :class="{ 'shadow-lg': hoverContact }"
              >
                Contact Me
              </a>
              <a 
                href="#projects" 
                class="btn btn-outline-secondary btn-lg shadow-sm"
                @mouseover="hoverProjects = true"
                @mouseleave="hoverProjects = false"
                :class="{ 'shadow-lg': hoverProjects }"
              >
                View My Work
              </a>
            </div>
          </div>

          <!-- Right Image -->
          <div class="col-md-6 text-center animate__animated animate__fadeInRight">
            <div class="image-wrapper position-relative">
              <img 
                class="img-fluid rounded-circle shadow-lg"
                width="350"
                @mouseover="imageHover = true"
                @mouseleave="imageHover = false"
                :class="{ 'scale-up': imageHover }"
              />
              <!-- Decorative elements -->
              <div class="floating-dot dot-1"></div>
              <div class="floating-dot dot-2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Skills from '../views/Skills.vue';
import Projects from '../views/Projects.vue';
import Services from '../views/Services.vue';
import Testimonials from '../views/Testimonials.vue';
import Contact from '../views/Contact.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'Home',
  components: {
    Services,
    Skills,
    Projects,
    Testimonials,
    Contact,
    Footer,
  },
  data() {
    return {
      hoverContact: false,
      hoverProjects: false,
      imageHover: false,
      typedText: '',
      textToType: 'I specialize in crafting Solutions that help businesses thrive',
      typingIndex: 0,
    };
  },
  mounted() {
    this.startTypingEffect();
  },
  methods: {
    startTypingEffect() {
      const typingInterval = setInterval(() => {
        if (this.typingIndex < this.textToType.length) {
          this.typedText += this.textToType[this.typingIndex];
          this.typingIndex++;
        } else {
          clearInterval(typingInterval);
        }
      }, 100); // Adjust typing speed here (in ms)
    },
  },
};
</script>

<style scoped>
/* <---hero---> */
.hero {
  background-color: #000; /* Set the background color to black */
  min-height: 80vh;
  padding-top: 80px;
  color: #fff; /* Set text color to white */
}

.hero-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 80% 20%, rgba(13, 110, 253, 0.1) 0%, transparent 50%);
  z-index: 0;
}

.container {
  position: relative;
  z-index: 1;
}

.btn {
  transition: all 0.3s ease;
}

.btn-primary {
  background-color: #0d6efd; /* Blue background for primary button */
  border: none;
}

.btn-outline-secondary:hover {
  background-color: #6c757d;
  color: white;
}

.image-wrapper {
  position: relative;
  display: inline-block;
}

img {
  transition: transform 0.3s ease;
}

.scale-up {
  transform: scale(1.05);
}

/* Floating decorative dots */
.floating-dot {
  position: absolute;
  border-radius: 50%;
  background: rgba(13, 110, 253, 0.3);
  animation: float 4s ease-in-out infinite;
}

.dot-1 {
  width: 20px;
  height: 20px;
  top: 10%;
  left: 10%;
  animation-delay: 0s;
}

.dot-2 {
  width: 15px;
  height: 15px;
  bottom: 15%;
  right: 15%;
  animation-delay: 2s;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .hero {
    min-height: auto;
    padding-top: 40px;
  }
  
  h1 {
    font-size: 2.5rem;
  }
  
  .btn-lg {
    padding: 0.5rem 1rem;
    font-size: 1rem;
  }
  
  img {
    width: 250px;
  }
}

/* Typing effect */
.cursor {
  display: inline-block;
  width: 10px;
  background-color: rgb(2, 2, 20);
  animation: blink 0.7s step-end infinite;
}

@keyframes blink {
  50% {
    background-color: transparent;
  }
}

</style>
