import React from "react";
import {
  Grid,
  Container,
  Menu,
  Icon,
  Dropdown,
  Button,
} from "semantic-ui-react";
import { Link } from "react-router-dom";

import i18n from "../translate/i18n";

import { useTranslation } from "react-i18next";

function NavigationMenu() {
  const [activeItem, setaActiveItem] = React.useState("home");
  const [dropdownMenuStyle, setDropdownMenuStyle] = React.useState({
    display: "none",
  });

  const { t } = useTranslation();
  const pages = [
    { name: t("shop"), link: "/shop" },
    { name: t("blog"), link: "/blog" },
    { name: t("orders"), link: "/orders" },
    { name: t("calendar"), link: "/calendar" },
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
  return (
    <div>
      <Grid padded className="tablet computer only">
        <Container>
          <Menu pointing secondary size="huge">
            <Link to="/">
              <Menu.Item
                header
                as="a"
                active={activeItem === "home"}
                name="home"
                onClick={handleItemClick}
              >
                Lupin.co.il
              </Menu.Item>
            </Link>
            {pages.map((page, index) => {
              return (
                <Link to={page.link} key={`index-${index}`}>
                  <Menu.Item
                    active={activeItem === page.name}
                    as="a"
                    name={page.name}
                    onClick={handleItemClick}
                  >
                    {page.name}
                  </Menu.Item>
                </Link>
              );
            })}

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

              <Dropdown text={activeLang} className="item">
                <Dropdown.Menu>
                  {activeLang === "he" ? null : (
                    <Dropdown.Item as="a" onClick={() => setLang("he")}>
                      he
                    </Dropdown.Item>
                  )}
                  {activeLang === "en" ? null : (
                    <Dropdown.Item as="a" onClick={() => setLang("en")}>
                      en
                    </Dropdown.Item>
                  )}
                  {activeLang === "ru" ? null : (
                    <Dropdown.Item as="a" onClick={() => setLang("ru")}>
                      ru
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
    </div>
  );
}
export default NavigationMenu;
