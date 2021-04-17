import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

import App from './App'

import './index.css'

const theme = createMuiTheme({
    overrides: {
        MuiPaper: {
            root: {
                msOverflowStyle: 'none',
                scrollbarWidth: 'none',
                overflow: 'hidden'
            }
        },
        MuiTextField: {
            root: {
                margin: '8px'
            }
        },
        MuiCardActions: {
            root: {
                justifyContent: 'center'
            }
        }
    },
    palette: {
        primary: {
            main: '#ba000d'
        }
    }
})

ReactDOM.render(
    <React.StrictMode>
        <MuiThemeProvider theme={theme}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </MuiThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
)
