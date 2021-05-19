import React, { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import App from './App';
import LoaderCircle from './components/Common/Loader/LoaderCircle';
import { isLoadingSelector } from './redux/selectors';
import { getMeThunkCreator } from './redux/thunkCreators';

function AppContainer() {
    // const { isAuth } = useSelector(state => state.login);
    const isLoading = useSelector(isLoadingSelector); 
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMeThunkCreator());
    }, []);

    return (
        <>
        {
            isLoading
            ? <div style={{ display: 'flex', flexFlow: 'row wrap', justifyContent: 'flex-start', alignItems: 'center' }}>
                <LoaderCircle />
                <span>Загрузка...</span>
              </div>
            : <Suspense fallback={<LoaderCircle />}>
                <App />
              </Suspense>
        }
        </>
    );
}

export default AppContainer;