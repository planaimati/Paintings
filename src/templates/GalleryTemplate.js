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
  color: ${({ active }) => (active ? "black" : "#526163")};
  font-weight: ${({ active }) => (active ? 700 : 300)};
  letter-spacing: 0.3rem;
  background: none;
  border: none;
  transition: 0.3s;
  outline: none;
  cursor: pointer;

  &:hover {
    color: black;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
    margin: 0 0.5rem 0 0.5rem;
  }
`;

const StyledGalleryMenuButonOne = styled(StyledGalleryMenuButon)`
  color: ${({ active }) => (active ? "black" : "#526163")};
  font-weight: ${({ active }) => (active ? 700 : 300)};
`;
const StyledGalleryMenuButonTwo = styled(StyledGalleryMenuButon)`
  color: ${({ active }) => (active ? "black" : "#526163")};
  font-weight: ${({ active }) => (active ? 700 : 300)};
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
  const {
    toggleSetNewGalleryItems,
    newGalleryItems,
    objects,
    others,
    imagesCategory,
  } = useContext(AppContext);

  return (
    <StyledWrapper>
      <StyledGalleryMenu>
        <StyledGalleryMenuButon
          onClick={(e) => toggleSetNewGalleryItems(e)}
          id="images"
          active={imagesCategory}
        >
          Images
        </StyledGalleryMenuButon>
        <StyledGalleryMenuButonOne
          onClick={(e) => toggleSetNewGalleryItems(e)}
          id="objects"
          active={objects}
        >
          Objects
        </StyledGalleryMenuButonOne>
        <StyledGalleryMenuButonTwo
          onClick={(e) => toggleSetNewGalleryItems(e)}
          id="others"
          active={others}
        >
          Others
        </StyledGalleryMenuButonTwo>
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
