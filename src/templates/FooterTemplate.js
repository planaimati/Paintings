import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  display: none;
  height: 25rem;
  width: 120rem;
  background-color: ${(props) => props.theme.color.footerLightColor};
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);

  @media (max-width: 480px) {
  }
`;

const FooterTemplate = () => {
  return <StyledWrapper></StyledWrapper>;
};

export default FooterTemplate;
