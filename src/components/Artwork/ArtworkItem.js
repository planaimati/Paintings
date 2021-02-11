import React from "react";
import { FiChevronRight } from "react-icons/fi";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";


const StyledWrapper = styled.div`
  height: 45rem;
  width: 30rem;
  display: flex;
  flex-direction: column;
  margin: 2rem;
  align-items: center;
  justify-content: space-around;
`;

const StyledTextContainer = styled.div`
  height: 10%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const StyledImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const StyledLink = styled(Link)`
  font-family: "Nunito", sans-serif;
  text-transform: uppercase;
  font-size: 1.8rem;
  color: #111111;
  font-weight: 300;
  letter-spacing: 0.3rem;
  text-align: center;
  text-decoration: none;
`;

const StyledArrow = styled(FiChevronRight)`
  font-size: 2rem;
  margin-left: 0.5rem;
`;

const ArtworkItem = (props) => {
  const location = useLocation();

  return (
    <StyledWrapper>
      <StyledImage img={props.categoryImg}></StyledImage>
      <StyledTextContainer>
        <StyledLink to={`${location.pathname}/${props.category}`}>
          {props.category}
        </StyledLink>
        <StyledArrow />
      </StyledTextContainer>
    </StyledWrapper>
  );
};

export default ArtworkItem;
