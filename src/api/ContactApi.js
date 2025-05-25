import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;
const Contact = {

    create: (data) => {
        return axios.post(`${API_URL}/contact/create`, data);
    },

    read: (data) => {
        return axios.get(`${API_URL}/contact/read`, data);
    },

    update: (data) => {
        return axios.post(`${API_URL}/contact/update`, data);
    },

    delete: (data) => {
        return axios.post(`${API_URL}/contact/delete`, data);
    }
}
export default Contact