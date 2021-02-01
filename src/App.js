
import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Hello from './components/Hello';
import Home from './components/Home';
import Update from './components/Update';
function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Route path="/" component={Hello} exact></Route>
          <Route path="/home" component={Home}></Route>
          <Route path="/update" component={Update} exact/>
        </div>
      </Router>
    </div>
  );
}

export default App;
