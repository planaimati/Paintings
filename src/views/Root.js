import React, { useContext } from "react";
import Theme from "../theme/Theme.js";
import GlobalStyle from "../theme/GlobalStyle";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomeView from "./HomeView";
import GalleryView from "./GalleryView";
import AboutView from "./AboutView";
import MenuTemplate from "../templates/MenuTemplate";
import Burger from "../components/Burger";

const Root = () => {
  return (
    <Theme>
      <BrowserRouter>
        <GlobalStyle />

        <MenuTemplate></MenuTemplate>
        <Burger></Burger>
        <Switch>
          <Route exact path="/" component={HomeView}></Route>
          <Route exact path="/gallery" component={GalleryView}></Route>
          <Route exact path="/about" component={AboutView}></Route>
        </Switch>
      </BrowserRouter>
    </Theme>
  );
};

export default Root;
