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
import BirthRegistrationForm from "./components/Login/Birth.registration.form";
import AssesmentReport from "./components/Login/AssesmentReport";
import BirthRegistrationReport from "./components/Login/BirthRegistrationReport";
import TaxPaidReport from "./components/Login/TaxPaidReport";
import DeadBirthRegistrationReport from "./components/Login/DeadBirthRegistrationReport";
import MarriageReport from "./components/Login/MarriageReport";
import { DeadBirthRegistration } from "./components/Login/DeadBirthRegistration";

const AppRoutes = [
  {
    path : '/propertyTaxPaid',
    element : <PropertyTaxPaidForm />
  },
  {
    path : '/deathRegistration',
    element : <DeathRegistrationForm />
  },
  {
    path : '/marriageRegistration',
    element : <MarriageRegistrationForm />
  },
  {
    path : '/deadbirthRegistration',
    element : <DeadBirthRegistration />
  },
  {
    path : '/breport',
    element : <BirthRegistrationReport />
  },
  {
    path : '/deadbreport',
    element : <DeadBirthRegistrationReport />
  },
  {
    path : '/assessmentReport',
    element : <AssesmentReport />
  },
  {
    path : './taxPaidReport',
    element : <TaxPaidReport />
  },
  {
    path : '/dreport',
    element : <Dreport />
  },
  {
    path : '/taxPaidReport',
    element : <TaxPaidReport />
  },
  {
    path : '/assessmentlist',
    element : <AssessmentList />
  },
  {
    path : '/Navbar',
    element : <Navbar />
  },
  {
    path : '/birthRegistration',
    element : <BirthRegistrationForm />
  },
  {
    path : '/marriageReport',
    element : <MarriageReport />
  }
  
  
];

export default AppRoutes;
