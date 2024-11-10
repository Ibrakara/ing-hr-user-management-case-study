import {Router} from '@vaadin/router';
export const views = [
  {
    path: '/create',
    component: 'listing-users',
    action: async () => {
      await import('../views/listing-users');
    },
  },
  {
    path: '/',
    component: 'create-and-edit-user',
    action: async () => {
      await import('../views/create-user');
    },
  },
  {
    path: '/edit/:userId',
    component: 'create-and-edit-user',
    action: async () => {
      await import('../views/create-user');
    },
  },
  {path: '(.*)', redirect: '/'},
];

const outlet = document.getElementById('outlet'); // Element where views will render
const router = new Router(outlet);

router.setRoutes(views);

export default router;
