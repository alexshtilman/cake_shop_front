import React from "react";
import {
  Button,
  Form,
  Grid,
  Message,
  Segment,
  Icon,
  Divider,
  Checkbox,
  Card,
  Container,
} from "semantic-ui-react";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";

import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const LoginForm = (props) => {
  const { t } = useTranslation();

  const responseGoogle = (response) => {
    console.log(response);
  };
  const responseFacebook = (response) => {
    console.log(response);
  };
  /*const [emailError, setEmailError] = React.useState({});
  const checkEmail = () => {
    setEmailError({
      content: "Please enter a valid email address",
      pointing: "below",
    });
  };*/

  return (
    <Grid verticalAlign="top" centered>
      <Grid.Column width={4}>
        <Card fluid>
          <Card.Content>
            <Divider horizontal> {t("signIn")}</Divider>

            <Grid textAlign="center">
              <Grid.Row>
                <Grid.Column width={16}>
                  <FacebookLogin
                    appId="1088597931155576"
                    callback={responseFacebook}
                    render={(renderProps) => (
                      <Button
                        onClick={renderProps.onClick}
                        color="facebook"
                        fluid
                        size="large"
                      >
                        <Icon name="facebook official" /> {t("facebook")}
                      </Button>
                    )}
                  />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column width={16}>
                  <GoogleLogin
                    clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                    render={(renderProps) => (
                      <Button
                        onClick={renderProps.onClick}
                        disabled={renderProps.disabled}
                        fluid
                        color="google plus"
                        size="large"
                      >
                        <Icon name="google" /> {t("google")}
                      </Button>
                    )}
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={"single_host_origin"}
                  />
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <Divider horizontal>{t("or")}</Divider>
            <Form size="large">
              <Segment stacked>
                <Form.Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder={t("emailAddress")}
                  type="email"
                  error={null}
                />
                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder={t("password")}
                  type="password"
                />
                <Grid>
                  <Grid.Row>
                    <Grid.Column width={16}>
                      <Button color="green" fluid size="large">
                        {t("signIn")}
                      </Button>
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column
                      width={16}
                      style={{ display: "flex", justifyContent: "start" }}
                    >
                      <Checkbox label={t("rememberMe")} defaultChecked />
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Segment>
            </Form>
            <Message>
              {t("donHaveAccount")}{" "}
              <Link to="/register">{t("registerNow")}</Link>
            </Message>
          </Card.Content>
        </Card>
      </Grid.Column>
    </Grid>
  );
};

export default LoginForm;
