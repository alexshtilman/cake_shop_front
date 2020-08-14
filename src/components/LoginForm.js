import React from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
  Icon,
  Item,
  Divider,
  Checkbox,
} from "semantic-ui-react";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
const providers = ["twitter", "google", "facebook", "github"];

const LoginForm = () => {
  const responseGoogle = (response) => {
    console.log(response);
  };
  const responseFacebook = (response) => {
    console.log(response);
  };
  const [emailError, setEmailError] = React.useState({});
  const checkEmail = () => {
    setEmailError({
      content: "Please enter a valid email address",
      pointing: "below",
    });
  };
  return (
    <Grid
      textAlign="center"
      style={{ height: "96vh", paddingTop: "4vh" }}
      verticalAlign="top"
    >
      <Grid.Column style={{ maxWidth: 450 }}>
        <Divider horizontal> Sign in</Divider>

        <Grid>
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
                    <Icon name="facebook official" /> Sign in with Facebook
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
                    <Icon name="google" /> Sign in with Google
                  </Button>
                )}
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={"single_host_origin"}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Divider horizontal>Or</Divider>
        <Form size="large">
          <Segment stacked>
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="E-mail address"
              type="email"
              error={null}
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
            />
            <Grid>
              <Grid.Row>
                <Grid.Column width={16}>
                  <Button color="green" fluid size="large">
                    Sign in
                  </Button>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column width={16} textAlign="left">
                  <Checkbox label="Remember me" defaultChecked />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
        </Form>
        <Message>
          Don't have account ? <a href="#">Register Now!</a>
        </Message>
      </Grid.Column>
    </Grid>
  );
};

export default LoginForm;
