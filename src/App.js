// src/client/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Signup from './components/Signup';
import Product from './components/Product';
import Cart from './components/Cart';
import Order from './components/Order';
import Delivery from './components/Delivery';
import Dashboard from './components/Dashboard';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/product" component={Product} />
          <Route path="/cart" component={Cart} />
          <Route path="/order" component={Order} />
          <Route path="/delivery" component={Delivery} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;

