import { Grid, CardHeader, Avatar, IconButton, Card, CardContent, Typography, Button, TextField } from "@mui/material"
import React, { useEffect } from "react"
import { useGlobalContext } from "src/contexts"
import { useTheme } from "@mui/material"
import { tAsString } from "src/lang/t-as-string"
import { DataGrid } from "@mui/x-data-grid"

const index = () => {
  const theme = useTheme()
  console.log(theme)
  const { user, setUser } = useGlobalContext()
  useEffect(() => {
    console.log(user)
  }, [])
  return (
    <Grid container>
      <Grid item>{tAsString("destinations")}</Grid>
      <Grid item>
        <Card>
          <CardHeader title="adasdasd" />
          <CardContent>
            <Typography variant="h5">asdasd</Typography>
            <Button variant="contained"> Button Example</Button>
            <TextField variant="outlined" label="ouasd" />
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default index
