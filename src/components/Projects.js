import React, { Component } from 'react';

import projects from '../data/projects.js';

class Projects extends Component{
  render(){

    let projectBox = projects.map((item, index) => {
      return (
        <div className='project-box five columns offset-by-one' key={index}>
          <div className='project-img-container'>
            <a href={item.url}> <img src={item.img} className='project-img' alt='project'/> </a>
          </div>


          <div className='row'>
            <h1 className='project-title twelve columns'>{item.title}</h1>
          </div>
          <div className='row'>
            <p className='skill-description'>{item.description}</p>
          </div>
        </div>
      )
    });

    return (
      <div className='project-area-bg'>
        <h1 className='projects-header'>Projects</h1>
        {projectBox}
      </div>
    )
  }
}

export default Projects;
