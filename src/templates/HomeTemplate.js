import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../context/context.js";

const StyledWrapper = styled.div`
  background-image: url("https://cdn.pixabay.com/photo/2017/05/12/17/27/algae-2307691_960_720.jpg");
  height: 100vh;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  //transform: ${(props) => (props.isactive ? "translateX(20%)" : null)};
  transition: 0.4s;
`;

const HomeTemplate = () => {
  const { activeMenu } = useContext(AppContext);
  return <StyledWrapper isactive={activeMenu}></StyledWrapper>;
};

export default HomeTemplate;
