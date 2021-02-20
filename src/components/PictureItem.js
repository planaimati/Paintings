import React from "react";
import styled from "styled-components";
import { Link, useRouteMatch, useParams } from "react-router-dom";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 23rem;
  width: 17rem;
  margin: 1rem;
`;

const StyledTitle = styled.p`
  margin-top: 0.5rem;
  font-size: 1.5rem;
  text-transform: capitalize;
  color: ${(props) => props.theme.color.fontDark};
  font-weight: 500;
  letter-spacing: 0.3rem;
  font-family: "Nunito", sans-serif;
`;

const StyledImageWrapper = styled.div`
  height: 90%;
  width: 17rem;
  transition: 0.2s;
  &:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.4);
    transform: scale(1.01);
  }
`;
const StyledImage = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 2px;
`;
const StyledLink = styled(Link)``;

const PictureItem = (props) => {
  let { url } = useRouteMatch();

  let { id } = useParams();

  const { series } = props;

  return (
    <StyledWrapper>
      <StyledImageWrapper>
        <StyledLink
          to={{
            pathname: `${url}/${props.id}`,
            state: { id: id, series: series },
          }}
        >
          <StyledImage src={props.src}></StyledImage>
        </StyledLink>
      </StyledImageWrapper>
      <StyledTitle>tytuł</StyledTitle>
    </StyledWrapper>
  );
};

export default PictureItem;
