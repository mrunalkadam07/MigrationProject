import React, { Component } from 'react';

export class ImageBackground extends Component {
  static displayName = ImageBackground.name;
  myStyle={
    backgroundImage: 

    "url('0001.jpg')",
    height:'100vh',
    marginTop:'-70px',
    fontSize:'50px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
};
constructor (props) {
    super(props);

    this.state = {
      collapsed: true
    };
  }

//   toggleNavbar () {
//     this.setState({
//       collapsed: !this.state.collapsed
//     });
//   }

  render() {
    return (
      <div>
      <div style={this.myStyle}>
      </div>
      </div>
    );
  }
}
