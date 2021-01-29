import React from "react";
import styled from "styled-components";

const StyledText = styled.p`
  color: black;
  font-size: 1.8rem;
  font-weight: 300;
  font-family: "Nunito", sans-serif;
  text-align: left;
  line-height: 2.8rem;
  letter-spacing: 0.1rem;
  word-wrap: break-word;
  margin-top: 5rem;
  margin-bottom: 5rem;
`;

const LongText = (props) => {
  return <StyledText>{props.children}</StyledText>;
};

export default LongText;
