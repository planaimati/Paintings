import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { AppContext } from "../context/context";
import MainHeader from "./MainHeader";

const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;
const StyledContainer = styled.div`
  margin-top: 15vh;
  height: 100vh;
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
  width: 50%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 5rem;
  @media (max-width: 730px) {
    width: 90%;
    align-items: center;
  }
  @media (max-width: 480px) {
    width: 100%;
    align-items: center;
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
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 5rem;
  @media (max-width: 730px) {
    width: 90%;
  }
  @media (max-width: 480px) {
    width: 90%;
  }
`;

const TextWrapper = styled.div`
  height: 50%;
  display: flex;
  width: 60%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  @media (max-width: 730px) {
    width: 100%;
    align-items: center;
  }
  @media (max-width: 480px) {
    align-items: flex-start;
    width: 100%;
  }
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
  height: 60vh;
  width: 35rem;
  margin-right: 2rem;
  @media (max-width: 480px) {
    margin-right: 0;
    width: 90%;
    height: 85vh;
  }
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
  margin-right: 2rem;
  @media (max-width: 480px) {
    margin-right: 0;
  }
`;

const StyledImageSmall1 = styled.img`
  height: 15rem;
  width: 10rem;
  cursor: pointer;
  border-radius: 3px;

  &:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.4);
    transform: scale(1.01);
  }
  border: ${(props) => (props.active === 0 ? "2px solid #222222" : "none")};
`;
const StyledImageSmall2 = styled(StyledImageSmall1)`
  border: ${(props) => (props.active === 1 ? "2px solid #222222" : "none")};
`;
const StyledImageSmall3 = styled(StyledImageSmall1)`
  border: ${(props) => (props.active === 2 ? "2px solid #222222" : "none")};
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
            <StyledImageSmall1
              src={picture.images[0]}
              onClick={() => toggleSetImageIndex(0)}
              active={imageIndex}
            ></StyledImageSmall1>
            <StyledImageSmall2
              src={picture.images[1]}
              onClick={() => toggleSetImageIndex(1)}
              active={imageIndex}
            ></StyledImageSmall2>
            <StyledImageSmall3
              src={picture.images[2]}
              onClick={() => toggleSetImageIndex(2)}
              active={imageIndex}
            ></StyledImageSmall3>
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
