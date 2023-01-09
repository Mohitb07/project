import axios from "axios";
const MASTER_API_URL = "http://localhost:8001"

class userprojectmap{
    adduser = (user)=> {
        return axios.post(`${MASTER_API_URL}/upm/save`,user)
    }
}
export default new userprojectmap;