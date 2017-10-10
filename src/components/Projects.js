import React, { Component } from 'react';

import projects from '../data/projects.js';

class Projects extends Component{
  render(){

    let projectBox = projects.map((item, index) => {
      return (
        <div className='project-box twelve columns row' key={index}>
          <div className='project-img-container six columns'>
            <a href={item.url}> <img src={item.img} className='project-img' alt='project'/> </a>
          </div>


          <div className='five columns offset-by-one'>
            <h1 className='project-title twelve columns'>{item.title}</h1>
          </div>
          <div className='five columns offset-by-one'>
            <p className='project-description'>{item.description}</p>
            <p className='project-description-codelink'>Click the image to see the project live, or click here to see the code on <a href={item.githubUrl}>Github!</a></p>
          </div>
        </div>
      )
    });

    return (
      <div className='project-area-bg'>
        <h1 className='projects-header' id='projects-area-main-header'>Projects</h1>
        {projectBox}
      </div>
    )
  }
}

export default Projects;
