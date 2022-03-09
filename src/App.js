import React from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Lists from "./Components/Lists";
import TopCalender from "./Components/TopCalender";
import "./App.css";
import routes from "./router";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./Home";
import AddTask from "./Components/AddTask";

const App = () => {
  return (
    <React.Suspense fallback={null}>
    <Router>
      <Switch>
        {routes.map((route, idx) => {
          return route.component ? (
            <Route
              key={idx}
              path={route.path}
              exact={route.exact}
              render={(props) => (
                <>
                <Header/>
              <route.component {...props} />
              <Footer />
                </>
              )}
            />
          ) : null;
        })}
        <Redirect from="/" to="/" />
      </Switch>
    </Router>
  </React.Suspense>
  );
};

export default App;
