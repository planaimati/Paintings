import React from "react";
import { useContext, useEffect } from "react";
import { AppContext } from "../context/context";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Gallery from "../components/Gallery";

const StyledWrapper = styled.div`
  margin-top: 35vh;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SingleProductTemplate = () => {
  const { galleryItems } = useContext(AppContext);

  const { id } = useParams();

  const singleItem = galleryItems.find((item) => {
    return item.id == id;
  });

  const images = [
    {
      id: 1,
      original: singleItem.img1,
    },
    {
      id: 2,
      original: singleItem.img2,
    },
    {
      id: 3,
      original: singleItem.img3,
    },
  ];

  return <Gallery images={images}></Gallery>;
};

export default SingleProductTemplate;
