import React, { Component } from "react";

import "semantic-ui-css/semantic.min.css";

import {
  Button,
  Container,
  Dropdown,
  Grid,
  Header,
  Icon,
  Image,
  Menu,
  Segment,
} from "semantic-ui-react";

import "./App.css";

class App extends Component {
  state = {
    dropdownMenuStyle: {
      display: "none",
    },
  };

  handleToggleDropdownMenu = () => {
    let newState = Object.assign({}, this.state);
    if (newState.dropdownMenuStyle.display === "none") {
      newState.dropdownMenuStyle = { display: "flex" };
    } else {
      newState.dropdownMenuStyle = { display: "none" };
    }

    this.setState(newState);
  };

  render() {
    return (
      <div className="App">
        <Grid padded className="tablet computer only">
          <Container>
            <Menu borderless inverted size="huge">
              <Menu.Item header as="a">
                Project Name
              </Menu.Item>
              <Menu.Item active as="a">
                Home
              </Menu.Item>
              <Menu.Item as="a">About</Menu.Item>
              <Menu.Item as="a">Contact</Menu.Item>
              <Dropdown text="Dropdown" className="item">
                <Dropdown.Menu>
                  <Dropdown.Item as="a">Action</Dropdown.Item>
                  <Dropdown.Item as="a">Another action</Dropdown.Item>
                  <Dropdown.Item as="a">Something else here</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Header>Navbar header</Dropdown.Header>
                  <Dropdown.Item as="a">Seperated link</Dropdown.Item>
                  <Dropdown.Item as="a">One more seperated link</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Menu>
          </Container>
        </Grid>
        <Grid className="mobile only">
          <Menu inverted borderless size="huge" fixed="top">
            <Menu.Item header as="a">
              Project Name
            </Menu.Item>
            <Menu.Menu position="right">
              <Menu.Item>
                <Button
                  icon
                  basic
                  inverted
                  toggle
                  onClick={this.handleToggleDropdownMenu}
                >
                  <Icon name="content" />
                </Button>
              </Menu.Item>
            </Menu.Menu>
            <Menu
              vertical
              borderless
              inverted
              fluid
              style={this.state.dropdownMenuStyle}
            >
              <Menu.Item active as="a">
                Home
              </Menu.Item>
              <Menu.Item as="a">About</Menu.Item>
              <Menu.Item as="a">Contact</Menu.Item>
              <Dropdown text="Dropdown" className="item">
                <Dropdown.Menu>
                  <Dropdown.Item as="a">Action</Dropdown.Item>
                  <Dropdown.Item as="a">Another action</Dropdown.Item>
                  <Dropdown.Item as="a">Something else here</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Header>Navbar header</Dropdown.Header>
                  <Dropdown.Item as="a">Seperated link</Dropdown.Item>
                  <Dropdown.Item as="a">One more seperated link</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Menu>
          </Menu>
        </Grid>

        <Container>
          <Segment vertical>
            <Grid container stackable textAlign="center" columns={3}>
              <Grid.Column>
                <Image centered circular size="small" src="/square-image.png" />
                <Header as="h1">Heading</Header>
                <p>
                  Donec sed odio dui. Etiam porta sem malesuada magna mollis
                  euismod. Nullam id dolor id nibh ultricies vehicula ut id
                  elit. Morbi leo risus, porta ac consectetur ac, vestibulum at
                  eros. Praesent commodo cursus magna.
                </p>
                <Button basic>View details &raquo;</Button>
              </Grid.Column>
              <Grid.Column>
                <Image centered circular size="small" src="/square-image.png" />
                <Header as="h1">Heading</Header>
                <p>
                  Donec sed odio dui. Etiam porta sem malesuada magna mollis
                  euismod. Nullam id dolor id nibh ultricies vehicula ut id
                  elit. Morbi leo risus, porta ac consectetur ac, vestibulum at
                  eros. Praesent commodo cursus magna.
                </p>
                <Button basic>View details &raquo;</Button>
              </Grid.Column>
              <Grid.Column>
                <Image centered circular size="small" src="/square-image.png" />
                <Header as="h1">Heading</Header>
                <p>
                  Donec sed odio dui. Etiam porta sem malesuada magna mollis
                  euismod. Nullam id dolor id nibh ultricies vehicula ut id
                  elit. Morbi leo risus, porta ac consectetur ac, vestibulum at
                  eros. Praesent commodo cursus magna.
                </p>
                <Button basic>View details &raquo;</Button>
              </Grid.Column>
            </Grid>
          </Segment>
          <Segment vertical>
            <Grid stackable>
              <Grid.Column width={10}>
                <Header as="h1">
                  First featurette heading.{" "}
                  <span className="sub">It'll blow your mind.</span>
                </Header>
                <p>
                  Donec ullamcorper nulla non metus auctor fringilla. Vestibulum
                  id ligula porta felis euismod semper. Praesent commodo cursus
                  magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus
                  ac cursus commodo.
                </p>
              </Grid.Column>
              <Grid.Column width={6}>
                <Image src="/square-image.png" />
              </Grid.Column>
            </Grid>
          </Segment>
          <Segment vertical>
            <Grid stackable>
              <Grid.Column width={6}>
                <Image src="/square-image.png" />
              </Grid.Column>
              <Grid.Column width={10}>
                <Header as="h1">
                  Oh yeah, <span className="sub">it's that good.</span>
                </Header>
                <p>
                  Donec ullamcorper nulla non metus auctor fringilla. Vestibulum
                  id ligula porta felis euismod semper. Praesent commodo cursus
                  magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus
                  ac cursus commodo.
                </p>
              </Grid.Column>
            </Grid>
          </Segment>
          <Segment vertical>
            <Grid stackable>
              <Grid.Column width={10}>
                <Header as="h1">
                  And lastly, <span className="sub">this one.</span>
                </Header>
                <p>
                  Donec ullamcorper nulla non metus auctor fringilla. Vestibulum
                  id ligula porta felis euismod semper. Praesent commodo cursus
                  magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus
                  ac cursus commodo.
                </p>
              </Grid.Column>
              <Grid.Column width={6}>
                <Image src="/square-image.png" />
              </Grid.Column>
            </Grid>
          </Segment>
          <Segment vertical>
            <Grid columns={2}>
              <Grid.Column>
                &copy; 2017 Company, Inc. · <a href="#root">Privacy</a> ·{" "}
                <a href="#root">Terms</a>
              </Grid.Column>
              <Grid.Column textAlign="right">
                <a href="#root">Back to top</a>
              </Grid.Column>
            </Grid>
          </Segment>
        </Container>
      </div>
    );
  }
}

export default App;
