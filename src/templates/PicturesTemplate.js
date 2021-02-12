import React, { useContext } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/context";
import PictureItem from "../components/PictureItem";
import MainHeader from "../components/MainHeader";

const StyledContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const StyledWrapper = styled.div`
  margin-top: 15vh;
  height: 85%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 5vh;
  @media (max-width: 480px) {
    height: auto;
    flex-direction: column;
  }
`;

const StyledImagesContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const PicturesTemplate = () => {
  const { galleryItems } = useContext(AppContext);

  const { id } = useParams();

  const items = galleryItems.find((item) => item.category === id);

  const category = items.series.map((item) => (
    <StyledImagesContainer key={item.id}>
      <MainHeader>{item.name}</MainHeader>
      {item.images.map((item) => (
        <PictureItem
          src={item.images[0]}
          key={item.id}
          id={item.id}
          series={item.seriesName}
        ></PictureItem>
      ))}
    </StyledImagesContainer>
  ));

  return (
    <StyledContainer>
      <StyledWrapper>{category}</StyledWrapper>
    </StyledContainer>
  );
};

export default PicturesTemplate;
