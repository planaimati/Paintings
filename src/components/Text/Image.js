import React from "react";
import styled from "styled-components";

const StyledImageContainer = styled.div`
  height: 25rem;
  width: 80%;
  background-image: url(${(props) => props.img});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  @media (max-width: 480px) {
    width: 90%;
    height: 25rem;
  }
`;

const Image = (props) => {
  return <StyledImageContainer img={props.img}></StyledImageContainer>;
};

export default Image;
