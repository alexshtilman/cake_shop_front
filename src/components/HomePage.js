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
} from "semantic-ui-react";

export default function HomePage() {
  return (
    <div>
      <div className="home">
        <Container>
          <Grid stackable>
            <Grid.Row columns={2} centered>
              <Grid.Column width={6}>
                <Container textAlign="justified">
                  <Header as="h2">Header</Header>
                  <p>
                    Sit ea eu minim eiusmod nulla reprehenderit anim consectetur
                    nisi consequat aliqua consectetur elit. Ea fugiat eiusmod
                    voluptate et ea. Anim occaecat veniam dolor culpa aliquip
                    nisi mollit cillum sit laboris mollit minim. Occaecat veniam
                    nostrud cupidatat minim consequat laborum mollit laboris.
                    Adipisicing in adipisicing nostrud deserunt aute. Ex ad
                    officia labore cillum est eiusmod consectetur irure quis
                    tempor dolor velit est et. Culpa est reprehenderit non
                    deserunt incididunt ullamco aute exercitation mollit mollit
                    voluptate laborum. Eiusmod magna eu esse est labore
                    exercitation labore incididunt deserunt velit ullamco quis.
                    Laborum ullamco enim mollit velit anim quis velit et magna
                    pariatur veniam dolor aute. Incididunt proident Lorem id
                    dolore incididunt. Anim aliqua occaecat est consequat ad est
                    culpa et mollit consectetur consectetur magna duis. Dolore
                  </p>

                  <Button basic>More &raquo;</Button>
                </Container>
              </Grid.Column>
              <Grid.Column width={6}>
                <Image
                  src="public/static/images/2018-09-28_09-09-44_UTC.jpg"
                  size="medium"
                  centered
                  circular
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>

      <Container className="scroller">
        <Container text>
          <Grid centered columns={5}>
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
        </Container>
      </Container>
      <Container>
        <Grid container stackable centered columns={2}>
          <Grid.Column width={6}>
            <Header as="h1">Heading</Header>
            <Container style={{ color: "white" }}>
              <p>
                66666 Donec sed odio dui2. Etiam porta sem malesuada magna
                mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id
                elit. Morbi leo risus, porta ac consectetur ac, vestibulum at
                eros. Praesent commodo cursus magna.
              </p>
              <Button basic>View details &raquo;</Button>
            </Container>
          </Grid.Column>
          <Grid.Column width={6}>
            <Card>
              <Card.Content header="About Amy" />
              <Card.Content description="text" />
              <Card.Content extra>
                <Icon name="user" />4 Friends
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid>
      </Container>

      <Container>
        <Segment vertical>
          <Grid stackable centered>
            <Grid.Column width={6}>
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
              <Image src="public/static/square-image.jpg" />
            </Grid.Column>
          </Grid>
        </Segment>
      </Container>
    </div>
  );
}
