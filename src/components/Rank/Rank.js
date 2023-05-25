import React from 'react';

const Rank = ({ name, entries }) => {
    return (
        <div>
            <div className='white f3'>
                <h3>{`${ name }, your current entry count...`}</h3>                
            </div>
            <div className='white f3'> {` number of entries: , ${ entries }`} 
            </div>
        </div>
    );
}

export default Rank;