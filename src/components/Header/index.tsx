// ** React Core
import React, { useEffect, useState } from "react"
import dynamic from "next/dynamic"

// ** Theme Imports
import { useTheme } from "next-themes"

// ** MUI Imports
import { Card, CardContent, Grid, IconButton } from "@mui/material"

// ** Icons
const UIWeatherSunny = dynamic(() => import("mdi-material-ui/WeatherSunny"), { ssr: false })
const UIWeatherNight = dynamic(() => import("mdi-material-ui/WeatherNight"), { ssr: false })

// ** Components
import LangDropdown from "./LangDropdown"

const Header = () => {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), [])

  return (
    <Grid container className="evren" justifyContent="center" marginBottom="50px">
      <Grid item xs={9}>
        <Card>
          <CardContent>
            <Grid container spacing={5} justifyContent="space-between">
              <Grid item></Grid>
              <Grid item xs={4}>
                <Grid container spacing={5} justifyContent="flex-end">
                  <Grid item>
                    <IconButton color="inherit" aria-label="themeBtn" onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}>
                      {resolvedTheme === "light" ? <UIWeatherNight /> : <UIWeatherSunny />}
                    </IconButton>
                    <LangDropdown />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Header
