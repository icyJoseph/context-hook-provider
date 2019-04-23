import React from "react";
import { Button, Container, Jumbotron } from "reactstrap";

export function Main() {
  return (
    <Jumbotron fluid>
      <Container>
        <h1 className="display-3">Redux Context Provider</h1>
        <p className="lead">
          Proposal to replace connect with useContext. Gives a Provider which
          makes use useEffect, to subscribe a listener to the redux store. The
          Provider, wraps its children with a State context. When the listener
          triggers, the context is updated.
        </p>
        <div className="external-links">
          <Button
            color="primary"
            tag="a"
            href="https://github.com/icyJoseph"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Button>
          <Button
            color="info"
            tag="a"
            href="https://www.npmjs.com/~icyjoseph"
            target="_blank"
            rel="noopener noreferrer"
          >
            npm
          </Button>
        </div>
      </Container>
    </Jumbotron>
  );
}

export default Main;
