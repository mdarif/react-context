import React, { useContext } from 'react'
import { ThemeContext } from './Context/ContextProviders'
/**
 * Components declared in other files can then use the import
 * statement to read or provide this context:
 */
// import { ThemeContext } from './Context/ThemeContext'

export default function FunctionContext () {
  /**
   * useContext is a React Hook that lets you read and subscribe to context from your component.
   *
   * useContext returns the context value for the context you passed.
   * To determine the context value, React searches the component tree
   * and finds the closest context provider above for that particular context.
   */
  const darkTheme = useContext(ThemeContext)

  /**
   * Pitfall:
   * useContext() always looks for the closest provider above the component that calls it.
   * It searches upwards and does not consider providers in the component from which you’re
   * calling useContext().
   */

  console.log('FunctionContext.js: darkTheme', darkTheme)
  const themeStyles = {
    backgroundColor: darkTheme ? '#333' : '#ccc',
    color: darkTheme ? '#fff' : '#000',
    transition: 'background-color 0.5s ease-in-out',
    padding: '2rem',
    margin: '2rem'
  }

  return <div style={themeStyles}>Theme Context</div>
}
