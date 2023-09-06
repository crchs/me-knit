import HomePage from '@/pages/home/HomePage.vue';
import AboutPage from '@/pages/about/AboutPage.vue';

const routes = [
  { path: '/home', component: HomePage, props: true },
  { path: '/about', component: AboutPage },
]

export { routes }