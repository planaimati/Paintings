import React, { useContext } from "react";
import MainContainer from "../components/Artwork/MainContainer";
import { AppContext } from "../context/context";
import ArtworkItem from "../components/Artwork/ArtworkItem";

const Gallery3Dtemplate = () => {
  const { galleryItems } = useContext(AppContext);

  console.log(galleryItems);

  return (
    <MainContainer>
      {galleryItems
        .filter(
          (item) =>
            item.category === "painting on canvas" ||
            item.category === "glass painting"
        )
        .map((item) => (
          <ArtworkItem {...item} key={item.id}></ArtworkItem>
        ))}
    </MainContainer>
  );
};

export default Gallery3Dtemplate;
