import { createTheme } from "@mui/material";

var theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#D90087",
    },
    secondary: {
      main: "#15182B",
    },
    //tertiary color
    tertiary: {
      main: "#000000",
      text: "#A9A9A9",
      light: "#FFFFFF",
      lightGrey: "#EDEDEF",
      lightSmoke: "#f6f6f6",
      lightPurple: "#F4F3FF",
      lightGrey2: "#E0E0E0",
      red: "#E2001A",
      green: "#28B894",
      yellow: "#E28E10",
      lightGrey3: "#999999",
    },
    green: {
      main: "#28B894",
    },
    yellow: {
      main: "#E28E10",
    },
    transparent: {
      main: "transparent",
    },

    border: { main: "#B4BCC4" },
    bg: { main: "linear-gradient(#8d5ac2, #6b16c2)", bgCalendar: "#EFEFEF" },
  },
  typography: {
    fontFamily: "sans-serif",
  },
  fontSize: {
    34: "34px",
    24: "24px",
    22: "22px",
    20: "20px",
    18: "18px",
    16: "16px",
    14: "14px",
    12: "12px",
    11: "11px",
    10: "10px",
    8: "8px",
  },
});

export default theme;
