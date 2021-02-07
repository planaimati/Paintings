import React, { useContext } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/context";
import PictureItem from "../components/PictureItem";

const StyledContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledImagesContainer = styled.div`
  height: 80%;
  width: 80%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const PicturesTemplate = (props) => {
  const { galleryItems } = useContext(AppContext);

  const { id } = useParams();

  const items = galleryItems.find((item) => item.category === id);

  return (
    <StyledContainer>
      <StyledImagesContainer>
        {items.series.pictures.map((item) => (
          <PictureItem
            src={item.img1}
            alt="xd"
            key={item.id}
            id={item.id}
          ></PictureItem>
        ))}
      </StyledImagesContainer>
    </StyledContainer>
  );
};

export default PicturesTemplate;
