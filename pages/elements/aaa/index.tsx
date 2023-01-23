import React, { useEffect } from "react"
import { useGlobalContext } from "src/contexts"

import { tAsString } from "src/lang/t-as-string"

const index = () => {
  const { user, setUser } = useGlobalContext()
  useEffect(() => {
    console.log(user)
  }, [])
  return <div> {tAsString("destinations")} </div>
}

export default index
