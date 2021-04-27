import React from 'react';
import { useSelector } from 'react-redux';
import Nav from './Nav';

function NavContainer() {
    const { userId } = useSelector(state => state.login);
    const { people } = useSelector(state => state.sidebar);

    return (
        <Nav
            userId={userId}
            people={people}
        />
    );
}

export default NavContainer;