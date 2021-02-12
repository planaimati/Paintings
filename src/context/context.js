import React, { useState, useEffect } from "react";
import { images } from "../API/category";

export const AppContext = React.createContext();
export const AppContextProvider = ({ children }) => {
  //state
  const [activeMenu, setActiveMenu] = useState(0);
  const [galleryItems, setGalleryItems] = useState(images);
  const [index, setIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);

  // domyslna kategoria
  useEffect(() => {
    window.addEventListener("scroll", toggleScroll);
    setGalleryItems(images);
  }, []);

  //zmiana indeksu dla obrazków w SmallGallery

  const toggleScroll = () => {
    setScrollTop((prevState) => (prevState = window.pageYOffset));
  };

  //

  const toggleSetImageIndex = (x) => {
    setImageIndex((prevState) => (prevState = x));
  };

  //galeria obrazów dla pojedyńczego itemu

  const toggleSetIndexIncrease = () => {
    if (index === 2) {
      setIndex(-1);
    }
    setIndex((prevState) => prevState + 1);
  };

  const toggleSetIndexDecrease = () => {
    if (index === 0) {
      setIndex(3);
    }
    setIndex((prevState) => prevState + -1);
  };

  // menu settings
  const toggleSetActiveMenu = () => {
    if (activeMenu === 0) {
      setActiveMenu(1);
    } else if (activeMenu === 1) {
      setActiveMenu(0);
    }
  };

  // ustawianie kategorii

  return (
    <AppContext.Provider
      value={{
        activeMenu,
        toggleSetActiveMenu,

        galleryItems,
        index,
        toggleSetIndexIncrease,
        toggleSetIndexDecrease,

        toggleSetImageIndex,
        imageIndex,
        scrollTop,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
