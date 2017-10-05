import React, { Component } from 'react';

import skills from '../data/skills.js';



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
          <div className='img-container'>
            <img src={item.img} className='skill-image'/>
          </div>


          <div className='row'>
            <h1 className='skill-title twelve columns'>{item.title}</h1>
          </div>
          <div className='row'>
            <p className='skill-description'>{item.description}</p>
          </div>
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
