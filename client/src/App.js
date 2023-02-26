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
                    <Route path='/about'><About/></Route>
                    <Route path='/projects'><Projects/></Route>
                    <Route path='/*'><NotFound options={{err: 404, msg: "Not Found"}} /></Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
