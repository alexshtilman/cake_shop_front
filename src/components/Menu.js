import React, { useEffect } from "react";
import {
  Grid,
  Container,
  Menu,
  Icon,
  Dropdown,
  Button,
  Flag,
  Divider,
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import i18n from "../translate/i18n";

import { useTranslation } from "react-i18next";

function NavigationMenu(props) {
  const [activeItem, setaActiveItem] = React.useState("home");
  const [dropdownMenuStyle, setDropdownMenuStyle] = React.useState({
    display: "none",
  });

  const { t } = useTranslation();
  const pages = [
    { name: t("shop"), link: "/shop" },
    { name: t("admin"), link: "/admin", admin: true },
  ];

  const handleItemClick = (e, { name }) => {
    setaActiveItem(name);
  };
  const handleToggleDropdownMenu = () => {
    setDropdownMenuStyle({
      display: dropdownMenuStyle.display === "none" ? "flex" : "none",
    });
  };
  const [activeLang, setActiveLang] = React.useState(i18n.language.slice(0, 2));
  const setLang = (lng) => {
    setActiveLang(lng);
    i18n.changeLanguage(lng);
  };
  const userData = useSelector((state) => state.userData);
  console.log(userData);
  return (
    <React.Fragment>
      <br />

      <Grid padded className="tablet computer only">
        <Container>
          <Menu secondary pointing secondary size="huge">
            <Link to="/">
              <Menu.Item
                as="a"
                active={activeItem === "home"}
                name="home"
                onClick={handleItemClick}
              >
                Lupin.co.il
              </Menu.Item>
            </Link>
            {userData.user_id == ""
              ? pages.map((page, index) => {
                  return (
                    <Link to={page.link} key={`index-${index}`}>
                      <Menu.Item
                        active={activeItem === page.name}
                        as="a"
                        name={page.name}
                        onClick={handleItemClick}
                        color={page.admin ? "red" : "black"}
                      >
                        {page.admin ? <Icon name="key" /> : null}
                        {page.name}
                      </Menu.Item>
                    </Link>
                  );
                })
              : null}
            <Menu.Menu position="right">
              <Link to="/cart">
                <Menu.Item
                  name="cart"
                  active={activeItem === "cart"}
                  onClick={handleItemClick}
                >
                  <Icon name="cart" />
                </Menu.Item>
              </Link>

              <Dropdown
                text={
                  <React.Fragment>
                    <Flag
                      name={
                        activeLang === "en"
                          ? "us"
                          : activeLang === "he"
                          ? "il"
                          : "ru"
                      }
                    />{" "}
                    {activeLang}{" "}
                  </React.Fragment>
                }
                className="item"
              >
                <Dropdown.Menu>
                  {activeLang === "he" ? null : (
                    <Dropdown.Item as="a" onClick={() => setLang("he")}>
                      <Flag name="il" /> עברית
                    </Dropdown.Item>
                  )}
                  {activeLang === "en" ? null : (
                    <Dropdown.Item as="a" onClick={() => setLang("en")}>
                      <Flag name="us" /> English
                    </Dropdown.Item>
                  )}
                  {activeLang === "ru" ? null : (
                    <Dropdown.Item as="a" onClick={() => setLang("ru")}>
                      <Flag name="ru" /> Русский
                    </Dropdown.Item>
                  )}
                </Dropdown.Menu>
              </Dropdown>

              <Link to="/account">
                <Menu.Item
                  name="account"
                  active={activeItem === "account"}
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
                  color={page.admin ? "red" : "black"}
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
