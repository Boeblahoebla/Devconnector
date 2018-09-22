//////////////
// Imports //
////////////

// React dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

// Components
import App from './components/App';

// Styles
import './styles/index.css';

///////////
// Main //
/////////

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
