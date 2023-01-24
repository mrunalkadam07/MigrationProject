import { Navbar } from "./components/Login/Navbar";
import { Home } from "./components/Home";
import AssessmentList from "./components/Login/Assessmentlist";
import { DeathRegistrationForm } from "./components/Login/DeathRegistration";
import Dreport from "./components/Login/Dreport";
import { Login } from "./components/Login/Login";
import { PropertyTaxPaidForm } from "./components/Login/PropertyTaxPaid";
import MenuPage from "./components/MenuPage/MenuPage";
import { DeathRegistration, PropertyTaxPaid } from "./Configuration/Configuration";
import MarriageRegistrationForm from "./components/Login/Marriage.registration.form";

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
  },
  {
    path : '/assessmentlist',
    element : <AssessmentList />
  },
  {
    path : '/Navbar',
    element : <Navbar />
  },
  
];

export default AppRoutes;
