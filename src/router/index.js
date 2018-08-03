import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import AccountList from '@/components/account/AccountList';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/accounts',
      name: 'AccountList',
      component: AccountList,
    },
  ],
});
