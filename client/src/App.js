import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import HomePage from './Components/HomePage'
import About from './Components/About'
import Skills from './Components/SkillsPage'
import Projects from './Components/Projects'
// import Resume from './Components/Resume'
import NotFound from './Components/NotFound'

function App() {

  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path='/' exact><HomePage/></Route>
        <Route path='/about' component={About} />
        <Route path='/skills' component={Skills} />
        <Route path='/projects' component={Projects} />
        {/* <Route path='/resume' component={process.env.PUBLIC_URL + '/Resume'} /> */}
        <Route path='/*' component={NotFound} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
