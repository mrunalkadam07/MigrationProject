import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import { Home } from './components/Home';
import { Layout } from './components/Layout';
import { Login } from './components/Login/Login';

import {
  BrowserRouter as Router,
} from "react-router-dom";
import PrivateRoute from './components/PrivateRoute';
import AssessmentList from './components/Login/Assessmentlist';

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <Layout>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
            {AppRoutes.map((route, index) => {
            const { element, ...rest } = route;
            return <Route key={index} {...rest} element={element}/>;
          })} 
           {/* <Route path='/assessmentlist' element={<PrivateRoute><AssessmentList/></PrivateRoute>} /> */}

          </Routes>
      </Layout>
    );
  }
}
