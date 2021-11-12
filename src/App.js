import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
// import './App.css';
import AuthProvider from "./context/AuthProvider";
import Home from './Pages/Home/Home/Home';
import PrivateRoute from "./Pages/PrivateRoute/PrivateRoute";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
      
    </div>
  );
}

export default App;
