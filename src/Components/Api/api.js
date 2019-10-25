import axios from 'axios';



const api = process.env.REACT_APP_CONTACTS_API_URL || 'http://localhost:3000';


axios.defaults.withCredentials = true;


export const RESTService = {
    login,
    getTableData

};



function login(data) {
    let url = api + '/upload/userlogin';
    let req1= {
        headers: {
            'Content-Type': 'application/json'
        }, 
        data
      }

      console.log(req1);
    return axios.get(url, req1);
}


function getTableData() {
    let url = api + '/upload/fetchs3data';
    return axiosGet(url);
}




function axiosPost(url, data) {
    return axios.post(url, data)
        .then(handleSuccess)
        .catch(handleError);
}

function axiosGet(url) {
    return axios.get(url)
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