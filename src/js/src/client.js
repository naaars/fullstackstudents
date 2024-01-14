import fetch from 'unfetch';

const getStudents = () => fetch('/v1/students');

export { getStudents };