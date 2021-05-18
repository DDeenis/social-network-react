import React from 'react';
import store from "./redux/store";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import AppContainer from './AppContainer';

function MainApp() {
    return (
        <React.StrictMode>
            <BrowserRouter>
                <Provider store={store}>
                    <AppContainer />
                </Provider>
            </BrowserRouter>
        </React.StrictMode>
    );
}

export default MainApp;