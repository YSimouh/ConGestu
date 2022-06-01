import Navigation from './components/parts/NavBarBootstrap'; 
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Translate from './components/screens/Translate';
import Courses from './components/screens/Courses';
import Information from './components/screens/Information';
import Home from './components/screens/Home';
import Levelholder from './components/parts/levelholder';
import Oefenen from './components/screens/Oefenen'
//import './design/NavBarBootstrap.css';
import './bootstrap.css';
import CourseLevel2 from './components/screens/CourseLevel2';
import Login from './components/screens/Login';
import createAccount from './components/screens/createAccount';
import profilePage from './components/screens/profilePage';
import Transcriber from './components/screens/Transcriber';


function App  (){
    return (

      <Router>
        <Navigation/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/translate' component={Translate}/>
          <Route exact path='/courses' component={Courses}/>
          <Route exact path='/information' component={Information}/>
          <Route exact path='/levelholder' component={Levelholder}/>
          <Route exact path='/oefenen' component={Oefenen}/>
          <Route exact path='/information' component={Information} />
          <Route exact path='/CourseLevel2' component={CourseLevel2} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/createAccount' component={createAccount} />
          <Route path='/profile' component={profilePage} />
          <Route path='/transcriber' component={Transcriber} />
        </Switch>
      </Router>
    );
  }

export default  App;