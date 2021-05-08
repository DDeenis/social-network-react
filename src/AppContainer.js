import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import App from './App';
import LoaderCircle from './components/Common/Loader/LoaderCircle';
import { getMeThunkCreator } from './redux/thunkCreators';

function AppContainer() {
    const { isAuth } = useSelector(state => state.login);
    const { isLoading } = useSelector(state => state.app); 
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMeThunkCreator());
    }, [isAuth]);

    return (
        <>
        {
            isLoading
            ? <div style={{ display: 'flex', flexFlow: 'row wrap', justifyContent: 'flex-start', alignItems: 'center' }}>
                <LoaderCircle />
                <span>Загрузка...</span>
              </div>
            : <App />
        }
        </>
    );
}

export default AppContainer;