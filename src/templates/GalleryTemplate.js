import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../context/context";
import CategoryItem from "../components/CategoryItem";

const StyledWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  margin-top: 35vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const StyledGalleryMenu = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 3rem;
`;

const StyledGalleryMenuButon = styled.button`
  font-family: "Nunito", sans-serif;
  font-size: 2rem;
  color: black;
  font-weight: 300;
  letter-spacing: 0.3rem;
  background: none;
  border: none;

  @media (max-width: 480px) {
    font-size: 1.5rem;
    margin: 0 0.5rem 0 0.5rem;
  }
`;

const StyledGalleryItemsWrapper = styled.div`
  width: 100%;
  min-height: 75vh;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  justify-items: center;
  //align-content: center;
  gap: 4rem;
  padding: 0 4rem 0 4rem;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const StyledLine = styled.div`
  height: 0.5px;
  width: 80%;
  background-color: grey;
  margin-bottom: 3rem;
`;

const GalleryTemplate = () => {
  const { toggleSetNewGalleryItems, newGalleryItems } = useContext(AppContext);
  return (
    <StyledWrapper>
      <StyledGalleryMenu>
        <StyledGalleryMenuButon
          onClick={(e) => toggleSetNewGalleryItems(e)}
          id="images"
        >
          Images
        </StyledGalleryMenuButon>
        <StyledGalleryMenuButon
          onClick={(e) => toggleSetNewGalleryItems(e)}
          id="objects"
        >
          Objects
        </StyledGalleryMenuButon>
        <StyledGalleryMenuButon
          onClick={(e) => toggleSetNewGalleryItems(e)}
          id="others"
        >
          Others
        </StyledGalleryMenuButon>
      </StyledGalleryMenu>
      <StyledLine></StyledLine>
      <StyledGalleryItemsWrapper>
        {newGalleryItems.map((item) => (
          <CategoryItem {...item} img={item.img1} key={item.id}>
            {item.category}
          </CategoryItem>
        ))}
      </StyledGalleryItemsWrapper>
    </StyledWrapper>
  );
};

export default GalleryTemplate;
