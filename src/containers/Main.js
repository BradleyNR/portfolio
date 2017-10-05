import React, { Component } from 'react';

import Skills from '../components/Skills';

import projects from '../data/projects.js';



class Main extends Component{
  constructor(props){
    super(props);

    this.state = {

    }
  }

  render(){

    return(
      <div className='row'>
        <header className='main-header'>
          <h1 className='main-header-text'>Bradley Carson</h1>
          <h2 className='main-header-secondary-text'>Front End Developer</h2>
        </header>

        <Skills />

        <div className='project-area-bg'>
          <h1 className='projects-header'>Projects</h1>
        </div>
      </div>

    )
  }
}


export default Main;
