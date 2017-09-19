import Vue from 'vue';
import Router from 'vue-router';
import Main from '@/components/main';
import Home from '@/components/home';
import Login from '@/components/login';
import Records from '@/components/records';
import User from '@/components/user';
import Create from '@/components/create';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Main,
      children: [
        {
          path: '/',
          name: 'Home',
          component: Home,
        },
        {
          path: '/list',
          name: 'List',
          component: Records,
        },
        {
          path: '/user',
          name: 'User',
          component: User,
        },
        {
          path: '/create',
          name: 'Create',
          component: Create,
        },
      ],
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
  ],
});

export default router;
