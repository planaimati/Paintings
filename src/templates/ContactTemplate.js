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
`;
const StyledContentWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-top: 17vh;
`;

const ContactTemplate = () => {
  return (
    <StyledWrapper>
      <StyledContentWrapper>
        <Image img="https://images.pexels.com/photos/735199/pexels-photo-735199.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" />
        <Container>
          <Header>Contact</Header>
        </Container>
      </StyledContentWrapper>
    </StyledWrapper>
  );
};

export default ContactTemplate;
