import "../styles/globals.css"
import type { AppProps } from "next/app"
import { Grid, ThemeProvider } from "@mui/material"
import MuiOverride from "src/theme/override"
import PageProvider from "../src/components/helpers/PageProvider"
import { FC } from "react"
import { EmotionCache } from "@emotion/react"
import Header from "src/components/Header"
export interface MUIAppProps extends AppProps {
  emotionCache?: EmotionCache
}

const App: FC<MUIAppProps> = ({ Component, pageProps, emotionCache }) => (
  <PageProvider emotionCache={emotionCache}>
    <ThemeProvider theme={MuiOverride}>
      <Grid container>
        <Grid item xs={12}>
          <Header />
          <Component {...pageProps} />
        </Grid>
      </Grid>
    </ThemeProvider>
  </PageProvider>
)

export default App
