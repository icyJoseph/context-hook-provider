import React from "react";
import { Container } from "reactstrap";

import Header from "../components/Header";
import Code from "../components/Code";

import examples from "./examples";
import { ProviderCode, ProviderUsage } from "../code";

function Demo() {
  return (
    <Container>
      <Header
        id="main"
        title="Provider Pattern"
        description="Use effect to subscribe to changes to redux store."
      >
        <Code code={ProviderCode} />
      </Header>
      <Header
        id="usage"
        title="Provider Usage"
        description="Create a store with redux and pass it to the Provider."
      >
        <Code code={ProviderUsage} />
      </Header>
      {examples.map(({ id, Component, code = "", ...rest }) => (
        <Header key={id} {...rest}>
          <Code code={code} />
          <Component />
        </Header>
      ))}
    </Container>
  );
}

export default Demo;
