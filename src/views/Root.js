import React from "react";
import Theme from "../theme/Theme.js";
import GlobalStyle from "../theme/GlobalStyle";

import { BrowserRouter, Switch, Route, useRouteMatch } from "react-router-dom";

import HomeView from "./HomeView";
import ContactView from "./ContactView";
import Gallery2DView from "./Gallery2DView";
import Gallery3DView from "./Gallery3DView";
import AboutView from "./AboutView";
import MenuTemplate from "../templates/MenuTemplate";
import PicturesView from "./PicturesView";
import SinglePictureItem from "../components/SinglePictureItem";
//import Burger from "../components/Burger";
//import { useLocation } from "react-router-dom";

const Root = () => {
  //let { pathname } = useLocation();

  //let { path, url } = useRouteMatch();

  //console.log(path, url);
  return (
    <Theme>
      <BrowserRouter>
        <GlobalStyle />
        <MenuTemplate></MenuTemplate>

        <Switch>
          <Route exact path="/" component={HomeView}></Route>
          <Route exact path="/gallery2D" component={Gallery2DView}></Route>
          <Route exact path="/gallery3D" component={Gallery3DView}></Route>
          <Route exact path="/gallery3D/:id" component={PicturesView}></Route>
          <Route exact path="/gallery3D/:id/:id" component={SinglePictureItem}/>

          <Route exact path="/about" component={AboutView}></Route>
          <Route exact path="/contact" component={ContactView}></Route>
        </Switch>
      </BrowserRouter>
    </Theme>
  );
};

export default Root;
