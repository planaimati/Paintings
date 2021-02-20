import React, { useState, useEffect } from "react";
import { images } from "../API/category";

export const AppContext = React.createContext();
export const AppContextProvider = ({ children }) => {
  //state
  const [activeMenu, setActiveMenu] = useState(0);
  const [galleryItems, setGalleryItems] = useState(images);
  const [imageIndex, setImageIndex] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);

  // domyslna kategoria
  useEffect(() => {
    window.addEventListener("scroll", toggleScroll);
    setGalleryItems(images);
  }, []);

  const toggleScroll = () => {
    setScrollTop((prevState) => (prevState = window.pageYOffset));
  };

  //single image gallery

  const toggleSetImageIndex = (x) => {
    setImageIndex((prevState) => (prevState = x));
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

        toggleSetImageIndex,
        imageIndex,
        scrollTop,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
