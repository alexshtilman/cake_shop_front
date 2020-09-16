import React from "react";
import {
  Container,
  Segment,
  Grid,
  Header,
  Button,
  Image,
  Message,
  Card,
  Icon,
  Label,
  Item,
  Pagination,
} from "semantic-ui-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
var data = [
  {
    id: "1",
    headerEn: "Header",
    headerRu: "Заголовок",
    headerHe: "",
    textEn: "description text",
    textRu: "текст описания",
    textHe: "",
    img: "2018-09-28_09-09-44_UTC.jpg",
  },
  {
    id: "2",
    headerEn: "Header2",
    headerRu: "Заголовок2",
    headerHe: "",
    textEn: "description text2",
    textRu: "текст описания2",
    textHe: "",
    img: "2019-07-21_05-47-37_UTC.jpg",
  },
];

var blogData = [
  {
    id: "1",
    date: "01.01.2020",
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
  },
  {
    id: "2",
    date: "02.02.2020",
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
  },
];
export default function HomePage() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
  };
  const [state, setState] = React.useState({ activePage: 1 });

  const handlePaginationChange = (e, { activePage }) =>
    setState({ activePage });

  return (
    <React.Fragment>
      <Container style={{ marginTop: "3em", marginBottom: "3em" }}>
        <Header as="h1">First Header</Header>
      </Container>
      <Container style={{ marginBottom: "3em" }}>
        <Segment padded="very" stacked>
          <Slider {...settings}>
            {data.map((item) => {
              return (
                <div key={item.id}>
                  <Grid>
                    <Grid.Row columns="2" centered>
                      <Grid.Column>
                        <Header as="h2">{item.headerEn}</Header>
                        <p>{item.textEn}</p>

                        <Button basic>More &raquo;</Button>
                      </Grid.Column>
                      <Grid.Column>
                        <Image
                          src={"public/static/images/" + item.img}
                          size="large"
                          centered
                          circular
                        />
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                </div>
              );
            })}
          </Slider>
        </Segment>
      </Container>

      <Container style={{ marginBottom: "3em" }}>
        <Segment>
          <Header as="h2">
            <Icon name="birthday cake" color="red" />
            <Header.Content>
              Choose type of Sweets
              <Header.Subheader>Manage your preferences</Header.Subheader>
            </Header.Content>
          </Header>
          <Grid centered columns={5} style={{ marginTop: "1em" }}>
            <Grid.Column>
              <Card raised as="a">
                <Image src="public/static/images/2018-08-15_09-30-50_UTC.jpg" />
                <Card.Content>
                  <Card.Header textAlign="center">Wedding</Card.Header>
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column>
              <Card raised as="a">
                <Image src="public/static/images/2018-06-07_10-05-27_UTC_1.jpg" />
                <Card.Content>
                  <Card.Header textAlign="center">Party</Card.Header>
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column>
              <Card raised as="a">
                <Image src="public/static/images/2018-07-07_11-20-09_UTC.jpg" />
                <Card.Content>
                  <Card.Header textAlign="center">Desert</Card.Header>
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column>
              <Card raised as="a">
                <Image src="public/static/images/2018-07-27_08-50-00_UTC.jpg" />
                <Card.Content>
                  {" "}
                  <Card.Header textAlign="center">Cupcakes</Card.Header>{" "}
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column>
              <Card raised as="a">
                <Image src="public/static/images/2019-07-21_05-47-37_UTC.jpg" />
                <Card.Content>
                  {" "}
                  <Card.Header textAlign="center">Sweets</Card.Header>
                </Card.Content>
              </Card>
            </Grid.Column>
          </Grid>
        </Segment>
      </Container>

      <Container>
        <Segment>
          <Label as="a" color="orange" attached="top left" size="huge">
            <Icon name="rss" /> Blog
          </Label>
          <Item.Group divided style={{ paddingTop: "2em" }}>
            {blogData.map((item, index) => {
              return (
                <Item key={item.id}>
                  <Item.Image src={"public/static/images/" + item.img} />
                  <Item.Content>
                    <Item.Header as="a">{item.headerEn}</Item.Header>
                    <Item.Meta>
                      <span>{item.date}</span>
                      <span>{item.categoryEn}</span>
                    </Item.Meta>
                    <Item.Description>{item.textEn}</Item.Description>
                  </Item.Content>
                </Item>
              );
            })}
          </Item.Group>
          <Grid.Column>
            <Pagination
              boundaryRange={0}
              ellipsisItem={null}
              firstItem={null}
              lastItem={null}
              siblingRange={1}
              totalPages={10}
              activePage={state.activePage}
              onPageChange={handlePaginationChange}
            />
          </Grid.Column>
        </Segment>
      </Container>
    </React.Fragment>
  );
}
