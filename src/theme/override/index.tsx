import { pink } from "@mui/material/colors"
import { createTheme } from "@mui/material/styles"
const themeOverride = createTheme({
  palette: {
    // primary: {
    //   light: pink[50],
    //   main: pink[100],
    //   dark: pink[200],
    // },
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
        h5: {
          "font-size": "36px",
        },
      },
    },
  },
})

export default themeOverride
