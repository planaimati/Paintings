import React from "react";
import styled from "styled-components";

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 5rem;
  width: 100rem;

  @media (max-width: 1024px) {
    width: 90%;
  }
`;

const Container = (props) => {
  const { children } = props;
  return <TextContainer>{children}</TextContainer>;
};

export default Container;
