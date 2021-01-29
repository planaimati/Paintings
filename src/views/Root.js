import React, { useContext, useEffect } from "react";
import Theme from "../theme/Theme.js";
import GlobalStyle from "../theme/GlobalStyle";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import HomeView from "./HomeView";
import ContactView from "./ContactView";
import GalleryView from "./GalleryView";
import AboutView from "./AboutView";
import MenuTemplate from "../templates/MenuTemplate";
import Burger from "../components/Burger";
import SingleProductView from "./SingleProductView";
//import { useLocation } from "react-router-dom";

const Root = () => {
  //let { pathname } = useLocation();
  return (
    <Theme>
      <BrowserRouter>
        <GlobalStyle />
        <MenuTemplate></MenuTemplate>

        <Switch>
          <Route exact path="/" component={HomeView}></Route>
          <Route exact path="/gallery" component={GalleryView}></Route>
          <Route
            exact
            path="/gallery/:id"
            component={SingleProductView}
          ></Route>
          <Route exact path="/about" component={AboutView}></Route>
          <Route exact path="/contact" component={ContactView}></Route>
        </Switch>
      </BrowserRouter>
    </Theme>
  );
};

export default Root;
