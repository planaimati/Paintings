import React, { useState, useEffect } from "react";
import { images } from "../API/category";

export const AppContext = React.createContext();
export const AppContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(0);
  const [galleryItems, setGalleryItems] = useState(images);
  const [newGalleryItems, setNewGalleryItems] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setGalleryItems(images);
    setNewGalleryItems(images.filter((item) => item.category === "images"));
  }, []);

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

  // gallery items

  const toggleSetNewGalleryItems = (e) => {
    const newArray = galleryItems.filter((item) => {
      return item.category === e.target.id;
    });

    if (e.target.id === "images") {
      setNewGalleryItems((prevState) => (prevState = newArray));
    } else if (e.target.id === "objects") {
      setNewGalleryItems((prevState) => (prevState = newArray));
    } else if (e.target.id === "others") {
      setNewGalleryItems((prevState) => (prevState = newArray));
    }

    console.log(newGalleryItems);
  };

  return (
    <AppContext.Provider
      value={{
        activeMenu,
        toggleSetActiveMenu,
        toggleSetNewGalleryItems,
        newGalleryItems,
        galleryItems,
        index,
        toggleSetIndexIncrease,
        toggleSetIndexDecrease,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
