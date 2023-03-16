import React from 'react';

const Navigation = ({ onRouteChange, isSignedIn }) => {
  if (isSignedIn) {
    return (
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
          <p onClick={() => onRouteChange('home')} className='f3 link dim black underline pa3 pointer no-underline'>Sign Out</p>
        </nav>
    );
  } else {
    return (
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
          <p onClick={() => onRouteChange('home')} className='f3 link dim black underline pa3 pointer no-underline'>Sign In</p>
          <p onClick={() => onRouteChange('home')} className='f3 link dim black underline pa3 pointer no-underline'>Register</p>
        </nav>
    );
  }

}

export default Navigation;