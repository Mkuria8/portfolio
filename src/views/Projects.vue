<template>
  <!-- Portfolio Section -->
  <section id="projects" class="projects py-5">
    <div class="container">
      <h2 class="text-center mb-4 text-white">My Projects</h2>
      <div class="row">
        <div class="col-md-4 mb-4" v-for="(project, index) in projects" :key="index">
          <div class="card project-card shadow-sm">
            <img :src="project.image" class="card-img-top" :alt="project.title" />
            <div class="card-body">
              <h5 class="card-title">{{ project.title }}</h5>
              <p class="card-text">{{ project.description }}</p>
              
              <!-- External Link Button -->
              <a :href="project.link" target="_blank" class="btn btn-blue mt-2">
                Visit Project
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Modals for Projects -->
      <div v-for="(project, index) in projects" :key="'modal' + index">
        <div class="modal fade" :id="'projectModal' + index" tabindex="-1" aria-hidden="true">
          <div class="modal-dialog modal-lg">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">{{ project.title }}</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
              </div>
              <div class="modal-body">
                <img :src="project.image" class="img-fluid mb-3" :alt="project.title" />
                <p>{{ project.description }}</p>
                <a :href="project.link" target="_blank" class="btn btn-red">Visit Project</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Projects",
  data() {
    return {
      projects: [
        {
          title: "Vision to Reality  Events Website",
          description: "Business Website for Vision to Reality Events",
          image: "/images/visiontoreality.PNG",
          link: "https://visiontorealityevents.co.ke/",
        },
        {
          title: "CodeCure Hub Website",
          description: "A Website for Codecure Hub web development Company.",
          image: "/images/codecurehub.PNG",
          link: "https://codecurehub.com/",
        },
        {
          title: "Manyara Club Website",
          description: "A WordPress-based tour and travel booking website.",
          image: "/images/manyara club.PNG",
          link: "https://manyaratravel.com/",
        },
        {
          title: "Hospital Management System In Django",
          description: "A Django-based Hospital management System for Hospitals.",
          image: "/images/hospital.PNG",
          link: "https://github.com/Mkuria8/Hospital-Management-System-In-Django",
        },
        {
          title: "Urbanstore E-commerce project in Laravel",
          description: "A larave-based e-commerce web application",
          image: "/images/urbanstore.PNG",
          link: "https://urbanstore.onrender.com/",
        },
      ],
    };
  },
};
</script>

<style scoped>
/* Background */
#projects {
  background-color: #000; /* Black background */
}

/* Card Styling */
.project-card {
  background-color: #fff; /* White card background */
  color: #000; /* Black text */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: none; /* Remove default card border */
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2); /* Hover effect */
}

/* Custom Blue Button */
.btn-blue {
  background-color: #0004ff; /* Bootstrap Primary Blue */
  color: #fff; /* White text */
  border: none;
  transition: background-color 0.3s ease;
  display: block;
  text-align: center;
  padding: 10px;
  margin-top: 10px;
}

.btn-blue:hover {
  background-color: #071c7a; /* Darker Blue on hover */
}
</style>
