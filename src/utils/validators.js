export const requiredField = (value) => value ? undefined : 'Field is required';

export const maxLengthValidatorCreator = (maxLength) => (value) => value?.length > maxLength ? `Max length is ${maxLength}` : undefined;
export const minLengthValidatorCreator = (minLength) => (value) => value?.length < minLength ? `Min length is ${minLength}` : undefined;
