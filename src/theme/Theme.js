import { ThemeProvider } from "styled-components";
import React from "react";

const theme = {
  color: {
    mainDark: "#1D1D1D",
    mainLight: "#ECECEC",
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
