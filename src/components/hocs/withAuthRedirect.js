import React from 'react';
import { Redirect } from 'react-router';

function withAuthRedirect(Component) {
    const RedirectWrapper = (props) => {
        if(!props.isAuth) return <Redirect to='/login' />;

        return <Component {...props} />;
    }

    return RedirectWrapper;
}

export default withAuthRedirect;