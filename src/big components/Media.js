import React from "react";
import styled from "styled-components";
import MediaIcon from "../components/MediaIcon";

const StyledContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 50%;
  transform: translateY(-50%);
  right: 0;
`;

const Media = () => {
  return (
    <StyledContainer>
      <MediaIcon icon="ig"></MediaIcon>
      <MediaIcon icon="fb"></MediaIcon>
      <MediaIcon icon="mail"></MediaIcon>
    </StyledContainer>
  );
};

export default Media;
