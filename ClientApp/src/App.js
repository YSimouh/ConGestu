import Navbar from './components/Navbar';
import './custom.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Translate from './components/Translate';
import Courses from './components/Courses';
import Information from './components/Information';

function App  (){
    return (

      <Router>
        <Navbar/>
        <Switch>
          <Route exact path='/' component={Translate}/>
          <Route exact path='/courses' component={Courses}/>
          <Route exact path='/information' component={Information}/>
        </Switch>
      </Router>
    );
  }

export default  App;