import React, { useContext } from "react";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import { AppContext } from "../context/context.js";

const StyledFaBars = styled(FaBars)`
  position: absolute;
  top: 20px;
  left: 20px;
  color: black;
  font-size: 3rem;
  cursor: pointer;
  z-index: 2;
  display: block;

  /* @media (max-width: 480px) {
    display: block;
  } */
`;

const StyledWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  position: relative;
`;

const MainTemplate = () => {
  const { toggleSetActiveMenu } = useContext(AppContext);
  return (
    <StyledWrapper>
      <StyledFaBars onClick={toggleSetActiveMenu}></StyledFaBars>
    </StyledWrapper>
  );
};

export default MainTemplate;
