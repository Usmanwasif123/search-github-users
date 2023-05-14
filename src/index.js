import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { GithubProvider } from './context/context';
import { Auth0Provider } from '@auth0/auth0-react';
//dev-t63peacxcuysxkkt.us.auth0.com
//N3G774wT6sto7pX3WOdDLzyyaT75z9cX
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Auth0Provider 
  domain="dev-t63peacxcuysxkkt.us.auth0.com"
  clientId="N3G774wT6sto7pX3WOdDLzyyaT75z9cX"
  authorizationParams={{
  redirect_uri: window.location.origin}}
  cacheLocation='localstorage'
>
  <GithubProvider> 
    <App /> 
  </GithubProvider> 
  </Auth0Provider>
  </React.StrictMode>,
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
