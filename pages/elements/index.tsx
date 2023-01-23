// ** Core imports
import { useEffect, useState } from "react"
import dynamic from "next/dynamic"
import Link from "next/link"

// ** Context API
import { useGlobalContext } from "src/contexts"

// ** MUI imports
import { Tabs, Tab, Typography, Box, Grid, Stack } from "@mui/material"

// ** Dynamic Imports
const UITextField = dynamic(() => import("src/components/elements/UITextField"), { ssr: false })

const index = () => {
  // ** States
  const [value, setValue] = useState(0)

  // ** Calls
  const { user, setUser } = useGlobalContext()

  // ** Handler Funcs
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  function a11yProps(index: number) {
    return {
      id: `vertical-tab-${index}`,
      "aria-controls": `vertical-tabpanel-${index}`,
    }
  }

  useEffect(() => {
    setUser("evren")
  }, [])

  console.log(useGlobalContext())

  return (
    <Grid container sx={{ flexGrow: 1, display: "flex", height: "80vh" }}>
      <Grid item xs={1}>
        <Tabs orientation="vertical" variant="scrollable" value={value} onChange={handleChange} aria-label="Vertical tabs example" sx={{ ml: "5px", borderRight: 1, borderColor: "divider" }}>
          <Tab label="TextField" {...a11yProps(0)} />
          <Tab label="AutoComplate" {...a11yProps(1)} />
          <Tab label="Date " {...a11yProps(2)} />
          <Tab label="BreadCrump" {...a11yProps(3)} />
          <Tab label="DataGrid" {...a11yProps(4)} />
          <Tab label="Table" {...a11yProps(5)} />
          <Tab label="Wizard" {...a11yProps(6)} />
          <Tab label="asdasd" {...a11yProps(7)} />
          <Tab label="Item Seven" {...a11yProps(8)} />
        </Tabs>
      </Grid>
      <Grid item xs={11}>
        <Link href={"/elements/aaa"}>aaa ya gider</Link>
        <Box role="tabpanel" hidden={value !== 0} id={`vertical-tabpanel-0`} aria-labelledby={`vertical-tab-0`}>
          {value === 0 && (
            // <Grid item sx={{ p: 3 }} xs={12} display="flex">
            <Stack direction="row" alignItems="center" justifyContent="center" sx={{ height: "100%" }}>
              <UITextField />
            </Stack>
          )}
        </Box>
        <Box role="tabpanel" hidden={value !== 1} id={`vertical-tabpanel-1`} aria-labelledby={`vertical-tab-1`}>
          {value === 1 && (
            // <Grid item sx={{ p: 3 }} xs={12} display="flex">
            <Stack direction="row" alignItems="center" justifyContent="center">
              <Typography textTransform="uppercase">TextField</Typography>
            </Stack>
          )}
        </Box>
        <Grid role="tabpanel" hidden={value !== 2} id={`vertical-tabpanel-2`} aria-labelledby={`vertical-tab-2`}>
          {value === 2 && (
            <Stack direction="row" alignItems="center" justifyContent="center">
              <Typography>2</Typography>
            </Stack>
          )}
        </Grid>
        <Box role="tabpanel" hidden={value !== 3} id={`vertical-tabpanel-3`} aria-labelledby={`vertical-tab-3`}>
          {value === 3 && (
            <Stack direction="row" alignItems="center" justifyContent="center">
              <Typography>3</Typography>
            </Stack>
          )}
        </Box>
        <Box role="tabpanel" hidden={value !== 4} id={`vertical-tabpanel-4`} aria-labelledby={`vertical-tab-4`}>
          {value === 4 && (
            <Stack direction="row" alignItems="center" justifyContent="center">
              <Typography>4</Typography>
            </Stack>
          )}
        </Box>
        <Box role="tabpanel" hidden={value !== 5} id={`vertical-tabpanel-5`} aria-labelledby={`vertical-tab-5`}>
          {value === 5 && (
            <Stack direction="row" alignItems="center" justifyContent="center">
              <Typography>5</Typography>
            </Stack>
          )}
        </Box>
        <Box role="tabpanel" hidden={value !== 6} id={`vertical-tabpanel-6`} aria-labelledby={`vertical-tab-6`}>
          {value === 6 && (
            <Stack direction="row" alignItems="center" justifyContent="center">
              <Typography>6</Typography>
            </Stack>
          )}
        </Box>
        <Box role="tabpanel" hidden={value !== 7} id={`vertical-tabpanel-7`} aria-labelledby={`vertical-tab-7`}>
          {value === 7 && (
            <Stack direction="row" alignItems="center" justifyContent="center">
              <Typography>7</Typography>
            </Stack>
          )}
        </Box>
        <Box role="tabpanel" hidden={value !== 8} id={`vertical-tabpanel-8`} aria-labelledby={`vertical-tab-8`}>
          {value === 8 && (
            <Stack direction="row" alignItems="center" justifyContent="center">
              <Typography>8</Typography>
            </Stack>
          )}
        </Box>
      </Grid>
    </Grid>
  )
}

export default index
