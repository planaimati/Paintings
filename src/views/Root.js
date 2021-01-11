import React, { useContext } from "react";
import Theme from "../theme/Theme.js";
import GlobalStyle from "../theme/GlobalStyle";
import { AppContext } from "../context/context";

const Root = () => {
  const { xd } = useContext(AppContext);

  console.log(xd);
  return (
    <Theme>
      <GlobalStyle />
      <div>hello from app</div>;
    </Theme>
  );
};

export default Root;
