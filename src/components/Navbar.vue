<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/skills">Skills</router-link>
    <router-link to="/projects">Projects</router-link>
    <router-link to="/contact">Contact</router-link>
  </nav>
</template>

<style scoped>
nav {
  background: #000; /* Black background */
  padding: 15px;
  text-align: center;
  position: fixed; /* Make it stick */
  top: 0; /* Stick to the top */
  left: 0;
  width: 100%;
  z-index: 1000; /* Ensure it stays above other elements */
}

nav a {
  color: #fff; /* White text */
  margin: 0 15px;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease;
}

nav a:hover {
  color: #1e90ff; /* Blue hover effect */
  text-decoration: underline;
}

/* Add padding to the body to prevent content from being hidden under the fixed navbar */
body {
  padding-top: 60px; /* Adjust based on nav height */
}
</style>
