import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import C from "./constants/C";
import {Settings, SignIn, Main, Register} from "./containers";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*<Router>*/}
      {/*<App>*/}
      {/*  <Switch>*/}
      {/*    <Route exact path={'/'} component={Main}>*/}
      {/*      /!*<Route exact path={'settings'} component={Settings} />*!/*/}
      {/*    </Route>*/}
      {/*    /!*<Route exact path={C.routes.SETTINGS} component={Settings} />*!/*/}
      {/*    <Route exact path={C.routes.SIGN_IN} component={SignIn} />*/}
      {/*    <Route exact path={C.routes.REGISTER} component={Register} />*/}
      {/*    <Route path= {'*'} component={SignIn} />*/}
      {/*  </Switch>*/}
      {/*</App>*/}
      <App />
    {/*</Router>*/}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
