import axios from "axios";
 const axiosInstance=axios.get({
    baseURL:"http://localhost:3000",
    timeout:3000,
})
export const fetcher = async (url) => axiosInstance.get(url).then((res) => res.data);
