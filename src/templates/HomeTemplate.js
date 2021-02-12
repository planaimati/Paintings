import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../context/context.js";
import Media from "../components/MediaIcon";
import BGC from "../assets/img/20190219_sciana1.jpg";
import BGC1 from "../assets/img/20190219_sciana2.jpg";

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
  //background-color: ${(props) => props.theme.color.mainDark};
  background-image: linear-gradient(
      to right bottom,
      rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 0.8)
    ),
    url(${(props) => props.bgc});
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
`;

const HomeTemplate = () => {
  const { activeMenu } = useContext(AppContext);
  return (
    <StyledWrapper isactive={activeMenu} id="home">
      <StyledWrapperTwo bgc={BGC1}></StyledWrapperTwo>
      <Media></Media>
    </StyledWrapper>
  );
};

export default HomeTemplate;
