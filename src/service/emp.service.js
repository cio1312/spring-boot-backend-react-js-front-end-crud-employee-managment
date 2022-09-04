import axios from "axios";

const BASE_API_URL = "http://localhost:8080/employee/v1"
class Empservice {


    saveEmp(emp) {
        return axios.post(BASE_API_URL + "/save", emp);

    }

    getAllEmp() {

        return axios.post(BASE_API_URL + "/getallemployee");
    }

    getEmpById(id) {
        return axios.get(BASE_API_URL + "/empById/"+id);
    }

    deletetheEmp(id) {
        return axios.get(BASE_API_URL + "/deleteEmp/" + id);
    }

    updateEmp(id,emp) {
        return axios.post(BASE_API_URL + "/update/" + id,emp);
    }

}

export default new Empservice();