import React from "react";
import styled from "styled-components";
import { FaInstagram, FaFacebookF } from "react-icons/fa";

const StyledWrapper = styled.div`
  display: flex;
  height: 20vh;
  width: 60%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledMediaWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledFacebookIcon = styled(FaFacebookF)`
  color: black;
  font-size: 5rem;
  cursor: pointer;
  margin: 2rem;
  &:hover {
    color: #323232;
  }
`;
const StyledInstagramIcon = styled(FaInstagram)`
  color: black;
  font-size: 5rem;
  cursor: pointer;
  &:hover {
    color: #323232;
  }
`;

const Footer = () => {
  return (
    <StyledWrapper>
      <StyledMediaWrapper>
        <StyledInstagramIcon></StyledInstagramIcon>
        <StyledFacebookIcon></StyledFacebookIcon>
      </StyledMediaWrapper>
    </StyledWrapper>
  );
};

export default Footer;
