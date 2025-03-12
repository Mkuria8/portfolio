<template>
  <footer class="footer py-5">
    <!-- Faded Top Separator -->
    <div class="separator"></div>

    <div class="container">
      <div class="row">
        <!-- Contact Information -->
        <div class="col-md-6 mb-4 text-center text-md-start">
          <h5 class="footer-heading">Reach out to Me</h5>
          <ul class="list-unstyled">
            <li>
              <i class="bi bi-envelope me-2 text-primary"></i>
              <a href="mailto:Manasseskush@gmail.com" class="footer-link">Manasseskush@gmail.com</a>
            </li>
          </ul>
        </div>

        <!-- Social Media Links -->
        <div class="col-md-6 mb-4 text-center text-md-end">
          <h5 class="footer-heading">Follow Me</h5>
          <div class="d-flex justify-content-center justify-content-md-end gap-3">
            <a href="https://x.com/home?lang=en" class="footer-icon" target="_blank">
              <i class="bi bi-facebook"></i>
            </a>
            <a href="https://x.com/62MKuria?t=cuzCuk3vq_E5hwoNbSI7Qw&s=09" class="footer-icon" target="_blank">
              <i class="bi bi-twitter">X</i>
            </a>
            <a href="https://www.linkedin.com/in/manasses-kuria-9b43211bb?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" class="footer-icon" target="_blank">
              <i class="bi bi-linkedin">Linkedin</i>
            </a>
            <a href="https://github.com/Mkuria8" class="footer-icon" target="_blank">Github
              <i class="bi bi-github"></i>
            </a>
          </div>
        </div>
      </div>

      <!-- Faded Bottom Separator -->
      <div class="separator"></div>

      <!-- Copyright Section -->
      <div class="text-center">
        <p class="footer-copy">&copy; 2025 Manasses Kuria. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
/* Footer Styles */
.footer {
  background-color: #000000; /* Black background */
  color: #fff; /*  text color*/
}

/* Faded Blue Separator */
.separator {
  height: 4px;
  width: 80%;
  margin: 0 auto 30px;
  border-radius: 2px;
  background: linear-gradient(to right, transparent, #3801ff, transparent);
}

/* Headings */
.footer-heading {
  color: #0d6efd; 
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 15px;
}

/* Links */
.footer-link {
  color: #fff;
  text-decoration: none;
}

.footer-link:hover {
  color: #0d6efd; 
  text-decoration: underline;
}

/* Social Media Icons */
.footer-icon {
  color: #fff;
  font-size: 1.5rem;
  transition: 0.3s ease;
}

.footer-icon:hover {
  color: #0d6efd; 
}

/* Copyright Text */
.footer-copy {
  font-size: 0.9rem;
  opacity: 0.8;
}
</style>
