import React, { Component }  from 'react';
import Navigation from './components/parts/NavBar'; 
//import './custom.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Translate from './components/screens/Translate';
import Courses from './components/screens/Courses';
import Information from './components/screens/Information';
import Home from './components/screens/Home';
import 'bootstrap/dist/css/bootstrap.css';

function App  (){
    return (
      <Router>       
        <Navigation/>      
        <Switch>     
          <Route exact path='/' component={Home}/>
          <Route exact path='/translate' component={Translate}/>
          <Route exact path='/courses' component={Courses}/>
          <Route exact path='/information' component={Information}/>
        </Switch>
      </Router>
    );
  }

export default  App;