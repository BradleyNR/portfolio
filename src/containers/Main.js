import React, { Component } from 'react';
import $ from 'jquery';

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

    // jQuery smooth scroll for internal links beginning with #
    $(document).ready(function(){
    	$('a[href^="#"]').on('click',function (e) {
    	    e.preventDefault();

    	    var target = this.hash;
    	    var $target = $(target);

    	    $('html, body').stop().animate({
    	        'scrollTop': $target.offset().top
    	    }, 900, 'swing', function () {
    	        window.location.hash = target;
    	    });
    	});
    });

    return(
      <div className='row'>
        <header className='main-header' id='top'>
          <div className='row internal-link-row'>
            <a className='button internal-link' href='#skills-area-main-header'>Skills</a>
            <a className='button internal-link' href='#projects-area-main-header'>Projects</a>
          </div>

          <h1 className='main-header-text'>Bradley Carson</h1>
          <h2 className='main-header-secondary-text'>Front End Developer</h2>
        </header>

        <Skills />

        <Projects />

        <BottomNav />
      </div>

    )
  }
}


export default Main;
