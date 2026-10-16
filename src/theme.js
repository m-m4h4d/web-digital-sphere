'use client';

import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { roboto } from "./fonts";

// responsiveFontSizes scales the h1-h6 variants down on smaller screens.
const theme = responsiveFontSizes(
  createTheme({
    typography: {
      fontFamily: roboto.style.fontFamily,
    },
  })
);

export default theme;
