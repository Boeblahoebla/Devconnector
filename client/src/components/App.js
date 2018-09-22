//////////////
// Imports //
////////////

// Dependencies
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Components
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import Landing from './layout/Landing';

import Register from './auth/Register';
import Login from './auth/Login';

// Redux
import { Provider } from 'react-redux';
import fullApplicationState from '../redux/store';

// Styling
import '../styles/App.css';

/////////////////
// Components //
///////////////

class App extends Component {
    render() {
        return (
            // everything inside the Provider tag has access to the
            // Application state- storage of Redux
            <Provider store={ fullApplicationState } >
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
