import axios from "axios"


export default class LoginAxiosServices{
    
    post(url,data,Header){
        console.log("In Axios");
        return axios.post(url,data,Header).then((response)=>{
            localStorage.setItem("Token",response.data);
        console.log(response);
        })
    }
}
