export default [
  {
    name: 'Courses',
    hasSubmenu: true,
    linkTo: '/courses',
    submenu: [
      {
        name: 'Submenu 1',
        hasSubmenu: false,
        linkTo: '/courses/submenu-1',
      },
      {
        name: 'Submenu 2',
        hasSubmenu: false,
        linkTo: '/courses/submenu-2',
      },
    ],
  },
  {
    name: 'Subjects',
    hasSubmenu: true,
    linkTo: '/subjects',
    submenu: [
      {
        name: 'Submenu 1',
        hasSubmenu: false,
        linkTo: '/subjects/submenu-1',
      },
      {
        name: 'Submenu 2',
        hasSubmenu: false,
        linkTo: '/subjects/submenu-2',
      },
    ],
  },
  {
    name: 'For Kids',
    hasSubmenu: false,
    linkTo: '/for-kids',
  },
  {
    name: 'Team',
    hasSubmenu: false,
    linkTo: '/team',
  },
  {
    name: 'Sign in',
    hasSubmenu: false,
    linkTo: '/sign-in',
  },
  {
    name: 'Start Learning',
    hasSubmenu: false,
    linkTo: '/start-learning',
  },
];
