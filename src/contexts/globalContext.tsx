// ** React / Next Core
import React, { useEffect, useState } from "react"
import Axios from "axios"
import Router from "next/router"
import jwt_decode from "jwt-decode"
import { DecodedType } from "@/types/response"
// ** Types
type UserType = { name: string; surname: string; userRole: number; storeId: number; token: null | string }
interface IGlobalContextProps {
  user: UserType
  settings: Settings
  setUser: (user: UserType) => void
  setSettings: (themeMode: Settings) => void
}

type Settings = {
  mode: string
  lang: string
  direction: string
}
export const GlobalContext = React.createContext<IGlobalContextProps>({
  user: { name: "", surname: "", userRole: 0, storeId: 0, token: null },
  settings: { mode: "light", lang: "tr", direction: "ltr" },
  setUser: () => {},
  setSettings: () => {},
})

export const GlobalContextProvider = (props: any) => {
  const [themeSettings, setthemeSettings] = useState({ mode: "light", lang: "tr", direction: "ltr" })
  const [currentUser, setCurrentUser] = useState<UserType>({ name: "", surname: "", userRole: 0, storeId: 0, token: null })

  useEffect(() => {
    if (currentUser.token === null) {
      let token = localStorage?.user

      if (token !== undefined) {
        const ttt = async () => {
          try {
            const response = await Axios.post("http://127.0.0.1:8000/api/auth/refresh", null, {
              headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${token}`,
              },
            })
            console.log(response)
            const decoded: DecodedType = jwt_decode(response?.data?.access_token)
            setCurrentUser({
              name: decoded.name,
              surname: decoded.surn,
              userRole: decoded.role,
              storeId: decoded.stor,
              token: response?.data?.access_token,
            })
          } catch (response) {
            Router.push("/login")
          }
        }
        ttt()
      } else {
        Router.push("/login")
      }
    } else {
      console.log(currentUser)
    }
  }, [])
  return (
    <GlobalContext.Provider
      value={{
        user: currentUser,
        settings: themeSettings,
        setUser: setCurrentUser,
        setSettings: setthemeSettings,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  )
}

// ** bunu ne zaman yapacak
// ** eger context bos ise local storageden token i kullanarak refresh yapacak
// ** eger context dolu ise es gececek
