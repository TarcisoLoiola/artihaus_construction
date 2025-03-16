import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;
const Content = {

    create: (data) => {
        return axios.post(`${API_URL}/content/create`, data);
    },

    read: (data) => {
        return axios.get(`${API_URL}/content/read`, data);
    },

    update: (data) => {
        return axios.post(`${API_URL}/content/update`, data);
    },

    delete: (data) => {
        return axios.post(`${API_URL}/content/delete`, data);
    }
}
export default Content