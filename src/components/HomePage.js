import React from "react";
import {
  Container,
  Segment,
  Grid,
  Header,
  Button,
  Image,
} from "semantic-ui-react";

export default function HomePage() {
  return (
    <div>
      <Container>
        <Segment vertical>
          <Grid container stackable textAlign="center" columns={3}>
            <Grid.Column>
              <Image centered circular size="small" src="/square-image2.jpg" />
              <Header as="h1">Heading</Header>
              <p>
                Donec sed odio dui. Etiam porta sem malesuada magna mollis
                euismod. Nullam id dolor id nibh ultricies vehicula ut id elit.
                Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                Praesent commodo cursus magna.
              </p>
              <Button basic>View details &raquo;</Button>
            </Grid.Column>
            <Grid.Column>
              <Image centered circular size="small" src="/square-image.jpg" />
              <Header as="h1">Heading</Header>
              <p>
                Donec sed odio dui. Etiam porta sem malesuada magna mollis
                euismod. Nullam id dolor id nibh ultricies vehicula ut id elit.
                Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                Praesent commodo cursus magna.
              </p>
              <Button basic>View details &raquo;</Button>
            </Grid.Column>
            <Grid.Column>
              <Image centered circular size="small" src="/square-image.jpg" />
              <Header as="h1">Heading</Header>
              <p>
                Donec sed odio dui. Etiam porta sem malesuada magna mollis
                euismod. Nullam id dolor id nibh ultricies vehicula ut id elit.
                Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                Praesent commodo cursus magna.
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
              <Image src="/square-image.jpg" />
            </Grid.Column>
          </Grid>
        </Segment>
        <Segment vertical>
          <Grid stackable>
            <Grid.Column width={6}>
              <Image src="/square-image.jpg" />
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
              <Image src="/square-image.jpg" />
            </Grid.Column>
          </Grid>
        </Segment>
      </Container>
    </div>
  );
}
