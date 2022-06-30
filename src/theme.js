import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            // light: will be calculated from palette.primary.main,
            main: '#1C1A19',
            // dark: will be calculated from palette.primary.main,
            // contrastText: will be calculated to contrast with palette.primary.main
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                // Name of the slot
                root: {
                    // Some CSS
                    backgroundColor: '#FDBF5A',
                    color: '#000',
                    textTransform: "none",
                    borderRadius: '70px',
                    '&:hover': {
                        backgroundColor: '#FFA842'
                    },
                    '&:disabled': {
                        backgroundColor: '#D8D7D5'
                    }
                },
            },
        },
        MuiLink: {
            styleOverrides: {
                // Name of the slot
                root: {
                    // Some CSS
                    color: '#fff',
                    textDecoration: "none",
                    '&:hover': {
                        color: '#FDBF5A'
                    }
                },
            },
        }
    },
});

export default theme;
