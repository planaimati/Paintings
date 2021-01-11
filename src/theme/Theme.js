import { ThemeProvider } from "styled-components";
import React from "react";

const theme = {};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
