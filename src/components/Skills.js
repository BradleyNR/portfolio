import React, { Component } from 'react';

import skills from '../data/skills.js';

class Skills extends Component{

  render(){

    let skillBox = skills.map((item, index) => {
      return (
        <div className='skill-box three columns offset-by-one' key={item.id}>
          <div className='img-container'>
            <img src={item.img} className='skill-image' alt='technology'/>
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

    return (
      <div className='skill-area-bg'>
        {skillBox}
      </div>
    )
  }
};

export default Skills;
