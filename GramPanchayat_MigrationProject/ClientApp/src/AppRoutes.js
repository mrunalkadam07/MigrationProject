import { Home } from "./components/Home";
import { DeathRegistrationForm } from "./components/Login/DeathRegistration";
import Dreport from "./components/Login/Dreport";
import { Login } from "./components/Login/Login";
import { PropertyTaxPaidForm } from "./components/Login/PropertyTaxPaid";
import MenuPage from "./components/MenuPage/MenuPage";
import { DeathRegistration, PropertyTaxPaid } from "./Configuration/Configuration";

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
  },
  {
    path : '/propertyTaxPaid',
    element : <PropertyTaxPaidForm />
  },
  {
    path : '/deathRegistration',
    element : <DeathRegistrationForm />
  },
  {
    path : '/dreport',
    element : <Dreport />
  }
];

export default AppRoutes;
