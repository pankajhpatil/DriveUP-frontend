import axios from 'axios';
import { message } from "antd/lib/index";


const api = process.env.REACT_APP_CONTACTS_API_URL || 'http://localhost:3000';


axios.defaults.withCredentials = true;


export const RESTService = {
    login,
    getTableData,
    register,
    upload,
    deleteFile,

};


function login(data) {
    let url = api + '/login';
    return axios.post(url, data);
}


function register(data) {
    let url = api + '/register';
    return axios.post(url, data);
}

function deleteFile(data) {
    let url = api + '/upload/delete';
    return axios.post(url, data);
}


function upload(data) {
    let url = api + '/upload';

    return axios
        .post(url, data, {
            onUploadProgress: ProgressEvent => {
            },
        })
        .then(res => {
            message.success("File Uploaded Successfully!")
        }).catch(err => {
            console.log(err);
            message.error("Cannot Upload Now!")
        })


}

function getTableData() {
    let url = api + '/fetchs3data';
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