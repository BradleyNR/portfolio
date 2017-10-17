import React, { Component } from 'react';

import projects from '../data/projects.js';

class Projects extends Component{
  render(){

    let projectBox = projects.map((item, index) => {
      return (
        <div className='project-box three columns offset-by-one' key={index}>
          {/* <h1 className='project-title twelve columns'>{item.title}</h1> */}
          <div className='project-img-container twelve columns'>
            <a href={item.url}> <img src={item.img} className='project-img' alt='project'/> </a>
          </div>
          <div className='twelve columns'>
            <p className='project-description-codelink button'><a href={item.githubUrl}>View Code</a></p>
          </div>
{/*
          <div className='ten columns offset-by-one'>
            <p className='project-description'>{item.description}</p>
            <p className='project-description-codelink'>Click the image to see the project live, or click here to see the code on <a href={item.githubUrl}>Github!</a></p>
          </div> */}
        </div>
      )
    });

    return (
      <div className='project-area-bg'>
        <h1 className='projects-header' id='projects-area-main-header'>Projects</h1>
        <p className='project-header-subtext'>Click on the photo to view live, or click View Code to see the code on Github!</p>
        {projectBox}
      </div>
    )
  }
}

export default Projects;
