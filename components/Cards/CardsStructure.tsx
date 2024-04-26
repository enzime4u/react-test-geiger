import React from "react";
import { Card, FlexContainer, StyledLink } from "./CardsStyle";

// refactor  to map over pages and show card for each of them ?

const CardsStructure = () => {
  return (
    <FlexContainer>
      <Card>
        <StyledLink href="/about">About Page &rarr;</StyledLink>
      </Card>
      <Card>
        <StyledLink href="/newsletter-signup">
          Newsletter Signup &rarr;
        </StyledLink>
      </Card>
    </FlexContainer>
  );
};

export default CardsStructure;
