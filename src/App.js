import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "semantic-ui-react";
import { useTranslation } from "react-i18next";

import NavigationMenu from "./components/Menu";
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
import Shop from "./components/shop/Shop";

import { actionUserData } from "./store/actions";
import AuthJwtService from "./services/AuthJwtService";
const App = () => {
  const authService = new AuthJwtService("http://localhost");
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userData);
  const [loading, setLoading] = React.useState(true);
  useEffect(() => {
    authService.getUserData().subscribe((Data) => {
      dispatch(actionUserData(Data.identity));
      setLoading(false);
    });
  }, []);

  //const { i18n } = useTranslation();
  // document.body.dir = i18n.dir();
  return loading ? null : (
    <React.Fragment>
      <Router>
        <Container className="nav">
          <NavigationMenu userData={userData} />
        </Container>
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
              return userData.user_id ? <Account /> : <Redirect to="/login" />;
            }}
          />
          <Route
            path={"/blog"}
            exact
            render={() => {
              return userData.user_id ? <Blog /> : <Redirect to="/login" />;
            }}
          />
          <Route
            path={"/calendar"}
            exact
            render={() => {
              return userData.user_id ? <Calendar /> : <Redirect to="/login" />;
            }}
          />
          <Route
            path={"/cart"}
            exact
            render={() => {
              return userData.user_id ? <Cart /> : <Redirect to="/login" />;
            }}
          />
          <Route
            path={"/checkout"}
            exact
            render={() => {
              return userData.user_id ? (
                <CheckoutFrom />
              ) : (
                <Redirect to="/login" />
              );
            }}
          />
          <Route
            path={"/orders"}
            exact
            render={() => {
              return userData.user_id ? <Orders /> : <Redirect to="/login" />;
            }}
          />
          <Route
            path={"/register"}
            exact
            render={() => {
              return userData.user_id ? (
                <RegisterForm />
              ) : (
                <Redirect to="/login" />
              );
            }}
          />
          <Route
            path={"/restore"}
            exact
            render={() => {
              return userData.user_id ? (
                <RestoreForm />
              ) : (
                <Redirect to="/login" />
              );
            }}
          />
          <Route
            path={"/shop"}
            exact
            render={() => {
              return <Shop />;
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
      <Footer />
    </React.Fragment>
  );
};

export default App;
