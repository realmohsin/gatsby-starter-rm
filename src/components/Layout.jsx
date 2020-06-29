import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from '../styles/theme'
import Navigation from './Navigation/Navigation'

const Layout = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navigation />
        {children}
      </ThemeProvider>
    </>
  )
}

export default Layout
