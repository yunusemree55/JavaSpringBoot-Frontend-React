import axios from "axios";

class JobAdvertisementService{

    getAll() {

        return axios.get("http://localhost:8080/api/jobadvertisements/getall")
        
    }

    getByCompanyName(name){
        return axios.get(`http://localhost:8080/api/jobadvertisements/getJobAdvertisementByCompanyName/:companyName?companyName=${name}`)
    }

}

export default JobAdvertisementService