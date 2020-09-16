import React from "react";
import {
  Button,
  Container,
  Grid,
  Icon,
  Input,
  Item,
  Label,
  Menu,
  Segment,
} from "semantic-ui-react";
import ShopItem from "./ShopItem";

export default function Shop() {
  const [activeItem, setaActiveItem] = React.useState("inbox");
  const handleItemClick = (e, { name }) => setaActiveItem(name);
  var blogData = [
    {
      id: "1",
      dateFrom: "01.01.2020",
      dateTo: "02.01.2020",
      discount: 0,
      categoryEn: "Category 1",
      categoryRu: "Category 1",
      categoryHe: "",
      headerEn: "Header",
      headerRu: "Заголовок",
      headerHe: "",
      textEn: "description text",
      textRu: "текст описания",
      textHe: "",
      img: "2018-09-28_09-09-44_UTC.jpg",
      min: 3,
      max: 30,
      price: 20,
    },
    {
      id: "2",
      dateFrom: "01.01.2020",
      dateTo: "02.01.2020",
      discount: 0.1,
      categoryEn: "Category 2",
      categoryRu: "Category 2",
      categoryHe: "",
      headerEn: "Header2",
      headerRu: "Заголовок2",
      headerHe: "",
      textEn: "description text2",
      textRu: "текст описания2",
      textHe: "",
      img: "2019-07-21_05-47-37_UTC.jpg",
      min: 10,
      max: 20,
      price: 30,
    },
  ];
  return (
    <Container style={{ marginBottom: "3em", marginTop: "3em" }}>
      <Grid>
        <Grid.Row stretched>
          <Grid.Column width={4}>
            <Menu size="large" vertical>
              <Menu.Item
                name="inbox"
                active={activeItem === "inbox"}
                onClick={handleItemClick}
              >
                <Label color="teal">1</Label>
                Inbox
              </Menu.Item>

              <Menu.Item
                name="spam"
                active={activeItem === "spam"}
                onClick={handleItemClick}
              >
                <Label>51</Label>
                Spam
              </Menu.Item>

              <Menu.Item
                name="updates"
                active={activeItem === "updates"}
                onClick={handleItemClick}
              >
                <Label>1</Label>
                Updates
              </Menu.Item>
              <Menu.Item>
                <Input icon="search" placeholder="Search mail..." />
              </Menu.Item>
            </Menu>
          </Grid.Column>
          <Grid.Column width={12}>
            <Item.Group divided>
              {blogData.map((item) => {
                return <ShopItem item={item} />;
              })}
            </Item.Group>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
}
