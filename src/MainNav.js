import Home from "./components/Home";
const MainNavRoutes = [
  { path: "/,", exact: true, component: Home },
  { path: "/maintenince,", exact: true, component: Maint },
  { path: "/upgrades,", exact: true, component: Upgrades },
  { path: "/documentation", exact: true, component: Documentation },
  { path: "/forum", exact: true, component: forum },
  { path: "/auth", exact: true, compoennt: Auth },
  { path: "/profile", exact: true, component: profile },
];

export default MainNavRoutes;
