import React, { useEffect, useState, useMemo } from "react";
import { ThemeContext, themes } from "./themeContext";


export const ThemeProvider = ({ children }) => {
  const [themeValue, setThemeValue] = useState(themes.light)

  useEffect(() => {
    const presistedTheme = JSON.parse(localStorage.getItem("currentTheme"))
    if (presistedTheme) {
      setThemeValue(presistedTheme)
    }
  }, [themeValue])

  const toggleTheme = () => {
    setThemeValue((prev) => prev === themes.dark ? themes.light : themes.dark)
  }

  const contextValue = useMemo(() => {
    return { theme: themeValue, toggleTheme };
  }, [themeValue, toggleTheme])

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  )
}