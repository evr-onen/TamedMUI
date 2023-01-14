// ** React Core
import { useEffect } from "react"

// ** Mui Imports
import { Grid } from "@mui/material"

// ** Component Imports

// ** Types
interface PropsType {
  data: any[]
}

const Home = (props: PropsType) => {
  const { data } = props
  useEffect(() => {
    console.log(data)
  }, [])
  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid item></Grid>
    </Grid>
  )
}

export default Home

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1")
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}
