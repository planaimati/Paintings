import React, { useContext } from "react";
import MainContainer from "../components/Artwork/MainContainer";
import { AppContext } from "../context/context";
import ArtworkItem from "../components/Artwork/ArtworkItem";

const Gellery3Dtemplate = () => {
  const { galleryItems } = useContext(AppContext);
  return (
    <MainContainer>
      {galleryItems
        .filter(
          (item) =>
            item.category === "glass obiects" || item.category === "monument"
        )
        .map((item) => (
          <ArtworkItem {...item} key={item.id}></ArtworkItem>
        ))}
    </MainContainer>
  );
};

export default Gellery3Dtemplate;
