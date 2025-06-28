import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;
const Content = {

    create: (content) => {
        return axios.post(`${API_URL}/content/create`, content);
    },

    read: (content) => {
        return axios.post(`${API_URL}/content/read`, content);
    },

    update: (content) => {
        return axios.post(`${API_URL}/content/update`, content);
    },

    delete: (content) => {
        return axios.post(`${API_URL}/content/delete`, content);
    }
}
export default Content