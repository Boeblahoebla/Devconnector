//////////////
// Imports //
////////////

// Dependencies
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Landing from './components/layout/Landing';

import Register from './components/auth/Register';
import Login from './components/auth/Login';

// Redux
import { Provider } from 'react-redux';
import store from './store';

// Styling
import './App.css';

/////////////////
// Components //
///////////////

class App extends Component {
    render() {
        return (
            // everything inside the Provider tag has access to the
            // Application state- storage of Redux
            <Provider store={ store } >
                <Router>
                    <div className="App">
                        <Navbar />
                        <Route exact path="/" component={ Landing } />

                        <div className="container">
                            <Route exact path="/register" component={ Register } />
                            <Route exact path="/login" component={ Login } />
                        </div>

                        <Footer />
                    </div>
                </Router>
            </Provider>
        );
    }
}

//////////////
// Exports //
////////////

export default App;
