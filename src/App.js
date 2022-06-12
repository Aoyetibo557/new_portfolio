import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './component/Header';
import Resume from './component/Resume';
import Project from './component/Project';
import Photography from './component/Photography';
import AltHome from './component/AltHome';

function App() {
  return (
    <div>
      <Router>
        <Switch>

          <Route exact path="/" component>
            <div className="app">
              <Header />
              <AltHome />
            </div>
          </Route>

          <Route exact path="/resume" component>
            <div className="app">
              <Header />
              <Resume />
            </div>
          </Route>

          <Route exact path="/projects" component>
            <div className="app">
              <Header />
              <Project />
            </div>
          </Route>

          <Route exact path="/potraits" component>
            <div className="app">
              <Header />
              <Photography />
            </div>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
