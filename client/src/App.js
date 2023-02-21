import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import HomePage from './Components/HomePage'
import About from './Components/About'
import Projects from './Components/Projects'
import NotFound from './Components/NotFound'

function App() {

  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path='/' exact><HomePage/></Route>
        <Route path='/about' component={About} />
        <Route path='/projects' component={Projects} />
        <Route path='/*' component={NotFound} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
