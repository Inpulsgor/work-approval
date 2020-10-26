import { lazy } from 'react';

export default [
  {
    path: '/login',
    label: 'AuthorizationPage',
    exact: false,
    component: lazy(() => import('./pages/AuthorizationPage')),
    private: false,
    restricted: true,
  },
  {
    path: '/characters',
    label: 'CharactersPage',
    exact: false,
    component: lazy(() => import('./pages/CharactersPage')),
    private: true,
    restricted: false,
  }
];