import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { AppContext } from "../context/context";
import MainHeader from "./MainHeader";

const StyledWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;
const StyledContainer = styled.div`
  margin-top: 15vh;
  height: 130vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-around;
  flex-wrap: wrap;

  @media (max-width: 730px) {
    height: auto;
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 480px) {
    height: auto;
    flex-direction: column;
    align-items: center;
  }
`;

const PicturesWrapper = styled.div`
  margin-top: 2rem;
  height: 80%;
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 5rem;
  @media (max-width: 480px) {
    width: 100%;
  }
`;

const StyledLine = styled.div`
  height: 0.5px;
  width: 100%;
  margin: 2rem 0 2rem 0;
  background-color: #b0b0b0;
`;

const DescWrapper = styled.div`
  margin-top: 2rem;
  height: 80%;
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 5rem;
`;

const TextWrapper = styled.div`
  height: 50%;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const StyledText = styled.span`
  color: black;
  font-size: 1.8rem;
  font-weight: 500;
  font-family: "Nunito", sans-serif;
  text-align: left;
  line-height: 2.8rem;
  letter-spacing: 0.1rem;
  word-wrap: break-word;
  display: inline-block;
`;
const StyledSpan = styled(StyledText)`
  font-weight: 300;
  margin-left: 1rem;
  text-transform: capitalize;
`;

const LongText = styled(StyledText)`
  font-weight: 300;
`;

const StyledImageWrapper = styled.div`
  height: 70%;
  width: 30rem;
`;

const StyledImage = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 5px;
`;

const StyledImageSmallWrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  width: 35rem;
  align-items: center;
  justify-content: space-between;
`;

const StyledImageSmall = styled.img`
  height: 15rem;
  width: 10rem;
  border-radius: 3px;
`;

const SinglePictureItem = (props) => {
  // id  klikniętego obrazka
  const { id } = useParams();
  // nazwa poprzdniego routa który odpowiada nawie kategorii jaka nas interesuje
  const prevPath = props.location.state.id;
  const series = props.location.state.series;
  const { galleryItems, imageIndex, toggleSetImageIndex } = useContext(
    AppContext
  );

  // wybrana kategoria produktów
  const category = galleryItems.find((item) => item.category === prevPath);
  const pictures = category.series.find((item) => item.name === series);
  const picture = pictures.images.find((item) => item.id.toString() === id);

  return (
    <StyledWrapper>
      <StyledContainer>
        <MainHeader>tytuł obrazu</MainHeader>

        <PicturesWrapper>
          <StyledImageWrapper>
            <StyledImage src={picture.images[imageIndex]} alt="" />
          </StyledImageWrapper>
          <StyledImageSmallWrapper>
            <StyledImageSmall
              src={picture.images[0]}
              onClick={() => toggleSetImageIndex(0)}
            ></StyledImageSmall>
            <StyledImageSmall
              src={picture.images[1]}
              onClick={() => toggleSetImageIndex(1)}
            ></StyledImageSmall>
            <StyledImageSmall
              src={picture.images[2]}
              onClick={() => toggleSetImageIndex(2)}
            ></StyledImageSmall>
          </StyledImageSmallWrapper>
        </PicturesWrapper>

        <DescWrapper>
          <TextWrapper>
            <StyledText>
              tytuł obrazu:<StyledSpan>kraina ciszy</StyledSpan>
            </StyledText>
            <StyledText>
              wymiary:<StyledSpan>160x90</StyledSpan>
            </StyledText>
            <StyledText>
              technika:<StyledSpan>oil</StyledSpan>
            </StyledText>
            <StyledText>
              seria:<StyledSpan>terra incognita</StyledSpan>
            </StyledText>
            <StyledText>
              rok:<StyledSpan>2020</StyledSpan>
            </StyledText>
            <StyledLine></StyledLine>

            <LongText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores labore corporis dolorem quod, incidunt mollitia ipsa
              recusandae quae laudantium odio, nulla dolorum, nisi corrupti esse
              blanditiis sint quibusdam dolores eos quisquam? Ab temporibus
              recusandae expedita quia enim, eos cum consequatur ullam deserunt
              doloremque quod eveniet laborum in! Delectus, quae praesentium.
            </LongText>
          </TextWrapper>
        </DescWrapper>
      </StyledContainer>
    </StyledWrapper>
  );
};

export default SinglePictureItem;
