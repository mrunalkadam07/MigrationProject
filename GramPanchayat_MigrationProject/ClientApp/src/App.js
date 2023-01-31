import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import { Home } from './components/Home';
import { Layout } from './components/Layout';
import { Login } from './components/Login/Login';

// import {
//   BrowserRouter as Router,
// } from "react-router-dom";
import PrivateRoute from './components/PrivateRoute';
import AssessmentList from './components/Login/Assessmentlist';
import Navbar from './components/Login/Navbar';
import { PropertyTaxPaidForm } from './components/Login/PropertyTaxPaid';
import { DeathRegistrationForm } from './components/Login/DeathRegistration';
import MarriageRegistrationForm from './components/Login/Marriage.registration.form';
import DeadBirthRegistration from './components/Login/DeadBirthRegistration';
import DeadBirthRegistrationReport from './components/Login/DeadBirthRegistrationReport';
import AssesmentReport from './components/Login/AssesmentReport';
import TaxPaidReport from './components/Login/TaxPaidReport';
import BirthRegistrationForm from './components/Login/Birth.registration.form';
import MarriageReport from './components/Login/MarriageReport';
import BirthRegistrationReport from './components/Login/BirthRegistrationReport';
import Dreport from './components/Login/Dreport';

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <Layout>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path = '/navbar' element={<Navbar/>}/>
          <Route path='/assessmentlist' element={<PrivateRoute><AssessmentList/></PrivateRoute>} />

          
           {/* {AppRoutes.map((route, index) => {
            const { element, ...rest } = route;
            return <Route key={index} {...rest} element={element}/>;
          })}  */}
          <Route path='/propertyTaxPaid' element={<PrivateRoute><PropertyTaxPaidForm/></PrivateRoute>} />
          <Route path='/assessmentlist' element={<PrivateRoute><AssessmentList/></PrivateRoute>} />
          <Route path='/deathRegistration' element={<PrivateRoute><DeathRegistrationForm/></PrivateRoute>} />
          <Route path='/marriageRegistration' element={<PrivateRoute><MarriageRegistrationForm/></PrivateRoute>} />
          <Route path='/deadbirthRegistration' element={<PrivateRoute><DeadBirthRegistration/></PrivateRoute>} />
          <Route path='/breport' element={<PrivateRoute><BirthRegistrationReport/></PrivateRoute>} />
          <Route path='/deadbreport' element={<PrivateRoute><DeadBirthRegistrationReport/></PrivateRoute>} />
          <Route path='/assessmentReport' element={<PrivateRoute><AssesmentReport/></PrivateRoute>} />
          <Route path='/taxPaidReport' element={<PrivateRoute><TaxPaidReport/></PrivateRoute>} />
          <Route path='/deathRegistration' element={<PrivateRoute><DeathRegistrationForm/></PrivateRoute>} />
          <Route path='/Navbar' element={<PrivateRoute><Navbar/></PrivateRoute>}/>
          <Route path='/marriageReport' element={<PrivateRoute><MarriageReport/></PrivateRoute>} />
          <Route path='/birthRegistration' element={<PrivateRoute><BirthRegistrationForm/></PrivateRoute>} />
          <Route path='/dreport' element={<PrivateRoute><Dreport/></PrivateRoute>} />
          </Routes> 
      </Layout>
    );
  }
}
