import { PaletteOptions, createTheme, css, ThemeOptions } from "@mui/material/styles"
// import overrides from "./overrides"
import Overrides from "./overrides"
export type AllowedTheme = NonNullable<PaletteOptions["mode"]>
import { Theme } from "@mui/material/styles"
export const DEFAULT_THEME: AllowedTheme = "light"
// ** Vars
import { deepPurple } from "@mui/material/colors"

export let lightTheme: Theme = createTheme({
  palette: {
    mode: "light",

    customColors: {
      face: "#000",
    },

    primary: {
      main: deepPurple[400],
    },
    secondary: {
      main: deepPurple[100],
    },
    background: {
      default: deepPurple[50],
      paper: deepPurple[100],
    },
    text: {
      primary: deepPurple[600],
      secondary: deepPurple[300],
      disabled: "rgba(94,53,177,0.36)",
    },
    divider: "rgba(224,190,190,0.18)",
  },
  typography: {
    fontFamily: "Roboto Condensed",
  },
})

const overrideComponents = Overrides(lightTheme)

lightTheme = createTheme(lightTheme, {
  components: {
    ...overrideComponents,
  },
})
export const darkTheme = createTheme({
  palette: {
    mode: "dark",

    customColors: {
      face: "#ccc",
    },

    primary: {
      main: "#4d4ddc",
    },
    secondary: {
      main: "#afafd2",
    },
    background: {
      default: "#111333",
      paper: "#141b60",
    },
    text: {
      secondary: "#f1bcbc",
      disabled: "rgba(216,213,213,0.38)",
      primary: "#efefef",
    },
    divider: "rgba(224,190,190,0.18)",
  },
  typography: {
    fontFamily: "Roboto Condensed",
  },

  components: {
    // MuiCard: {
    //   defaultProps: {
    //     elevation: 12,
    //   },
    //   styleOverrides: {
    //     root: {},
    //   },
    // },
    // MuiTypography: {
    //   styleOverrides: {
    //     // h5: {
    //     //   "font-size": "36px",
    //     // },
    //   },
    // },
    // MuiOutlinedInput: {
    //   styleOverrides: {
    //     notchedOutline: {
    //       borderColor: "#fdf2f2",
    //     },
    //   },
    // },
    // // color: "#6adc4d;",
    // MuiTabs: {
    //   styleOverrides: {
    //     indicator: {
    //       background: "#6adc4d",
    //     },
    //   },
    // },
    // MuiTab: {
    //   styleOverrides: {
    //     root: {
    //       "&.Mui-selected": {
    //         color: "#6adc4d",
    //       },
    //       "&:hover": {
    //         color: "#6adc4d",
    //       },
    //     },
    //   },
    // },
  },
})

export const globalStyles = {}
