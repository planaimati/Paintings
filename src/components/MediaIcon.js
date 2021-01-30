import React from "react";
import styled from "styled-components";
import { FaInstagram, FaFacebookF } from "react-icons/fa";

const StyledInstagram = styled(FaInstagram)`
  color: black;
`;
const StyledFacebook = styled(FaFacebookF)`
  color: black;
`;

const StyledContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 40%;
  bottom: 10%;

  right: 0;
`;

const StyleIconWrapper = styled.div`
  height: 3rem;
  width: 3rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  margin: 1rem;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    filter: brightness(0.8);
  }
`;

const MediaIcon = (props) => {
  return (
    <StyledContainer>
      <StyleIconWrapper>
        <StyledInstagram></StyledInstagram>
      </StyleIconWrapper>
      <StyleIconWrapper>
        <StyledFacebook></StyledFacebook>
      </StyleIconWrapper>
    </StyledContainer>
  );
};

export default MediaIcon;
