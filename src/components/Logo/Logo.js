import React from 'react';
import ReactDOM from 'react-dom';
import Tilt from 'react-parallax-tilt';
import './Logo.css';

const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt className='Tilt br2 shadow-2' options={{ max: 25 }} style={{ height: '150px', width: '150px'}}>
                <h1> 👀</h1>
            </Tilt>
        </div>
    );
}

export default Logo;
