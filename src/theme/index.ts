import { PaletteOptions, createTheme, css } from "@mui/material/styles"

export type AllowedTheme = NonNullable<PaletteOptions["mode"]>

export const DEFAULT_THEME: AllowedTheme = "dark"

export const lightTheme = createTheme({
  palette: {
    primary: {
      main: "#1f246f",
    },
    secondary: {
      main: "#5a62d8",
    },
    background: {
      default: "#fbf9ff",
      paper: "#cdcddc",
    },
  },
  typography: {
    fontFamily: "Roboto Condensed",
  },
})

export const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#fbf9ff",
    },
    secondary: {
      main: "#cdcddc",
    },
    background: {
      default: "#1f246f",
      paper: "#717dec",
    },
    text: {
      primary: "#fbf9ff",
      secondary: "#d2d2d2",
      disabled: "rgba(216,213,213,0.38)",
    },
  },
})

// export const globalStyles = css`
//   :root {
//     body {
//       background-color: #fff;
//       color: #121212;
//     }
//   }

//   [data-theme="dark"] {
//     body {
//       background-color: #121212;
//       color: #fff;
//     }
//   }
// `
