// import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import { unstable_createMuiStrictModeTheme as createMuiTheme } from '@material-ui/core'

import purple from '@material-ui/core/colors/purple'
import green from '@material-ui/core/colors/green'

export default createMuiTheme({
  palette: {
    primary: {
      main: '#1d1e1f',
    },
    secondary: {
      main: '#292b2c',
    },
  },
  mixins: {
    toolbar: {
      height: 64,
    },
  },
  zIndex: {
    appBar: 11,
    drawer: 10,
  },
})
