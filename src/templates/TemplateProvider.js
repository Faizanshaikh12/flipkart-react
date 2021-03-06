import {ThemeProvider, makeStyles} from '@material-ui/core/styles';
import createTheme from "@material-ui/core/styles/createTheme";
import {createContext} from "react";
import {CssBaseline} from "@material-ui/core";

const TemplateContext = createContext(null);

export const TemplateProvider = ({children}) => {
    const theme = createTheme({
        overrides: {
            MuiDialog: {
                paperWidthSm: {
                    maxWidth: 'unset'
                }
            }, MuiDialogContent: {
                root: {
                    padding: 0,
                    '&:first-child': {
                        paddingTop: 0
                    }
                }
            }
        }
    })
    return (<TemplateContext.Provider value={children}>
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            {children}
        </ThemeProvider>
    </TemplateContext.Provider>)
}
