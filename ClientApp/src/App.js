import Navbar from './components/Navbar';
import Navigation from './components/NavBarBootstrap'; 
//import './custom.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Translate from './components/Translate';
import Courses from './components/Courses';
import Information from './components/Information';
import Home from './components/Home';
import './bootstrap.css';

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