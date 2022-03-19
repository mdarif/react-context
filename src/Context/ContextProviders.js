import { createContext } from 'react'

export const ThemeContext = createContext(null)

export function ContextProviders ({ children, darkTheme }) {
  return (
    <ThemeContext.Provider value={darkTheme}>{children}</ThemeContext.Provider>
  )
}
