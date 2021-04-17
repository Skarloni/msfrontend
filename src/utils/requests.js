import axios from 'axios'
import fileDownload from 'js-file-download'
import { resolve } from 'url'

const api = 'http://0.0.0.0:5000/'
const config = {
    headers: {
        'Content-Type': 'application/json'
    }
}

export const _get = (endpoint, callback) => {
    axios
        .get(resolve(api, endpoint), config)
        .then((response) => {
            callback(response)
        })
        .catch((error) => {
            console.log(error.response)
        })
}

export const _delete = (endpoint, callback) => {
    axios
        .delete(resolve(api, endpoint), config)
        .then((response) => {
            callback(response)
        })
        .catch((error) => {
            console.log(error.response)
        })
}

export const _post = (endpoint, data, callback) => {
    axios
        .post(resolve(api, endpoint), data, config)
        .then((response) => {
            callback(response)
        })
        .catch((error) => {
            console.log(error.response)
        })
}

export const _patch = (endpoint, data, callback) => {
    axios
        .patch(resolve(api, endpoint), data, config)
        .then((response) => {
            callback(response)
        })
        .catch((error) => {
            console.log(error.response)
        })
}

export const _download = (endpoint, params, fileName) => {
    const _config =
        params !== null
            ? { params: params, responseType: 'blob' }
            : { responseType: 'blob' }
    axios
        .get(resolve(api, endpoint), _config)
        .then((response) => {
            fileDownload(response.data, fileName)
        })
        .catch((error) => {
            console.log(error.response)
        })
}

export const _upload = (endpoint, file, callback) => {
    const data = new FormData()
    data.append('file', file)
    axios
        .post(resolve(api, endpoint), data, {
            headers: { 'Content-Type': 'multipart/form-data' }
        })
        .then((response) => {
            callback(response)
        })
        .catch((error) => {
            console.log(error.response)
        })
}
