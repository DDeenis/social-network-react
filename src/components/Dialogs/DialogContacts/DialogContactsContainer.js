import React from 'react';
import { useSelector } from "react-redux";
import DialogContacts from "./DialogContacts";

function DialogContactsContainer() {
    const people = useSelector(state => state.chat.people);

    return (
        <DialogContacts 
            people={people}
        />
    );
}

export default DialogContactsContainer;