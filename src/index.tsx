import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './modules/app/App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom'
import Firebase, { FirebaseContext } from './modules/firebaseApp';
//MUI Imports
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: { 
            main: '#2196f3'
        },
        secondary: {
            main: '#e65c00'
        },
      }
})



ReactDOM.render(<FirebaseContext.Provider value={new Firebase()} >
                    <MuiThemeProvider theme={theme}>
                        <BrowserRouter>
                            <App />
                        </BrowserRouter>
                    </MuiThemeProvider>
                    
                </FirebaseContext.Provider>,

                document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
