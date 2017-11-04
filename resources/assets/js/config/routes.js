import Home from '../app/Home.vue';
import Dashboard from '../app/Dashboard.vue';
import NotFound from '../templates/NotFound.vue';

export default [
  {
    path: '/',
    component: Home,
    children: [
      {
        path: 'dashboard',
        component: Dashboard
      },
      {
        path: '*',
        component: Dashboard
      },
    ]
  },
  {
    path: '*',
    component: NotFound
  }
];
