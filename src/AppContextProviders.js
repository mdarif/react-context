import React, { useState } from 'react'
import { ContextProviders } from './Context/ContextProviders'
// import { ThemeContext } from './Context/ThemeContext'
import FunctionContext from './FunctionContext'

function AppContextProviders () {
  /**
   * Updating data passed via context:
   * Often, you’ll want the context to change over time. To update context,
   * you need to combine it with state. Declare a state variable in the parent component,
   * and pass the current state down as the context value to the provider.
   */
  const [darkTheme, setDarkTheme] = useState(true)

  function toggleTheme () {
    setDarkTheme(prevDarkTheme => !prevDarkTheme)
  }

  /**
   * ThemeContext.Provider
   * Wrap your components into a context provider to specify the value of this context
   * for all components inside:
   *
   * Props:
   * value={darkTheme}: The value that you want to pass to all the components reading this context
   * inside this provider, no matter how deep. The context value can be of any type.
   * A component calling useContext(SomeContext) inside of the provider receives the
   * value of the innermost corresponding context provider above it.
   */

  return (
    <>
      {/* Context is useful because you can provide other, dynamic values from your components: */}
      <ContextProviders darkTheme={darkTheme}>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <FunctionContext />
      </ContextProviders>
      {/* Now the FunctionContext component and any components inside it, no matter how deep, will “see” the passed context values. If the passed context values change, 
      React will re-render the components reading the context as well. */}
    </>
  )
}

export default AppContextProviders
