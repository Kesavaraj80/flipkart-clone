import { createContext } from 'react';
import { CssBaseline } from '@mui/material';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';


const TemplateContext = createContext(null)


export const TemplateProvider = ({ children }) => {
    const theme = createMuiTheme({
        overrides: {
            MuiDialog: {
                paperWidthSm: {
                    maxWidth: 'unset'
                }
            },
            MuiDialogContent:{
                root:{
                    padding:0,
                    '&:first-child':{
                        paddingTop:'0'
                    }
                }
            }
        }
    })

    return (
        <TemplateContext.Provider>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </TemplateContext.Provider>
    )
}