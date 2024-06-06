import axios from "axios";


export default axios.create({
    baseURL: "http://34.71.240.100/api",
    // headers: {
    //     authorization: `Bearer ${token}`,
    // }
});
