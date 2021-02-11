import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { AppContext } from "../context/context";

const StyledWrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ContentWrapper = styled.div`
  margin-top: 15vh;
  height: 80%;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledImageWrapper = styled.div`
  height: 100%;
  width: 30rem;
`;

const StyledImage = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 5px;
`;

const StyledImageSmall = styled.img`
  height: 15rem;
  width: 10rem;
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
  console.log(pictures);
  const picture = pictures.images.find((item) => item.id.toString() === id);

  console.log(pictures);
  console.log(id);

  // pojedynczy obraz
  //const singlePicture = singlePictureItem.series.pictures.find(
  //(item) => item.id.toString() === id
  //);

  //console.log(singlePicture);

  console.log(picture);

  return (
    <StyledWrapper>
      <ContentWrapper>
        <StyledImageWrapper>
          <StyledImage src={picture.images[imageIndex]} alt="" />
        </StyledImageWrapper>
        <p>{picture.title}</p>

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
      </ContentWrapper>
    </StyledWrapper>
  );
};

export default SinglePictureItem;
