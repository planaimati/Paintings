import React from "react";
import styled from "styled-components";
import Header from "../components/MainHeader";
import LongText from "../components/Text/LongText";
import Image from "../components/Text/Image";
import Container from "../components/Text/Container";
import portret from "../assets/img/portret.jpg";

const StyledWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;
const StyledContentWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-top: 17vh;
`;

const StyledPictureWrapper = styled.div`
  height: 50rem;
  width: 50rem;
  margin-bottom: 2rem;
`;

const StyledPicture = styled.img`
  height: 100%;
  width: 100%;
`;

const AboutTemplate = (props) => {
  return (
    <StyledWrapper>
      <StyledContentWrapper>
        <Image img="https://cdn.pixabay.com/photo/2020/11/06/15/38/woman-5718129_960_720.jpg"></Image>
        <Container>
          <Header size="2.5">About Me</Header>
          <LongText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
            pariatur assumenda quae odit illo, asperiores repellat, officia
            ipsum soluta provident fugit exercitationem in aliquid. Quidem
            pariatur deleniti ipsa ratione magni sunt commodi tempore, nam iusto
            veniam debitis eaque odio dolorum. Tempora, ex animi explicabo hic
            porro voluptatem dolorem repellat est. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Ipsam deleniti nostrum maxime quae
            omnis quo temporibus nisi eligendi, quidem enim culpa maiores!
            Corrupti molestiae optio voluptatum consequuntur. Impedit mollitia
            nesciunt eum placeat unde rem perspiciatis eligendi expedita illum
            sed. Eveniet delectus suscipit qui aliquam dolores, magnam
            repellendus eius alias eos?
          </LongText>

          <Header size="2.5">Exhibitions</Header>

          <LongText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
            pariatur assumenda quae odit illo, asperiores repellat, officia
            ipsum soluta provident fugit exercitationem in aliquid. Quidem
            pariatur deleniti ipsa ratione magni sunt commodi tempore, nam iusto
            veniam debitis eaque odio dolorum. Tempora, ex animi explicabo hic
            porro voluptatem dolorem repellat est. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Ipsam deleniti nostrum maxime quae
            omnis quo temporibus nisi eligendi, quidem enim culpa maiores!
            Corrupti molestiae optio voluptatum consequuntur. Impedit mollitia
            nesciunt eum placeat unde rem perspiciatis eligendi expedita illum
            sed. Eveniet delectus suscipit qui aliquam dolores, magnam
            repellendus eius alias eos?
          </LongText>
        </Container>
        <StyledPictureWrapper>
          <StyledPicture src={portret}></StyledPicture>
        </StyledPictureWrapper>
      </StyledContentWrapper>
    </StyledWrapper>
  );
};

export default AboutTemplate;
