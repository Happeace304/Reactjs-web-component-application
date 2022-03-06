import React from 'react';
import ReactDOM from "react-dom";
import reactToWebComponent from "react-to-webcomponent";

import './index.css';
import App from './App';

customElements.define("react-component", reactToWebComponent(App, React, ReactDOM));

// ReactDOM.render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>,
//     document.getElementById('root')
// );

