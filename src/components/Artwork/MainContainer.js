import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const StyledImagesWrapper = styled.div`
  margin-top: 15vh;
  width: 80%;
  height: 75%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainContainer = (props) => {
  return (
    <StyledWrapper>
      <StyledImagesWrapper>{props.children}</StyledImagesWrapper>
    </StyledWrapper>
  );
};

export default MainContainer;
