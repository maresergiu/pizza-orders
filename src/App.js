import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import store from "./store/index";
import Home from "./views/Home.jsx";
import Orders from "./views/Orders.jsx";
import Order from "./views/Order.jsx";
import NoMatch from "./views/NoMatch.jsx";

function App() {
  return (
    <React.Fragment>
      <header id="site-header">
        <div className="holder">
          <h1 className="sub-title">Pizza App</h1>
        </div>
      </header>
      <main id="main">
        <Provider store={store}>
          <ToastContainer />
          <Router>
            <Switch>
              <Redirect exact from="/" to="/home" />
              <Route path="/home">
                <Home />
              </Route>
              <Route path="/order">
                <Order />
              </Route>
              <Route path="/orders">
                <Orders />
              </Route>
              <Route path="*">
                <NoMatch />
              </Route>
            </Switch>
          </Router>
        </Provider>
      </main>
      <footer id="site-footer">
        <div className="holder">
          <p className="text">Sergiu Mare - Front End Developer</p>
        </div>
      </footer>
    </React.Fragment>
  );
}

export default App;
