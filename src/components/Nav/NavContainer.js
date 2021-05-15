import * as React from 'react';
import { useSelector } from 'react-redux';
import { peopleOnlineSelector, userIdSelector } from '../../redux/selectors';
import Nav from './Nav';

function NavContainer() {
    const userId = useSelector(userIdSelector);
    const people = useSelector(peopleOnlineSelector);

    return (
        <Nav
            userId={userId}
            people={people}
        />
    );
}

export default NavContainer;