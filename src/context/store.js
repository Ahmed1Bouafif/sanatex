import React, { createContext, useContext, useEffect, useState, useLayoutEffect } from "react"

const StoreContext = createContext({})

export const StoreProvider = ({ children }) => {
  const [expandNav, setExpandNav] = useState(false)
  const [activeFormTab, setActiveFormTab] = useState(0)
  const [theme, setTheme] = useState(null)

  useLayoutEffect(() => {
    const deviseTime = new Date().getHours()
    // || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
    // console.log("===>", deviseTime)
    if (localStorage.theme === "dark" || (deviseTime < 6 || deviseTime >= 18)) {
      setTheme("dark")
    } else {
      setTheme("light")
    }
  }, [])

  useEffect(() => {})

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }, [theme])

  const switchTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"))
  }

  return (
    <StoreContext.Provider
      value={{
        expandNav,
        setExpandNav,
        activeFormTab,
        setActiveFormTab,
        theme,
        setTheme,
        switchTheme,
      }}
    >
      {children}
    </StoreContext.Provider>
  )
}

export const useNavContext = () => {
  const { expandNav, setExpandNav } = useContext(StoreContext)
  return { expandNav, setExpandNav }
}

export const useFormTabContext = () => {
  const { activeFormTab, setActiveFormTab } = useContext(StoreContext)
  return { activeFormTab, setActiveFormTab }
}

export const useThemeContext = () => {
  const { theme, setTheme, switchTheme } = useContext(StoreContext)
  return { theme, setTheme, switchTheme }
}
