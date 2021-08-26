import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
    palette: {
        common: {
            lightGrey: '#C5C6C7',
            lightBlack: '#1F2833',
            darkBlack: '#1d202b'
        },
        primary: {
            main: '#66FCF1'
        },
        secondary: {
            main: '#45A29E'
        }
    },
    typography: {
        body1: {
            fontSize: '1.3rem',
        },
        allVariants: {
            fontFamily: 'roboto'
        }
    },
    breakpoints: {
        Navigation: 1080,
    }
});

theme.typography.body1 = {
    fontSize: '1.3rem',
    fontFamily: 'roboto',
    [theme.breakpoints.down('sm')]: {
        fontSize: '1rem',
    },
};

export default theme;