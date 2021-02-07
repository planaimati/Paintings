import React from "react";
import styled from "styled-components";
import { Link, useRouteMatch, useLocation, useParams } from "react-router-dom";

const StyledImageWrapper = styled.div`
  height: 20rem;
  width: 14rem;
  margin: 1rem;
`;
const StyledImage = styled.img`
  height: 100%;
  width: 100%;
`;
const StyledLink = styled(Link)``;

const PictureItem = (props) => {
  let { url } = useRouteMatch();

  let { id } = useParams();

  return (
    <StyledImageWrapper>
      <StyledLink
        to={{
          pathname: `${url}/${props.id}`,
          state: { id: id },
        }}
      >
        <StyledImage src={props.src}></StyledImage>
      </StyledLink>
    </StyledImageWrapper>
  );
};

export default PictureItem;
