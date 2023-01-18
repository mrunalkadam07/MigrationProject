import Configuration from "../Configuration/Configuration";
import PropertyAxiosService from "./PropertyAxiosService";

const axios = new PropertyAxiosService();

export default class PropertyTaxServices{
    PropertyTaxPaid(data){
        console.log("data : ",data,"Url : ",Configuration.PropertyTaxPaid)
        return axios.post(Configuration.PropertyTaxPaid,data,false)
    }
}