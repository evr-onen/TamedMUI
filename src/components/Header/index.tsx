// ** React Core
import { Button, css, Card, CardActions, CardContent, CardMedia, Typography, Grid, Slide, IconButton } from "@mui/material"
import React, { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import LightModeIcon from "@mui/icons-material/LightMode"
import DarkModeIcon from "@mui/icons-material/DarkMode"
// ** MUI Imports

const ProductCard = () => {
  const { theme, resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), [])

  return (
    <Grid container className="evren" justifyContent="center">
      <Grid item xs={9}>
        <Card elevation={12}>
          <CardContent>
            <Grid container spacing={5} justifyContent="space-between">
              <Grid item></Grid>
              <Grid item xs={4}>
                <Grid xs={12} container spacing={5} justifyContent="flex-end">
                  <Grid item>
                    <IconButton aria-label="themeBtn" onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}>
                      {resolvedTheme === "light" ? <DarkModeIcon /> : <LightModeIcon />}
                    </IconButton>
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

export default ProductCard
