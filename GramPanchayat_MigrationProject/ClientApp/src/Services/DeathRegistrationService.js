import Configuration from "../Configuration/Configuration";
import DeathRegistrationAxiosService from "./DeathRegistrationAxiosService";

const axios = new DeathRegistrationAxiosService();

export default class DeathRegistrationService{
    DeathRegistration(data){
        console.log("data : ",data,"Url : ",Configuration.DeathRegistration)
        return axios.post(Configuration.DeathRegistration,data,false)
    }
    UpdateDeathRegistration(data){
        console.log("data : ",data, "Url : ", Configuration.UpdateDeathRegistration)
        return axios.put(Configuration.UpdateDeathRegistration,{data:{id:data.registration_no}},data,false)
    }

    GetDeathRegistration(){
        console.log("Url : ", Configuration.GetDeathRegistration)
        return axios.get(Configuration.GetDeathRegistration,false)
    }

    GetDeathRegistrationById(data){
        console.log("Url : ", Configuration.GetDeathRegistrationById)
        return axios.get(Configuration.GetDeathRegistrationById,{data:{id:data.registration_no}},false)
    }

    DeleteDeathRegistration(data){
        console.log("Url : ", Configuration.DeleteDeathRegistration)
        return axios.delete(Configuration.DeleteDeathRegistration,{data:{id:data.registration_no}},false)
    }
}