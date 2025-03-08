export const items = [
  {
    title: 'Dashboard',
    path: '/',
    icon: 'home',
  },
  {
    title: 'Stats',
    path: '/stats',
    icon: 'chart',
  },
  {
    title: 'Settings',
    path: '/settings',
    icon: 'settings',
  },
] as const;

export type Item = (typeof items)[number];
