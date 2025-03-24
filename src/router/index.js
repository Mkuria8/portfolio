import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Skills from '../views/Skills.vue';
import Projects from '../views/Projects.vue';
import Contact from '../views/Contact.vue';
import Services from '../views/Services.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/skills', component: Skills },
  { path: '/projects', component: Projects },
  { path: '/services', component: Services },
  { path: '/contact', component: Contact },
  { path: '/:pathMatch(.*)*', redirect: '/' }
  ];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;