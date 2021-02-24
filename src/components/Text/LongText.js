import React from "react";
import styled from "styled-components";

const StyledText = styled.p`
  color: #666;
  font-size: 1.8rem;
  font-weight: 300;
  font-family: "Nunito", sans-serif;
  text-align: center;
  line-height: 2.8rem;
  letter-spacing: 0.1rem;
  word-wrap: break-word;
  margin-top: 3rem;
  margin-bottom: 3rem;
`;

const LongText = (props) => {
  return <StyledText>{props.children}</StyledText>;
};

export default LongText;
