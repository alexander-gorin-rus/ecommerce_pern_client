import axios from 'axios';

const $host = axios.create({
    baseURL: process.env.REACT_APP_API
});

const $authHost = axios.create({
    baseURL: process.env.REACT_APP_API
});

const authIntercerptor = (config) => {
    config.headers.authorization = `x-auth-token ${localStorage.getItem('token')}`
}

$authHost.interceptors.request.use(authIntercerptor);

export {
    $authHost,
    $host
}