import React, { Component } from 'react';
import { NavMenu } from './NavMenu';

export class Home extends Component {
  static displayName = Home.name;
  myStyle={
    backgroundImage: 

    "url('mm.png')",
    height:'97vh',
    width :'100%',
    marginTop:'-83px',
    marginLeft: '15px',
    backgroundRepeat: 'no-repeat',
    
};
// window.onload = () => {

//   // Clear localStorage
//   if (localStorage.getItem("Token") === 'true') {
//     localStorage.removeItem("Token");
//     // Show them the sign in form
//   }
// };
  render() {
    return (
      <div>
      <NavMenu />
      <div className="container" style={this.myStyle}>
      </div>
      </div>
    );
  }
}
