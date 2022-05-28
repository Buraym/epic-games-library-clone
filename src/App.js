import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Library from './pages/Library';
import Error404 from './pages/Error404';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Library} />
          <Route path="*" component={Error404} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
