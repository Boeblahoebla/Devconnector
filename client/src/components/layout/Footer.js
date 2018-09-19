//////////////
// Imports //
////////////

import React, {Component} from 'react';

////////////////
// Component //
//////////////

class MyComponent extends Component {
    render() {
        return (
            <footer className="bg-dark text-white mt-5 p-4 text-center">
                Copyright &copy; {new Date().getFullYear()} Dzengiz Tafa
            </footer>
        );
    }
}

//////////////
// Exports //
////////////

export default MyComponent;
