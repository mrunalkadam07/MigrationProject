import { Home } from "./components/Home";
import { Login } from "./components/Login/Login";
import MenuPage from "./components/MenuPage/MenuPage";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/menu',
    element: <MenuPage />
  }
];

export default AppRoutes;
