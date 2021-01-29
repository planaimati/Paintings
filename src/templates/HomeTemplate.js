import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../context/context.js";
import Media from "../big components/Media";

const StyledWrapper = styled.div`
  height: 100vh;
  width: 100%;
  padding: 0.3rem;

  @media (max-width: 480px) {
  }
`;

const StyledWrapperTwo = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  background-color: ${(props) => props.theme.color.mainDark};
  background-image: url("https://images.pexels.com/photos/696644/pexels-photo-696644.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
`;

const HomeTemplate = () => {
  const { activeMenu } = useContext(AppContext);
  return (
    <StyledWrapper isactive={activeMenu} id="home">
      <StyledWrapperTwo></StyledWrapperTwo>
    </StyledWrapper>
  );
};

export default HomeTemplate;
