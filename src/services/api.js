// JavaScript
import axios from 'axios';

export const ApiData = axios.create({
    baseURL: "https://store-iceream-production.up.railway.app/",
});

export const SetAuthToken = (token) => {
    if (token) {
        ApiData.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
        delete ApiData.defaults.headers.common["Authorization"];
    }
};
