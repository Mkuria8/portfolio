<template>
  <Navbar />
  <router-view />
  <div id="app">
    <!-- Skills component added here -->
    <Skills />
    <Projects />
    <Services />
    <Testimonials />
    <Contact /> 
    <Footer />
  </div>
</template>

<script setup>
// Import the necessary components
import Navbar from './components/Navbar.vue';
import Skills from './views/Skills.vue';
import Projects from './views/Projects.vue';
import Services from './views/Services.vue';
import Testimonials from './views/Testimonials.vue';
import Contact from './views/Contact.vue';
import Footer from './components/Footer.vue';
</script>


