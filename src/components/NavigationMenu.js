import React, { BrowserRouter as Router, Switch, Route, Redirect } from "react";
import {
  Grid,
  Container,
  Menu,
  Icon,
  Dropdown,
  Button,
} from "semantic-ui-react";
import { Link } from "react-router-dom";

function NavigationMenu() {
  const [activeItem, setaActiveItem] = React.useState("Home");
  const [dropdownMenuStyle, setDropdownMenuStyle] = React.useState({
    display: "none",
  });
  const handleItemClick = (e, { name }) => {
    setaActiveItem(name);
  };

  const handleToggleDropdownMenu = () => {
    setDropdownMenuStyle({
      display: dropdownMenuStyle.display === "none" ? "flex" : "none",
    });
  };
  const pages = [{ name: "Home" }, { name: "shop" }, { name: "blog" }];
  return (
    <React.Fragment>
      <Grid padded className="tablet computer only">
        <Container>
          <Menu pointing secondary size="huge">
            <Menu.Item header as="a">
              Lupin.co.il
            </Menu.Item>
            {pages.map((page, index) => {
              return (
                <Menu.Item
                  key={`index-${index}`}
                  active={activeItem === page.name}
                  as="a"
                  name={page.name}
                  onClick={handleItemClick}
                >
                  {page.name}
                </Menu.Item>
              );
            })}

            <Menu.Menu position="right">
              <Link to="/login">
                <Menu.Item
                  name="logout"
                  active={activeItem === "logout"}
                  onClick={handleItemClick}
                >
                  <Icon name="user circle outline" />
                </Menu.Item>
              </Link>
            </Menu.Menu>
          </Menu>
        </Container>
      </Grid>
      <Grid className="mobile only">
        <Menu inverted borderless size="huge" fixed="top">
          <Menu.Item header as="a">
            Lupin.co.il
          </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item>
              <Button
                icon
                basic
                inverted
                toggle
                onClick={handleToggleDropdownMenu}
              >
                <Icon name="content" />
              </Button>
            </Menu.Item>
          </Menu.Menu>
          <Menu vertical borderless inverted fluid style={dropdownMenuStyle}>
            {pages.map((page, index) => {
              return (
                <Menu.Item
                  key={`index-${index}`}
                  active={activeItem === page.name}
                  as="a"
                  name={page.name}
                  onClick={handleItemClick}
                >
                  {page.name}
                </Menu.Item>
              );
            })}

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
    </React.Fragment>
  );
}
export default NavigationMenu;
