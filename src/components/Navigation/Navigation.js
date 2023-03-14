import React from 'react';

const Navigation = ({ onRouteChange}) => {
  return (
    <div>
      <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
        <p onClick={() => onRouteChange('home')} className='f3 link dim black underline pa3 pointer no-underline'>Sign Out
        </p>
      </nav>
      <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
        <p onClick={() => onRouteChange('home')} className='f3 link dim black underline pa3 pointer no-underline'>Sign Out
        </p>
      </nav>
      <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
        <p onClick={() => onRouteChange('home')} className='f3 link dim black underline pa3 pointer no-underline'>Sign Out
        </p>
      </nav>
    </div>
  );
}

export default Navigation;