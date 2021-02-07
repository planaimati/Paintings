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
  height: 80%;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledImageWrapper = styled.div`
  height: 50rem;
  width: 30rem;
`;

const StyledImage = styled.img`
  height: 100%;
  width: 100%;
`;

const SinglePictureItem = (props) => {
  // id  klikniętego obrazka
  const { id } = useParams();
  // nazwa poprzdniego routa który odpowiada nawie kategorii jaka nas interesuje
  const prevPath = props.location.state.id;
  const { galleryItems } = useContext(AppContext);

  // wybrana kategoria produktów
  const singlePictureItem = galleryItems.find(
    (item) => item.category === prevPath
  );
  // pojedynczy obraz
  const singlePicture = singlePictureItem.series.pictures.find(
    (item) => item.id.toString() === id
  );

  console.log(singlePicture);

  return (
    <StyledWrapper>
      <ContentWrapper>
        <StyledImageWrapper>
          <StyledImage src={singlePicture.img3} alt="" />
        </StyledImageWrapper>
      </ContentWrapper>
    </StyledWrapper>
  );
};

export default SinglePictureItem;
