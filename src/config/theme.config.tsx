import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import React from 'react';

type ThemeProp = {
    children: JSX.Element;
}

export enum themePalette {
    BG = '#FFFFFF',
    WHITE = '#FAFAFE',
    PURPLE = '#644BBA',
    BLACK = '#1C1B1E',
    FONT_GLOBAL = "Roboto"
}

const theme = createTheme({
    palette: {
        mode: "light",
        background:{
            default: themePalette.BG,
        },
        primary: {
            main: themePalette.PURPLE
        },
        secondary: {
            main: themePalette.WHITE
        }
    },
    typography: {
        fontFamily: themePalette.FONT_GLOBAL
    },
    components: {
        MuiButton: {
            defaultProps: {
                style: {
                    textTransform:"none",
                    boxShadow:"none",
                    borderRadius:"100px",
                    marginLeft:"5px",
                    marginRight:"5px"
                }
            }
        },
    }
})

export const ThemeConfig: React.FC<ThemeProp> = ({children}) => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    )
}