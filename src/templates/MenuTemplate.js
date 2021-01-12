import React, { useContext } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { AppContext } from "../context/context";

const StyledNav = styled.nav`
  position: absolute;
  top: 0;
  left: ${(props) => (props.isactive ? "0" : "-20%")};
  height: 100%;
  width: 20%;
  background: white;
  z-index: 1;
  transition: 0.4s linear;
  display: block;
  /* @media (max-width: 480px) {
    display: block;
  } */
`;

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  align-items: center;
  transition: 0.4s;
  list-style: none;
`;

const StyledLink = styled.li`
  width: 100%;
  text-align: center;
`;

const StyledNavLink = styled(NavLink)`
  width: 100%;
  text-decoration: none;
  text-transform: uppercase;
  color: black;
`;

const MenuTemplate = () => {
  const { activeMenu } = useContext(AppContext);
  return (
    <StyledNav isactive={activeMenu}>
      <StyledList>
        <StyledLink>
          <StyledNavLink to="/">Home</StyledNavLink>
        </StyledLink>
        <StyledLink>
          <StyledNavLink to="/about">About</StyledNavLink>
        </StyledLink>
        <StyledLink>
          <StyledNavLink to="/gallery">Gallery</StyledNavLink>
        </StyledLink>
      </StyledList>
    </StyledNav>
  );
};

export default MenuTemplate;
