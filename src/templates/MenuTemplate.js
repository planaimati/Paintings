import React, { useContext } from "react";
import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
import { AppContext } from "../context/context";
import { useLocation } from "react-router-dom";
import StyledLine from "../components/Line";
import MenuTemplateHome from "./MenuTemplateHome";

const StyledNav = styled.nav`
  position: absolute;
  left: 0;
  top: 0;
  height: 35vh;
  width: 100%;
  background: white;
  z-index: 1;
  transition: 0.3s;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 480px) {
    //grid-template-columns: 1fr;
  }
`;

const StyledHeaderContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const StyledNavHeader = styled(Link)`
  font-size: 4.9rem;
  color: black;
  font-family: "Nunito", sans-serif;
  letter-spacing: 0.1rem;
  text-decoration: none;
  font-weight: 200;
`;

const StyledNavHeaderSmall = styled.h4`
  text-transform: capitalize;
  font-family: "Nunito", sans-serif;
  letter-spacing: 0.55rem;
  font-weight: 300;
  font-size: 1.6rem;
`;

const StyledList = styled.ul`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 80%;
  align-items: center;
  list-style: none;
  grid-column: 2/-1;
  justify-content: space-around;

  @media (max-width: 480px) {
  }

  /* @media (max-width: 480px) {
    //display: ${(props) => (props.isactive ? "flex" : "none")};
    position: absolute;
    top: 0;
    height: 100vh;
    background-color: white;
    right: ${(props) => (props.isactive ? "0" : "-100%")};
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    grid-column: 1/-1;
  } */
`;

const StyledLink = styled.li`
  width: 10rem;
  text-align: center;
`;

const StyledNavLink = styled(NavLink)`
  width: 100%;
  text-decoration: none;
  font-size: 1.3rem;
  text-transform: capitalize;
  color: black;
  font-weight: 300;
  letter-spacing: 0.3rem;
  font-family: "Nunito", sans-serif;

  @media (max-width: 480px) {
    color: black;
    font-size: 1.2rem;
  }
`;

const MenuTemplate = () => {
  const { activeMenu, toggleSetActiveMenu } = useContext(AppContext);

  let { pathname } = useLocation();
  console.log(pathname);

  const colorBgc = pathname === "/about" ? "#212529" : "transparent";
  const colorFont = pathname === "/about" ? "#F8F9FA" : "#F8F9FA";

  const display = pathname === "/" ? "none" : "flex";

  if (pathname === "/") {
    return <MenuTemplateHome></MenuTemplateHome>;
  } else
    return (
      <StyledNav isactive={activeMenu} display={display}>
        <StyledHeaderContainer>
          <StyledNavHeader to="/">Anna Sormus</StyledNavHeader>

          <StyledNavHeaderSmall>malarstwo</StyledNavHeaderSmall>
        </StyledHeaderContainer>
        <StyledList isactive={activeMenu}>
          <StyledLink>
            <StyledNavLink
              to="/"
              color={colorFont}
              onClick={toggleSetActiveMenu}
            >
              Home
            </StyledNavLink>
          </StyledLink>
          <StyledLink>
            <StyledNavLink
              to="/about"
              color={colorFont}
              onClick={toggleSetActiveMenu}
            >
              About
            </StyledNavLink>
          </StyledLink>
          <StyledLink>
            <StyledNavLink to="/gallery" onClick={toggleSetActiveMenu}>
              Gallery
            </StyledNavLink>
          </StyledLink>
          <StyledLink>
            <StyledNavLink to="/contact" onClick={toggleSetActiveMenu}>
              Contact
            </StyledNavLink>
          </StyledLink>
        </StyledList>
        <StyledLine></StyledLine>
      </StyledNav>
    );
};

export default MenuTemplate;
