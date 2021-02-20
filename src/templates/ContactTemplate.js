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

const Text = styled.p`
  color: black;
  font-size: 1.8rem;
  font-weight: 300;
  font-family: "Nunito", sans-serif;
  text-align: center;
  line-height: 2.8rem;
  letter-spacing: 0.1rem;
  word-wrap: break-word;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const ContactTemplate = () => {
  return (
    <StyledWrapper>
      <StyledContentWrapper>
        <Image img="https://cdn.pixabay.com/photo/2020/11/06/15/38/woman-5718129_960_720.jpg" />
        <Container>
          <Header>Contact</Header>

          <Text>Have a question?</Text>
          <Text>Thinking about booking a private session?</Text>
          <Text>
            Please do not hesitate to reach out for any reason -- email, call,
            text, or just fill out the form below and hit "submit".
          </Text>
          <Text>email: szpecht_art@gmail.com</Text>
          <Text>phone: (+48) 796-506-223</Text>
        </Container>
      </StyledContentWrapper>
    </StyledWrapper>
  );
};

export default ContactTemplate;
