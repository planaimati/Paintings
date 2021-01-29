import React from "react";
import styled from "styled-components";
import { FaInstagram, FaFacebookSquare } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const StyledMail = styled(FaFacebookSquare)`
  color: ${(props) => props.theme.color.mainLight};
`;
const StyledInstagram = styled(FaInstagram)`
  color: ${(props) => props.theme.color.mainLight};
`;
const StyledFacebook = styled(FiMail)`
  color: ${(props) => props.theme.color.mainLight};
`;

const MediaIcon = (props) => {
  if (props.icon === "ig") {
    return <StyledInstagram></StyledInstagram>;
  } else if (props.icon === "mail") {
    return <StyledMail></StyledMail>;
  } else if (props.icon === "fb") {
    return <StyledFacebook></StyledFacebook>;
  }
};

export default MediaIcon;
