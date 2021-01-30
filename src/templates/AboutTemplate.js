import React from "react";
import styled from "styled-components";
import Header from "../components/MainHeader";
import LongText from "../components/Text/LongText";
import Image from "../components/Text/Image";
import Container from "../components/Text/Container";

const StyledWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-top: 35vh;
`;

const AboutTemplate = (props) => {
  return (
    <StyledWrapper>
      <Image img="https://images.pexels.com/photos/735199/pexels-photo-735199.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"></Image>
      <Container>
        <Header size="2.5">About Me</Header>
        <LongText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
          pariatur assumenda quae odit illo, asperiores repellat, officia ipsum
          soluta provident fugit exercitationem in aliquid. Quidem pariatur
          deleniti ipsa ratione magni sunt commodi tempore, nam iusto veniam
          debitis eaque odio dolorum. Tempora, ex animi explicabo hic porro
          voluptatem dolorem repellat est. Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Ipsam deleniti nostrum maxime quae omnis
          quo temporibus nisi eligendi, quidem enim culpa maiores! Corrupti
          molestiae optio voluptatum consequuntur. Impedit mollitia nesciunt eum
          placeat unde rem perspiciatis eligendi expedita illum sed. Eveniet
          delectus suscipit qui aliquam dolores, magnam repellendus eius alias
          eos?
        </LongText>

        <Header size="2.5">Exhibitions</Header>

        <LongText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
          pariatur assumenda quae odit illo, asperiores repellat, officia ipsum
          soluta provident fugit exercitationem in aliquid. Quidem pariatur
          deleniti ipsa ratione magni sunt commodi tempore, nam iusto veniam
          debitis eaque odio dolorum. Tempora, ex animi explicabo hic porro
          voluptatem dolorem repellat est. Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Ipsam deleniti nostrum maxime quae omnis
          quo temporibus nisi eligendi, quidem enim culpa maiores! Corrupti
          molestiae optio voluptatum consequuntur. Impedit mollitia nesciunt eum
          placeat unde rem perspiciatis eligendi expedita illum sed. Eveniet
          delectus suscipit qui aliquam dolores, magnam repellendus eius alias
          eos?
        </LongText>
      </Container>
    </StyledWrapper>
  );
};

export default AboutTemplate;
