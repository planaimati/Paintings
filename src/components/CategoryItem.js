import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledWrapper = styled.div`
  height: 6rem;
  width: 4rem;

  background-repeat: no-repeat;
  background-size: cover;
  transition: 0.5s;

  @media (max-width: 480px) {
    width: 100%;
    height: 100vh;
  }
`;

const StyledImageWrapper = styled.div`
  width: 100%;
  height: 80%;
  background: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: cover;
  transition: 0.2s;
  &:hover {
    filter: brightness(0.8);
  }
`;
const StyledTextWrapper = styled.div`
  display: flex;
  height: 10%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const StyledItemName = styled.h5`
  margin-top: 0.5rem;
  text-transform: capitalize;
  letter-spacing: 0.2rem;
  font-weight: 300;
`;
const StyledItemPrice = styled.p``;

const StyledItemLine = styled.div`
  height: 0.08rem;
  width: 100%;
  background-color: grey;
`;

const CategoryItem = (props) => {
  return (
    <StyledWrapper>
      <Link to={`/gallery/${props.id}`}>
        <StyledImageWrapper img={props.img}></StyledImageWrapper>
      </Link>

      <StyledTextWrapper>
        <StyledItemName>{props.category}</StyledItemName>
        <StyledItemPrice>{props.id}</StyledItemPrice>
        <StyledItemLine></StyledItemLine>
      </StyledTextWrapper>
    </StyledWrapper>
  );
};

export default CategoryItem;
