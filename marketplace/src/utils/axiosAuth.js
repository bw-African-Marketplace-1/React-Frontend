import axios from 'axios';

export const axiosAuth = () => {
    const token = window.localStorage.getItem('token');

    return axios.create({
        baseURL: 'https://africanmarketplacept15.herokuapp.com/api/',
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}