import { PaletteOptions, createTheme, css, ThemeOptions } from "@mui/material/styles"

export type AllowedTheme = NonNullable<PaletteOptions["mode"]>

export const DEFAULT_THEME: AllowedTheme = "dark"

export const lightTheme: ThemeOptions = createTheme({
  palette: {
    primary: {
      main: "#4d4ddc",
    },
    secondary: {
      main: "#7171b3",
    },
    text: {
      secondary: "#3466bf",
      disabled: "rgba(154,154,226,0.38)",
      primary: "#131564",
    },
    divider: "rgba(224,190,190,0.18)",
    background: {
      default: "#fdf2f2",
      paper: "#4ea0dc",
    },
  },
  typography: {
    fontFamily: "Roboto Condensed",
  },
  components: {
    MuiCard: {
      defaultProps: {
        elevation: 12,
      },
      styleOverrides: {
        root: {},
      },
    },
    MuiTypography: {
      styleOverrides: {
        // h5: {
        //   "font-size": "36px",
        // },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: "#111333",
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            background: "#4d4ddc",
            color: "#fdf2f2",
          },
        },
      },
    },
  },
})

export const darkTheme = createTheme({
  palette: {
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
    MuiCard: {
      defaultProps: {
        elevation: 12,
      },
      styleOverrides: {
        root: {},
      },
    },
    MuiTypography: {
      styleOverrides: {
        // h5: {
        //   "font-size": "36px",
        // },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: "#fdf2f2",
        },
      },
    },

    // color: "#6adc4d;",
    MuiTabs: {
      styleOverrides: {
        indicator: {
          background: "#6adc4d",
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            color: "#6adc4d",
          },
          "&:hover": {
            color: "#6adc4d",
          },
        },
      },
    },
  },
})

export const globalStyles = {}
