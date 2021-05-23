import * as React from 'react';
import { Field } from 'redux-form';
import { requiredField } from '../../../../utils/validators';

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function ProfileFieldEntry({ title, content, className, inputClassName = '', component = 'input' }) {
    return (
        <div className={className}>
            <b>{capitalizeFirstLetter(title)}</b>: 
            <Field className={inputClassName} name={title} component={component} type='text' defaultValue={content ?? 'not specified'} validate={[requiredField]} />
        </div>
    );
}

export default ProfileFieldEntry;