import Navbar from './components/Navbar';
import Navigation from './components/NavBarBootstrap'; 
//import './custom.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Translate from './components/Translate';
import Courses from './components/Courses';
import Information from './components/Information';
import Home from './components/Home';
import './bootstrap.css';
import CourseLevel2 from './components/CourseLevel2';
import Login from './components/Login';
import createAccount from './components/createAccount';
import profilePage from './profilePage';

function App  (){
    return (

      <Router>
        <Navigation/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/translate' component={Translate}/>
          <Route exact path='/courses' component={Courses}/>
                <Route exact path='/information' component={Information} />
                <Route exact path='/CourseLevel2' component={CourseLevel2} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/createAccount' component={createAccount} />
                <Route path='/profile' component={profilePage} />
        </Switch>
      </Router>
    );
  }

export default  App;