import { createMuiTheme } from '@material-ui/core/styles'

const darkTheme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: {
            main: '#ffa000',
            contrastText: 'white',
        },
        secondary: {
            main: '#ffc400',
        },
        background: {
            default: "#121212",
            level1: "#212121",
            level2: "#333333",
            paper: "#424242",
        },
    },
})

export default darkTheme