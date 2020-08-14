import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import NavigationMenu from "./components/NavigationMenu";
import HomePage from "./components/HomePage";
import LoginForm from "./components/LoginForm";
import { Container } from "semantic-ui-react";

const App = () => {
  return (
    <Container>
      <Router>
        <NavigationMenu />
        <Switch>
          <Route
            path={"/"}
            exact
            render={() => {
              return <HomePage />;
            }}
          />
          <Route
            path={"/login"}
            exact
            render={() => {
              return <LoginForm />;
            }}
          />
        </Switch>
      </Router>
    </Container>
  );
};

export default App;
