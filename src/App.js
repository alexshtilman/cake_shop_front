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
import { ACCESS_TOKEN, REFRESH_TOKEN } from "./config/config";

import { actionUserData } from "./store/actions";
import AuthJwtService from "./services/AuthJwtService";
const App = () => {
  const authService = new AuthJwtService("https://localhost:5000/");
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userData);
  const [loading, setLoading] = React.useState(true);
  useEffect(() => {
    authService.getUserData().subscribe((data) => {
      dispatch(actionUserData(data.identity));
      console.log("???=", data);
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
            path="/callback"
            render={() => {
              const params = new URLSearchParams(window.location.search);
              const access_token = params.get('access_token');
              const refresh_token = params.get('refresh_token');
              console.log(refresh_token);
              if (access_token != "") {
                localStorage.setItem(ACCESS_TOKEN, access_token);
                localStorage.setItem(REFRESH_TOKEN, refresh_token);
                authService.getUserData().subscribe((data) => {
                  dispatch(actionUserData(data.identity));
                  setLoading(false);
                })
              }

              return <Redirect to="/" />;
            }}
          />


          <Route
            path={"/account"}
            exact
            render={() => {
              return userData.unique_id ? <Account /> : <Redirect to="/login" />;
            }}
          />
          <Route
            path={"/blog"}
            exact
            render={() => {
              return userData.unique_id ? <Blog /> : <Redirect to="/login" />;
            }}
          />
          <Route
            path={"/calendar"}
            exact
            render={() => {
              return userData.unique_id ? <Calendar /> : <Redirect to="/login" />;
            }}
          />
          <Route
            path={"/cart"}
            exact
            render={() => {
              return userData.unique_id ? <Cart /> : <Redirect to="/login" />;
            }}
          />
          <Route
            path={"/checkout"}
            exact
            render={() => {
              return userData.unique_id ? (
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
              return userData.unique_id ? <Orders /> : <Redirect to="/login" />;
            }}
          />
          <Route
            path={"/register"}
            exact
            render={() => {
              return userData.unique_id ? (
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
              return userData.unique_id ? (
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
