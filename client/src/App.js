import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Alerts from './components/layouts/Alerts/Alerts';
import Navbar from './components/layouts/Navbar';
import About from './components/pages/About';
import Home from './components/pages/Home';
import PrivetRoute from './components/Routing/PrivetRoute';
import { setAuthToken } from './utils/setAuthToken';
if (localStorage.token) {
  setAuthToken(localStorage.token);
}
const App = () => {
  return (
    <Router>
      <>
        <Navbar />
        <div className='container'>
          <Alerts />
          <Switch>
            <PrivetRoute exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/login' component={Login} />
          </Switch>
        </div>
      </>
    </Router>
  );
};

export default App;
