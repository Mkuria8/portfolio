<template>
  <!-- Skills Section -->
  <section id="skills" class="skills py-5">
    <div class="container">
      <!-- Top Separator -->
      <div class="separator"></div>
      <h2 class="text-center mb-4 text-blue">My Skills</h2>
      <div class="row">
        <!-- Programming Languages -->
        <div class="col-md-6 mb-4">
          <div class="card bg-black text-white border-blue">
            <div class="card-body">
              <h4 class="card-title text-blue">Programming Languages</h4>
              <ul class="list-unstyled">
                <li> JavaScript</li>
                <li> Python</li>
                <li> Php</li>
              </ul>
            </div>
          </div>
        </div>
        <!-- Web Technologies -->
        <div class="col-md-6 mb-4">
          <div class="card bg-black text-white border-blue">
            <div class="card-body">
              <h4 class="card-title text-blue">Web Technologies</h4>
              <ul class="list-unstyled">
                <li> Bootstrap</li>
                <li> Tailwindcss</li>
                <li> Vue.js</li>
                <li> React.js</li>
                <li> Django</li>
                <li> Laravel</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!-- Technical Proficiency -->
      <h4 class="text-center mb-4 text-blue">Technical Proficiency</h4>
      <div class="row">
        <div class="col-md-6 mb-3">
          <div class="card bg-black text-white border-blue">
            <div class="card-body">
              <strong class="text-blue">JavaScript</strong>
              <div class="progress">
                <div class="progress-bar bg-blue" style="width: 85%">85%</div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="col-md-6 mb-3">
          <div class="card bg-black text-white border-blue">
            <div class="card-body">
              <strong class="text-blue">Vue.js</strong>
              <div class="progress">
                <div class="progress-bar bg-blue" style="width: 90%">90%</div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="col-md-6 mb-3">
          <div class="card bg-black text-white border-blue">
            <div class="card-body">
              <strong class="text-blue">Python</strong>
              <div class="progress">
                <div class="progress-bar bg-blue" style="width: 80%">80%</div>
              </div>
            </div>
          </div>
        </div>
            
        <div class="col-md-6 mb-3">
          <div class="card bg-black text-white border-blue">
            <div class="card-body">
              <strong class="text-blue">Php</strong>
              <div class="progress">
                <div class="progress-bar bg-blue" style="width: 95%">95%</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Separator -->
      <div class="separator mt-5"></div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Skills'
}
</script>

<style scoped>
/* Global section styling */
.skills {
  font-family: 'Poppins', sans-serif;
  background-color: #000; /* Black background */
  min-height: 80vh;
  padding-top: 80px;
  color: #fff; /* White text */
}

/* White text */
.text-white {
  color: #fff;
}

/* Blue text */
.text-blue {
  color: #0d6efd; 
}

/* Progress bar styling */
.progress-bar {
  background-color: #0d6efd !important; /* Ensure blue progress bars */
  color: #fff;
}

/* Card styling */
.card {
  background-color: #000 !important; /* Black background */
  color: #fff !important; /* White text */
  border: 1px solid #0d6efd; /* Blue border */
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(13, 110, 253, 0.3); /* Subtle blue glow */
}


.bg-blue {
  background-color: #0d6efd !important;
}


.container {
  max-width: 900px;
}

/* Separator Styling */
.separator {
  width: 100%;
  height: 4px;
  background: linear-gradient(to right, transparent, #0d6efd, transparent);
  margin: 20px 0;
  border-radius: 2px;
}
</style>
