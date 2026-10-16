'use client';

import { createTheme } from "@mui/material/styles";
import { roboto } from "./fonts";

const theme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});

export default theme;
