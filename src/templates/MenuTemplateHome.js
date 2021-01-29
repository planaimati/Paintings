import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledNav = styled.nav`
  position: absolute;
  right: 0;
  top: 60%;
  height: 35vh;
  width: 40%;
  background: transparent;
  z-index: 1;
  transition: 0.3s;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  transform: translateY(-50%);
  @media (max-width: 480px) {
    width: 80%;
  }
`;

const StyledHeaderContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const StyledNavHeader = styled.h1`
  font-size: 3.5rem;
  font-family: "Nunito", sans-serif;
  letter-spacing: 0.1rem;
  text-decoration: none;
  font-weight: 200;
  color: white;
  @media (max-width: 480px) {
    font-size: 2.5rem;
  }
`;

const StyledNavHeaderSmall = styled.h4`
  text-transform: capitalize;
  font-family: "Nunito", sans-serif;
  letter-spacing: 0.55rem;
  font-size: 1.8rem;
  color: white;
`;

const StyledList = styled.ul`
  display: flex;
  flex-direction: row;
  height: 1000%;
  width: 90%;
  align-items: flex-start;
  list-style: none;
  grid-column: 2/-1;
  justify-content: space-around;
  margin-top: 2rem;
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
  color: white;
  font-weight: 300;
  letter-spacing: 0.3rem;
  font-family: "Nunito", sans-serif;

  @media (max-width: 480px) {
    color: black;
    font-size: 1.5rem;
  }
`;

const MenuTemplateHome = () => {
  return (
    <StyledNav>
      <StyledHeaderContainer>
        <StyledNavHeader to="/">Anna Sormus</StyledNavHeader>
        <StyledNavHeaderSmall>malarstwo</StyledNavHeaderSmall>
      </StyledHeaderContainer>
      <StyledList>
        <StyledLink>
          <StyledNavLink to="/about">About</StyledNavLink>
        </StyledLink>
        <StyledLink>
          <StyledNavLink to="/gallery">Gallery</StyledNavLink>
        </StyledLink>
        <StyledLink>
          <StyledNavLink to="/contact">Contact</StyledNavLink>
        </StyledLink>
      </StyledList>
    </StyledNav>
  );
};

export default MenuTemplateHome;
