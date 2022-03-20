import { createContext } from 'react'

/**
 * Often, components in different files will need access to the same context.
 * This is why it’s common to declare contexts in a separate file.
 * Then you can use the export statement to make context available for other files.
 */

/**
 * createContext lets you create a context that components
 * can provide or read.
 * Context lets components pass information deep down without
 * explicitly passing props.
 * Call createContext outside any components to create one or more contexts.
 */

export const ThemeContext = createContext(null)

/**
 * As your app grows, it is expected that you’ll have a “pyramid” of contexts closer
 * to the root of your app. There is nothing wrong with that. However, if you dislike
 * the nesting aesthetically, you can extract the providers into a single component.
 * In this example, ContextProviders hides the “plumbing” and renders the children passed
 * to it inside the necessary providers. Note that the darkTheme state is
 * needed in AppContextProviders itself, so AppContextProviders still owns that piece of the state.
 */

export function ContextProviders ({ children, darkTheme }) {
  return (
    <ThemeContext.Provider value={darkTheme}>{children}</ThemeContext.Provider>
  )
}
