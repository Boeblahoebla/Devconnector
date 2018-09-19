//////////////
// Imports //
////////////

// Dependencies
import React, { Component } from 'react';
import './App.css';

// Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Landing from './components/layout/Landing';

/////////////////
// Components //
///////////////

class App extends Component {
    render() {
        return (
            <div className="App">
                <Navbar/>
                <Landing/>
                <Footer/>
            </div>
        );
    }
}

//////////////
// Exports //
////////////

export default App;
