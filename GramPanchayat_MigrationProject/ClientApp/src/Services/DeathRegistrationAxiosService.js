import axios from "axios"


export default class DeathRegistrationAxiosService{
    post(url,data,Header){
        console.log("In Axios");
        return axios.post(url,data,{headers:{'Authorization':'Bearer'+" "+localStorage.getItem("Token")}}).then((response)=>{
        if(response.status===200)
        {
            alert("Data Added Successfully")
        }
        else{
            alert("Unable to add data")
        }
        })
    }
    put(url,data,Header){
        console.log("In Axios");
        return axios.put(url,data,{headers:{'Authorization':'Bearer'+" "+localStorage.getItem("Token")}}).then((response)=>{
        if(response.status===200)
        {
            alert("Data Updadte Successfully")
        }
        else{
            alert("Invalid Credentials")
        }
        })
    }

    get(url,Header){
        console.log("In Axios");
        return axios.post(url,{headers:{'Authorization':'Bearer'+" "+localStorage.getItem("Token")}}).then((response)=>{
        if(response.status===200)
        {
            alert("Data Fetched Successfully")
        }
        else{
            alert("Invalid Credentials")
        }
        })
    }

    delete(url,data,Header){
        console.log("In Axios");
        return axios.post(url,data,{headers:{'Authorization':'Bearer'+" "+localStorage.getItem("Token")}}).then((response)=>{
        if(response.status===200)
        {
            alert("Data Deleted Successfully")
        }
        else{
            alert("Invalid Credentials")
        }
        })
    }

}
