import React, { useState } from "react"

interface IGlobalContextProps {
  user: string
  settings: Settings
  setUser: (user: string) => void
  setSettings: (themeMode: Settings) => void
}

// ** Types
type Settings = {
  mode: string
  lang: string
  direction: string
}

export const GlobalContext = React.createContext<IGlobalContextProps>({
  user: "",
  settings: { mode: "light", lang: "tr", direction: "ltr" },
  setUser: () => {},
  setSettings: () => {},
})

export const GlobalContextProvider = (props: any) => {
  const [currentUser, setCurrentUser] = useState("")
  const [themeSettings, setthemeSettings] = useState({ mode: "light", lang: "tr", direction: "ltr" })

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
