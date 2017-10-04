import React, { Component } from 'react';

import skills from '../data/skills.js';
import js from '../images/js_logo.png';

class Main extends Component{
  constructor(props){
    super(props);

    this.state = {

    }
  }

  render(){
    let skillBox = skills.map((item, index) => {
      return (
        <div className='skill-box three columns offset-by-one' key={item.id}>
          {/* <img src={require(self.image)} className='skill-image'/> */}

          <h1 className='skill-title'>{item.title}</h1>
        </div>
      )
    })

    return(
      <div className='row'>
        <header className='main-header'>
          <h1 className='main-header-text'>Bradley Carson</h1>
          <h2 className='main-header-secondary-text'>Front End Developer</h2>
        </header>
        <div className='skill-area-bg'>
          {skillBox}
        </div>
      </div>

    )
  }
}


export default Main;
