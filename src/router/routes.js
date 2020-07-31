import Home from '../pages/Home.vue'
import Contact from '../pages/Contact.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    name: 'contact',
    path: '/contact',
    component: Contact
  }
]

export default routes
