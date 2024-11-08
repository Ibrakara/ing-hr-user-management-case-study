export const views = [
  {
    path: '/',
    component: 'listing-users',
    action: async () => {
      await import('../views/listing-users');
    },
  },
  {
    path: '/create',
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
