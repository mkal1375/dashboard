export const items = [
  {
    title: 'Dashboard',
    path: '/',
    icon: 'solar:home-2-bold',
  },
  {
    title: 'Stats',
    path: '/stats',
    icon: 'solar:chart-square-bold',
  },
  {
    title: 'Settings',
    path: '/settings',
    icon: 'solar:settings-bold',
  },
] as const;

export type Item = (typeof items)[number];
