import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../context/context";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const StyledWrapper = styled.div`
  min-height: 110vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 35vh;
`;

const StyledImageWrapper = styled.div`
  position: relative;
  display: flex;
  height: 100vh;
  width: 30%;
  overflow: hidden;
  margin-bottom: 3rem;

  @media (max-width: 900px) {
    width: 50%;
  }
  @media (max-width: 480px) {
    width: 90%;
    height: 90vh;
  }
`;

const StyledImage = styled.img`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: -100%;
  transform: ${(props) =>
    props.active === "active"
      ? "translateX(100%)"
      : props.active === "prawo"
      ? "translateX(200%)"
      : null};
`;

const StyledArrowContainer = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${(props) => props.pos};
  z-index: 99;
  font-size: 4rem;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const StyledDescWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;
  justify-content: space-between;
`;

const StyledDesc = styled.h4`
  text-transform: capitalize;
  letter-spacing: 0.2rem;
  font-weight: 300;
`;
const Line = styled.div`
  height: 0.03rem;
  width: 50%;
  background-color: grey;
  margin-bottom: 3rem;
`;

const Gallery = (props) => {
  const { index, toggleSetIndexIncrease, toggleSetIndexDecrease } = useContext(
    AppContext
  );
  console.log(index);
  return (
    <StyledWrapper>
      <StyledImageWrapper>
        <StyledArrowContainer pos="left:0" onClick={toggleSetIndexDecrease}>
          <AiOutlineLeft />
        </StyledArrowContainer>
        <StyledArrowContainer pos="right:0" onClick={toggleSetIndexIncrease}>
          <AiOutlineRight />
        </StyledArrowContainer>
        {props.images.map((item, itemIndex) => {
          let active = "prawo";

          if (index === itemIndex) {
            active = "active";
          }
          return (
            <StyledImage
              active={active}
              src={item.original}
              key={itemIndex}
            ></StyledImage>
          );
        })}
      </StyledImageWrapper>
      <Line></Line>
      <StyledDescWrapper>
        <StyledDesc>Name:</StyledDesc>
        <StyledDesc>Technique:</StyledDesc>
        <StyledDesc>Dimensions:</StyledDesc>
      </StyledDescWrapper>
    </StyledWrapper>
  );
};

export default Gallery;
