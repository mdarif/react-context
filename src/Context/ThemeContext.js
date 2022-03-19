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
 * Returns
 * createContext returns a context object.
 * ThemeContext.Provider lets you provide values to the context.
 */

/**
 * createContext(defaultValue)
 * defaultValue: The value that you want the context to have when
 * there is no matching context provider in the tree above the component
 * that reads context. If you don’t have any meaningful default value,
 * specify null. The default value is meant as a “last resort” fallback.
 * It is static and never changes over time.
 */
