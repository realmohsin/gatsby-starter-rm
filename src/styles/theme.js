import { createMuiTheme } from '@material-ui/core/styles'

const primaryColor = '#777777'

let theme = createMuiTheme({
  palette: {
    primary: {
      main: primaryColor
    }
  },
  typography: {
    htmlFontSize: 10
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '*, *::before, *::after': {
          margin: 0,
          padding: 0
        },
        html: {
          fontSize: '62.5%'
        },
        a: {
          textDecoration: 'none',
          color: 'inherit'
        },
        ul: {
          listStyle: 'none'
        },
        img: {
          display: 'block'
        },
        '::selection': {
          backgroundColor: primaryColor,
          color: 'white'
        }
      }
    }
  }
})

export default theme
