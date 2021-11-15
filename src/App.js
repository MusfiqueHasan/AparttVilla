import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
// import './App.css';
import AuthProvider from "./context/AuthProvider";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import ManageProperties from "./Pages/Dashboard/ManageProperties/ManageProperties";
import Home from './Pages/Home/Home/Home';
import LoginMain from "./Pages/Login/LoginMain/LoginMain";
import Register from "./Pages/Login/Register/Register";
import Error from "./Pages/PageNotFound/Error";
import PrivateRoute from "./Pages/PrivateRoute/PrivateRoute";
import PropertiesMain from "./Pages/Properties/PropertiesMain";
import PropertyDetails from "./Pages/Properties/PropertyDetails";

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
            <Route path="/login">
              <LoginMain />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <PrivateRoute path="/properties/:id">
              <PropertyDetails />
            </PrivateRoute>
            <PrivateRoute path="/division/:id">
              <PropertiesMain />
            </PrivateRoute>
            <Route path="/properties">
              <PropertiesMain />
            </Route>
            <Route path="*">
              <Error />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
