import React, { Component } from 'react';

import Skills from '../components/Skills';
import Projects from '../components/Projects';
import BottomNav from '../components/Bottomnav';

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
          {/* <div className='row'>
            <a href='https://www.google.com'>
              <img className='github-logo' src='http://www.freeiconspng.com/uploads/github-logo-icon-22.png' />
            </a>
            <a href='https://www.google.com'>
              <img className='github-logo' src='https://media.glassdoor.com/sqll/34865/linkedin-squarelogo-1462308283451.png' />
            </a>
          </div> */}
        </header>

        <Skills />

        <Projects />

        <BottomNav />
      </div>

    )
  }
}


export default Main;
