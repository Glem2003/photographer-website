import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: '#D4A373',
            contrastText: '#000'
        },
        secondary: {
            main: '#fff',
            contrastText: '#000',
        },
        background: {
            default: '#0f0f0f',
        },
        text: {
            primary: '#fff'
        }
    },
    typography: {
        fontFamily: `'Inter', 'Noto Sans TC', sans-serif`,
    }
})

export default theme