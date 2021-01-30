import React from "react";
import styled from "styled-components";
import Header from "../components/MainHeader";
import Image from "../components/Text/Image";
import Container from "../components/Text/Container";

const StyledWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 35vh;
`;

const ContactTemplate = () => {
  return (
    <StyledWrapper>
      <Image img="https://images.pexels.com/photos/5935850/pexels-photo-5935850.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
      <Container>
        <Header>Contact</Header>
      </Container>
    </StyledWrapper>
  );
};

export default ContactTemplate;
