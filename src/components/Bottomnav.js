import React, { Component } from 'react';

class BottomNav extends Component{

  render(){
    return (
      <div className='bottom-nav-area-bg'>
        <div className='row'>
          <p className='four columns bottom-text'>© 2017, Bradley Carson</p>
          <a href='#top' className='button internal-link four columns'>Back to Top</a>
          <div className='four columns'>
            <div className='row bottom-image-row'>
              <a href='https://github.com/BradleyNR' className='bottom-link-image'>
                <img className='github-logo' src='http://www.freeiconspng.com/uploads/github-logo-icon-22.png' />
              </a>
              <a href='https://www.linkedin.com/in/bradley-carson-a209a813a/' className='bottom-link-image'>
                <img className='github-logo' src='https://media.glassdoor.com/sqll/34865/linkedin-squarelogo-1462308283451.png' />
              </a>
              <p className='bottom-email'>bmcarson1671@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
};

export default BottomNav;
