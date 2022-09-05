import React from 'react';

// ReactDom library is now supposed to be imported from react-dom/client.
import ReactDOM from 'react-dom/client';

import App from './components/App'

// ReactDOM.Render is deprecated and is replaced by ReactDom.createRoot.
// See https://reactjs.org/docs/hello-world.html for examples.
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <App />
);