// ** CSS
import "../styles/globals.css"
import { EmotionCache } from "@emotion/react"

// ** Types
import type { AppProps } from "next/app"
import { FC } from "react"

// ** MUI imports
import { Grid } from "@mui/material"

// ** Create Theme
import PageProvider from "src/theme/helpers/PageProvider"

// ** Components Imports
import Header from "src/components/Header"

// ** Context API
import { GlobalContextProvider } from "src/contexts/globalContext"

// ** Lang
import "src/config/i18n"

export interface MUIAppProps extends AppProps {
  emotionCache?: EmotionCache
}
import { useRouter } from "next/router"
const App: FC<MUIAppProps> = ({ Component, pageProps, emotionCache }) => {
  const router = useRouter()

  return (
    <PageProvider emotionCache={emotionCache}>
      {/* <ThemeProvider theme={MuiOverride}> */}
      <Grid container>
        <Grid item xs={12}>
          <GlobalContextProvider>
            {router.pathname !== "/" && <Header />}
            <Component {...pageProps} />
          </GlobalContextProvider>
        </Grid>
      </Grid>
      {/* </ThemeProvider> */}
    </PageProvider>
  )
}

export default App
