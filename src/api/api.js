import axios from "axios";

const initialApi = {
    baseUrl: 'http://localhost:3001/data'
}

export const api = {
    getProducts() {
        return axios.get(`${initialApi.baseUrl}`)
            .then(response => {
                return response
            })
            .catch(error => {
                return console.log(error)
            })
    }
}
