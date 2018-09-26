//////////////
// Imports //
////////////

import React from 'react';
import spinner from './media/spinner.gif';

////////////////
// Component //
//////////////

export default () => {
    return (
        <div>
            <img
                src={spinner}
                style={{width:'120px', margin:'auto', display:'block'}}
                alt="Loading"/>
        </div>
    )
};

//////////////
// Exports //
////////////