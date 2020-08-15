import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "semantic-ui-react";

import NavigationMenu from "./components/NavigationMenu";
import HomePage from "./components/HomePage";
import LoginForm from "./components/LoginForm";

import Footer from "./components/Footer";
import Account from "./components/Account";
import Blog from "./components/Blog";
import Calendar from "./components/Calendar";
import Cart from "./components/Cart";
import CheckoutFrom from "./components/CheckoutFrom";
import Orders from "./components/Orders";
import RegisterForm from "./components/RegisterForm";
import RestoreForm from "./components/RestoreForm";
import Shop from "./components/Shop";

const App = () => {
  const isLogged = true;
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
            path={"/account"}
            exact
            render={() => {
              return isLogged ? <Account /> : <LoginForm />;
            }}
          />
          <Route
            path={"/blog"}
            exact
            render={() => {
              return isLogged ? <Blog /> : <LoginForm />;
            }}
          />
          <Route
            path={"/calendar"}
            exact
            render={() => {
              return isLogged ? <Calendar /> : <LoginForm />;
            }}
          />
          <Route
            path={"/cart"}
            exact
            render={() => {
              return isLogged ? <Cart /> : <LoginForm />;
            }}
          />
          <Route
            path={"/checkout"}
            exact
            render={() => {
              return isLogged ? <CheckoutFrom /> : <LoginForm />;
            }}
          />
          <Route
            path={"/orders"}
            exact
            render={() => {
              return isLogged ? <Orders /> : <LoginForm />;
            }}
          />
          <Route
            path={"/register"}
            exact
            render={() => {
              return isLogged ? <RegisterForm /> : <LoginForm />;
            }}
          />
          <Route
            path={"/restore"}
            exact
            render={() => {
              return isLogged ? <RestoreForm /> : <LoginForm />;
            }}
          />
          <Route
            path={"/shop"}
            exact
            render={() => {
              return isLogged ? <Shop /> : <LoginForm />;
            }}
          />
        </Switch>
      </Router>
      <Footer />
    </Container>
  );
};

export default App;
