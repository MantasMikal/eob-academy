import React from 'react'
import { node, bool } from 'prop-types'

const DarkContext = React.createContext()

const DarkContextProvider = ({ children, isDark }) => {
  return <DarkContext.Provider value={isDark}>{children}</DarkContext.Provider>
}

DarkContextProvider.propTypes = {
  children: node.isRequired,
  isDark: bool.isRequired
}

const DarkContextConsumer = DarkContext.Consumer
const useDarkContext = () => React.useContext(DarkContext)

export { DarkContext, DarkContextProvider, DarkContextConsumer, useDarkContext }
