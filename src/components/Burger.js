import React, { useContext } from "react";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import { AppContext } from "../context/context.js";

const StyledFaBars = styled(FaBars)`
  position: absolute;
  top: 20px;
  right: 20px;
  color: ${(props) => (props.isactive ? "black" : "white")};

  font-size: 2rem;
  cursor: pointer;
  z-index: 2;
  transition: 0.4s linear;

  @media (max-width: 480px) {
    display: block;
  }
`;

const Burger = () => {
  const { activeMenu, toggleSetActiveMenu } = useContext(AppContext);
  return (
    <StyledFaBars
      onClick={toggleSetActiveMenu}
      isactive={activeMenu}
    ></StyledFaBars>
  );
};

export default Burger;
