import React from "react";
import { Segment, Container, List, Divider, Button } from "semantic-ui-react";

export default function Footer() {
  return (
    <Segment vertical style={{ padding: "5em 0em" }}>
      <Divider section />
      <Container textAlign="center">
        <List horizontal link size="medium">
          <List.Item>&copy; 2020 Lupin, Inc.</List.Item>
          <List.Item>
            <Button circular color="facebook" icon="facebook" />
            <Button circular color="twitter" icon="twitter" />
            <Button circular color="linkedin" icon="linkedin" />
            <Button circular color="google plus" icon="google" />
          </List.Item>
          <List.Item as="a" href="#">
            About
          </List.Item>
        </List>
      </Container>
    </Segment>
  );
}
