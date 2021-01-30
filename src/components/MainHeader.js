import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const StyledHeader = styled.h1`
  font-family: "Nunito", sans-serif;
  font-size: ${(props) => props.size}rem;
  color: #111111;
  font-weight: 300;
  letter-spacing: 0.3rem;
`;

const MainHeader = (props) => {
  return (
    <StyledWrapper>
      <StyledHeader size={props.size}>{props.children}</StyledHeader>
    </StyledWrapper>
  );
};

export default MainHeader;
