import axios from "axios";

const api = axios.create({
    baseURL: "https://dbh-edcd.onrender.com", // Replace with your server URL
});

export default api;
