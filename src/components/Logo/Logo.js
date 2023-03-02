import React from 'react';
import Tilt from 'react-parallax-tilt';
import './Logo.css';


const Logo = () => {
    return (
        <div className='pa3 mt0'>
            <Tilt className='Tilt br2 shadow-2'>
                <div options={{ max : 25 }} style={{ width: '50px', height: '150px' }}>
                    <h1 className='Tilt-inner'>React Parallax Tilt 👀</h1>
                </div>
            </Tilt>
        </div>
    );
}

export default Logo;