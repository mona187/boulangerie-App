import axios from "axios";

const instance = axios.create({
  baseURL: "http://172.20.10.8:8000",
});

export default instance;
