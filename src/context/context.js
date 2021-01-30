import React, { useState, useEffect } from "react";
import { images } from "../API/category";

export const AppContext = React.createContext();
export const AppContextProvider = ({ children }) => {
  //state
  const [activeMenu, setActiveMenu] = useState(0);
  const [galleryItems, setGalleryItems] = useState(images);
  const [newGalleryItems, setNewGalleryItems] = useState([]);
  const [imagesCategory, setImages] = useState(true);
  const [objects, setObjects] = useState(false);
  const [others, setOthers] = useState(false);
  const [index, setIndex] = useState(0);
  // domyslna kategoria
  useEffect(() => {
    setGalleryItems(images);
    setNewGalleryItems(images.filter((item) => item.category === "images"));
  }, []);

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

  const toggleSetNewGalleryItems = (e) => {
    const newArray = galleryItems.filter((item) => {
      return item.category === e.target.id;
    });

    if (e.target.id === "images") {
      setNewGalleryItems((prevState) => (prevState = newArray));
      setImages(true);
      setObjects(false);
      setOthers(false);
    } else if (e.target.id === "objects") {
      setObjects(true);
      setImages(false);
      setOthers(false);
      setNewGalleryItems((prevState) => (prevState = newArray));
    } else if (e.target.id === "others") {
      setOthers(true);
      setImages(false);
      setObjects(false);
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
        imagesCategory,
        others,
        objects,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
