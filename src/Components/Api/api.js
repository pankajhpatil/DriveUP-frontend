import axios from 'axios';


const api = process.env.REACT_APP_CONTACTS_API_URL || 'http://localhost:3001';


axios.defaults.withCredentials = true;


export const RESTService = {
    login,

};


function login(data) {
    let url = api + '/login';
    return axiosPost(url, data);
}


function axiosPost(url, data) {
    return axios.post(url, data)
        .then(handleSuccess)
        .catch(handleError);
}

function axiosGet(url, data) {
    return axios.get(url, data)
        .then(handleSuccess)
        .catch(handleError);
}

function handleSuccess(response) {
    return response;
}

function handleError(error) {
    if (error.response) {
        return Promise.reject(error.response);
    }
}