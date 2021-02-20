import React from "react";
import { FiChevronRight } from "react-icons/fi";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const StyledWrapper = styled.div`
  height: 75rem;
  width: 40rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin: 1rem 3rem 0rem 3rem;

  @media (max-width: 480px) {
    height: 80vh;
    width: 100%;
    margin: 1rem 0 0 0;
  }
`;

const StyledImage = styled(Link)`
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 3px;
  opacity: 1;
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.4);
    transform: scale(1.01);
  }
`;

const StyledTextContainer = styled.div`
  margin-top: 1rem;
  height: 10%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const StyledDesc = styled.p`
  font-family: "Nunito", sans-serif;
  text-transform: uppercase;
  font-size: 1.8rem;
  color: #111111;
  font-weight: 500;
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
      <StyledImage
        img={props.categoryImg}
        to={`${location.pathname}/${props.category}`}
      ></StyledImage>
      <StyledTextContainer>
        <StyledDesc>{props.category}</StyledDesc>
        <StyledArrow />
      </StyledTextContainer>
    </StyledWrapper>
  );
};

export default ArtworkItem;
