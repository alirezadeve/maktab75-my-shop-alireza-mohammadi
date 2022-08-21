
import { createTheme } from "@mui/material/styles";
import { faIR } from "@mui/material/locale";
const font = "'Vazir FD', sans-serif";

const theme = createTheme(
  {
    direction: "rtl",
 
    typography: {
      fontFamily: font,
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: `
        @font-face {
          font-family: ''Vazir FD', sans-serif;
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          font-size: 18px;
        }
      `,
      },
    },
  },
  faIR
);

export default theme;
